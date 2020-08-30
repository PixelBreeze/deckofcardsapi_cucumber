package stepdefs;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.Assert;
import org.w3c.dom.Document;
import response.handlers.SuccessAsJSONObject;


import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import constructors.cardsObject;

public class RESTStepCalls {

    private String newSDeck = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=";
    private String deckManipulation = "https://deckofcardsapi.com/api/deck/";
    private String newPartialDeck = "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=";
    private String prevDeckID = null;
    private String newDeckID = null;
    private int cardsDrawn; //card count drawn from a deck
    private int cardsInDeck; //cards in deck currently
    private JSONObject responseBody; //response
    private JSONArray drawnCardsArray; //array for current drawn cards in memory

    @Given("Get \"([^\"]*)\" new shuffled deck of cards$")
    public void deckRequestIsCalled(int deckCount) {
        CloseableHttpClient httpClient = HttpClients.createDefault();
        HttpGet httpGet = new HttpGet(newSDeck + deckCount);

        try {
            httpGet.getRequestLine();
            responseBody = httpClient.execute(httpGet, SuccessAsJSONObject.responseHandler);

            //check for success, shuffle, card count in deck/s & save ID
            Assert.assertTrue("The success condition is False", responseBody.getBoolean("success") == true);
            prevDeckID = responseBody.getString("deck_id");
            Assert.assertTrue("The card deck is not shuffled", responseBody.getBoolean("shuffled") == true);
            cardsInDeck = deckCount * 52;
            Assert.assertTrue("The remaining card count is incorrect for deck/s", responseBody.getInt("remaining") == cardsInDeck);

            httpClient.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @When("^A new shuffled deck is requested$")
    public void a_new_shuffled_deck_is_requested() {
        CloseableHttpClient httpClient = HttpClients.createDefault();
        HttpGet httpGet = new HttpGet(newSDeck + "1");

        try {
            httpGet.getRequestLine();
            responseBody = httpClient.execute(httpGet, SuccessAsJSONObject.responseHandler);
            //save new ID and remaining
            newDeckID = responseBody.getString("deck_id");
            cardsInDeck = responseBody.getInt("remaining");
            httpClient.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Then("^New deck is unique$")
    public void new_deck_is_unique() {
        //compare old deck ID to new ID
        Assert.assertFalse("The new requested deck has not changed!", newDeckID == prevDeckID);
    }

    @When("^Draw \"([^\"]*)\" cards from the deck$")
    public void draw_cards_from_the_deck(int drawnCount) {
        CloseableHttpClient httpClient = HttpClients.createDefault();
        HttpGet httpGet = new HttpGet(deckManipulation + prevDeckID + "/draw/?count=" + drawnCount);

        try {
            httpGet.getRequestLine();
            responseBody = httpClient.execute(httpGet, SuccessAsJSONObject.responseHandler);
            drawnCardsArray = responseBody.getJSONArray("cards"); //save the drawn cards in array for later use

            //count the drawn cards and make sure the values are not null
            for (cardsDrawn = 0; cardsDrawn < drawnCardsArray.length(); cardsDrawn++) {
                JSONObject card = drawnCardsArray.getJSONObject(cardsDrawn);
                Assert.assertTrue("Card code is null!", card.getString("code") != null);
                Assert.assertTrue("Card suit is null!", card.getString("suit") != null);
                Assert.assertTrue("Card value is null!", card.getString("value") != null);
            }
            //assert that deck used is correct
            Assert.assertTrue("Same deck was not used! Expected: " + prevDeckID + " Actual: " + responseBody.getString("deck_id"), prevDeckID.equals(responseBody.getString("deck_id")));
            if (drawnCount > cardsInDeck) {
                //validation has been placed if intentionally drawing more cards than intended
                //if intentionally drawing more cards then it was available in deck then move to next step
                //else assert that cards drawn was correct
            } else {
                //assert that x cards were ACTUALLY drawn
                Assert.assertTrue("There were not " + drawnCount + " cards drawn from the deck! Only was able to draw " + cardsDrawn, drawnCount == cardsDrawn);
            }
            httpClient.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    @Then("^Status of request is success$")
    public void status_of_request_is_success() {
        //assert that status was success & if not read error
        //if error key doesn't exist exception is thrown
        if (responseBody.has("error")) {
            Assert.assertTrue("Error was encountered when drawing cards: '" + responseBody.getString("error") + "'", responseBody.getBoolean("success") == true && responseBody.getString("error") == null);
        } else {
            Assert.assertTrue("Status of success is not true!", responseBody.getBoolean("success") == true);
        }
    }

    @Then("^Error message \"([^\"]*)\" is encountered$")
    public void error_message_is_encountered(String errorString) {
        Assert.assertTrue("Success status was true when should be false", responseBody.getBoolean("success") != true);
        Assert.assertTrue("Incorrect error message was encountered: " + responseBody.getString("error"), responseBody.getString("error").equals(errorString));
    }

    @Then("^The deck has correct amount of cards remaining$")
    public void the_deck_has_correct_amount_of_cards_remaining() {
        //assert that starting cards in deck - cards that were drawn = to latest response remaining cards in deck
        int remainingExpected = cardsInDeck - cardsDrawn;
        int remainingActual = responseBody.getInt("remaining");
        Assert.assertTrue("Deck has " + remainingActual + " cards remaining but expected was " + remainingExpected + " cards!", remainingExpected == remainingActual);
        //update value only after validation was passed
        cardsInDeck = remainingActual;
    }

    @Given("^Retrieve a partial deck of cards containing \"([^\"]*)\"$")
    public void retrieve_a_partial_deck_of_cards_containing(String cardsToDraw) {
        CloseableHttpClient httpClient = HttpClients.createDefault();
        HttpGet httpGet = new HttpGet(newPartialDeck + cardsToDraw);

        try {
            httpGet.getRequestLine();
            responseBody = httpClient.execute(httpGet, SuccessAsJSONObject.responseHandler);

            //save new ID and remaining
            prevDeckID = responseBody.getString("deck_id");
            cardsInDeck = responseBody.getInt("remaining");

            httpClient.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Then("^All partial deck cards are present$")
    public void all_partial_deck_cards_are_present(DataTable expectedCards) {
        JSONArray cardsArray = responseBody.getJSONArray("cards"); //create array for the drawn cards from response
        int cardsCounted = 0;

        //go through all the drawn cards
        for (cardsDrawn = 0; cardsDrawn < cardsArray.length(); cardsDrawn++) {
            JSONObject drawnCard = cardsArray.getJSONObject(cardsDrawn);
            Assert.assertTrue("One of card parameters is null!", drawnCard.getString("code") != null && drawnCard.getString("suit") != null && drawnCard.getString("value") != null);
            //check if drawn card is present inside any of the expected cards
            for (cardsObject card : expectedCards.asList(cardsObject.class)) {
                if (card.code.equals(drawnCard.getString("code"))) {
                    Assert.assertTrue("Card value or suit don't match", card.value.equals(drawnCard.getString("value")) && card.suit.equals(drawnCard.getString("suit")));
                    cardsCounted++;
                }
            }
        }
        Assert.assertTrue("All drawn cards were not present in expected", cardsArray.length() == cardsCounted);
        //assert that deck used is correct
    }

    @Then("^Only \"([^\"]*)\" cards are in deck$")
    public void only_cards_are_in_deck(int expectedCardCount) {
        int actualCardCount = responseBody.getInt("remaining"); //create array for the drawn cards from response
        Assert.assertTrue("Card count in response is not equal to expected", actualCardCount == expectedCardCount);
        // Write code here that turns the phrase above into concrete actions
    }

    @When("^Add drawn cards to \"([^\"]*)\" pile$")
    public void add_drawn_cards_to_pile(String pileName) {
        CloseableHttpClient httpClient = HttpClients.createDefault();
        List<String> drawnCardsList = new ArrayList<String>();
        String drawnCards = "";

        drawnCardsArray = responseBody.getJSONArray("cards"); //save the drawn cards in array for later use

        //extract card codes from drawn cards in memory & add to list
        for (cardsDrawn = 0; cardsDrawn < drawnCardsArray.length(); cardsDrawn++) {
            JSONObject card = drawnCardsArray.getJSONObject(cardsDrawn);
            drawnCardsList.add(cardsDrawn, card.getString("code"));
        }
        //format for string url
        for (int i = 0; i < drawnCardsList.size(); i++)
            drawnCards = drawnCards + drawnCardsList.get(i) + ",";
        //add extracted card codes to pile
        HttpGet httpGet = new HttpGet(deckManipulation + prevDeckID + "/pile/" + pileName + "/add/?cards=" + drawnCards);

        //send request
        try {
            httpGet.getRequestLine();
            responseBody = httpClient.execute(httpGet, SuccessAsJSONObject.responseHandler);
            httpClient.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Then("^Pile \"([^\"]*)\" contains \"([^\"]*)\" cards$")
    public void pile_contains_cards(String pileName, int cardCount) {
        CloseableHttpClient httpClient = HttpClients.createDefault();
        HttpGet httpGet = new HttpGet(deckManipulation + prevDeckID + "/pile/" + pileName + "/list");
        try {
            httpGet.getRequestLine();
            responseBody = httpClient.execute(httpGet, SuccessAsJSONObject.responseHandler);
            JSONObject piles = responseBody.getJSONObject("piles");
            int pileCardCount = 0;
            JSONObject pile = piles.getJSONObject(pileName); //get pile
            pileCardCount = pile.getInt("remaining"); // get remaining from pile
            Assert.assertTrue("Card count in response is not equal to expected", cardCount == pileCardCount);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Then("^In pile \"([^\"]*)\" all drawn cards are present$")
    public void in_pile_cards_are_present(String pileName) {
        CloseableHttpClient httpClient = HttpClients.createDefault();
        HttpGet httpGet = new HttpGet(deckManipulation + prevDeckID + "/pile/" + pileName + "/list");
        try {
            httpGet.getRequestLine();
            responseBody = httpClient.execute(httpGet, SuccessAsJSONObject.responseHandler);
            JSONObject piles = responseBody.getJSONObject("piles");
            JSONObject pile = piles.getJSONObject(pileName); //get pile
            JSONArray pileCardsArr = pile.getJSONArray("cards");
            int cardsCounted = 0;

            //go through all the drawn cards
            for (cardsDrawn = 0; cardsDrawn < pileCardsArr.length(); cardsDrawn++) {
                JSONObject pileCard = pileCardsArr.getJSONObject(cardsDrawn);
                Assert.assertTrue("One of card parameters is null!", pileCard.getString("code") != null && pileCard.getString("suit") != null && pileCard.getString("value") != null);
                for (int i = 0; i < drawnCardsArray.length(); i++) {
                    JSONObject drawnCard = drawnCardsArray.getJSONObject(i);
                    if (pileCard.getString("code").equals(drawnCard.getString("code"))) {
                        Assert.assertTrue("Card value or suit don't match", pileCard.getString("value").equals(drawnCard.getString("value"))
                                && pileCard.getString("suit").equals(drawnCard.getString("suit")));
                        cardsCounted++;
                    }
                }
            }
            System.out.println(pileCardsArr.length() + " " + cardsCounted);
            Assert.assertTrue("All drawn cards were not present in the pile!", pileCardsArr.length() == cardsCounted);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
