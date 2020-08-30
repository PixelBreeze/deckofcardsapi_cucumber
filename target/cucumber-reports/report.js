$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/createCardPiles.feature");
formatter.feature({
  "name": "Test 6",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Adding piles and list them",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RestsTests"
    }
  ]
});
formatter.step({
  "name": "Retrieve a partial deck of cards containing \"AS,AC,AD,AH,KS,KC,KD,KH,QS,QC,QD,QH,JS,JC,JD,JH\"",
  "keyword": "Given "
});
formatter.match({
  "location": "RESTStepCalls.retrieve_a_partial_deck_of_cards_containing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status of request is success",
  "keyword": "Then "
});
formatter.match({
  "location": "RESTStepCalls.status_of_request_is_success()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Only \"16\" cards are in deck",
  "keyword": "And "
});
formatter.match({
  "location": "RESTStepCalls.only_cards_are_in_deck(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Draw \"3\" cards from the deck",
  "keyword": "When "
});
formatter.match({
  "location": "RESTStepCalls.draw_cards_from_the_deck(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status of request is success",
  "keyword": "Then "
});
formatter.match({
  "location": "RESTStepCalls.status_of_request_is_success()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The deck has correct amount of cards remaining",
  "keyword": "And "
});
formatter.match({
  "location": "RESTStepCalls.the_deck_has_correct_amount_of_cards_remaining()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add drawn cards to \"pile1\" pile",
  "keyword": "When "
});
formatter.match({
  "location": "RESTStepCalls.add_drawn_cards_to_pile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status of request is success",
  "keyword": "Then "
});
formatter.match({
  "location": "RESTStepCalls.status_of_request_is_success()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pile \"pile1\" contains \"3\" cards",
  "keyword": "And "
});
formatter.match({
  "location": "RESTStepCalls.pile_contains_cards(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "In pile \"pile1\" all drawn cards are present",
  "keyword": "And "
});
formatter.match({
  "location": "RESTStepCalls.in_pile_cards_are_present(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Draw \"3\" cards from the deck",
  "keyword": "When "
});
formatter.match({
  "location": "RESTStepCalls.draw_cards_from_the_deck(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status of request is success",
  "keyword": "Then "
});
formatter.match({
  "location": "RESTStepCalls.status_of_request_is_success()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The deck has correct amount of cards remaining",
  "keyword": "And "
});
formatter.match({
  "location": "RESTStepCalls.the_deck_has_correct_amount_of_cards_remaining()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add drawn cards to \"pile2\" pile",
  "keyword": "When "
});
formatter.match({
  "location": "RESTStepCalls.add_drawn_cards_to_pile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status of request is success",
  "keyword": "Then "
});
formatter.match({
  "location": "RESTStepCalls.status_of_request_is_success()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pile \"pile2\" contains \"3\" cards",
  "keyword": "And "
});
formatter.match({
  "location": "RESTStepCalls.pile_contains_cards(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "In pile \"pile2\" all drawn cards are present",
  "keyword": "And "
});
formatter.match({
  "location": "RESTStepCalls.in_pile_cards_are_present(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/drawCardDuplicates.feature");
formatter.feature({
  "name": "Test 5",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Retrieve a partial deck and draw all cards from it",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RestsTests"
    }
  ]
});
formatter.step({
  "name": "Retrieve a partial deck of cards containing \"AS,AC,AD,AH,AS\"",
  "keyword": "Given "
});
formatter.match({
  "location": "RESTStepCalls.retrieve_a_partial_deck_of_cards_containing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status of request is success",
  "keyword": "Then "
});
formatter.match({
  "location": "RESTStepCalls.status_of_request_is_success()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Only \"4\" cards are in deck",
  "keyword": "And "
});
formatter.match({
  "location": "RESTStepCalls.only_cards_are_in_deck(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Draw \"4\" cards from the deck",
  "keyword": "When "
});
formatter.match({
  "location": "RESTStepCalls.draw_cards_from_the_deck(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status of request is success",
  "keyword": "Then "
});
formatter.match({
  "location": "RESTStepCalls.status_of_request_is_success()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The deck has correct amount of cards remaining",
  "keyword": "And "
});
formatter.match({
  "location": "RESTStepCalls.the_deck_has_correct_amount_of_cards_remaining()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All partial deck cards are present",
  "rows": [
    {
      "cells": [
        "code",
        "value",
        "suit"
      ]
    },
    {
      "cells": [
        "AS",
        "ACE",
        "SPADES"
      ]
    },
    {
      "cells": [
        "AC",
        "ACE",
        "CLUBS"
      ]
    },
    {
      "cells": [
        "AD",
        "ACE",
        "DIAMONDS"
      ]
    },
    {
      "cells": [
        "AH",
        "ACE",
        "HEARTS"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RESTStepCalls.all_partial_deck_cards_are_present(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/drawCardsFromDeck.feature");
formatter.feature({
  "name": "Test 3",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Draw a card from the deck",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RestsTests"
    }
  ]
});
formatter.step({
  "name": "Get \"1\" new shuffled deck of cards",
  "keyword": "Given "
});
formatter.match({
  "location": "RESTStepCalls.deckRequestIsCalled(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Draw \"5\" cards from the deck",
  "keyword": "When "
});
formatter.match({
  "location": "RESTStepCalls.draw_cards_from_the_deck(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status of request is success",
  "keyword": "Then "
});
formatter.match({
  "location": "RESTStepCalls.status_of_request_is_success()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The deck has correct amount of cards remaining",
  "keyword": "And "
});
formatter.match({
  "location": "RESTStepCalls.the_deck_has_correct_amount_of_cards_remaining()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Draw \"1\" cards from the deck",
  "keyword": "When "
});
formatter.match({
  "location": "RESTStepCalls.draw_cards_from_the_deck(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status of request is success",
  "keyword": "Then "
});
formatter.match({
  "location": "RESTStepCalls.status_of_request_is_success()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The deck has correct amount of cards remaining",
  "keyword": "And "
});
formatter.match({
  "location": "RESTStepCalls.the_deck_has_correct_amount_of_cards_remaining()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/drawMoreThanInDeck.feature");
formatter.feature({
  "name": "Test 3",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Attempt to draw more cards than deck contains",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RestsTests"
    }
  ]
});
formatter.step({
  "name": "Get \"1\" new shuffled deck of cards",
  "keyword": "Given "
});
formatter.match({
  "location": "RESTStepCalls.deckRequestIsCalled(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Draw \"53\" cards from the deck",
  "keyword": "When "
});
formatter.match({
  "location": "RESTStepCalls.draw_cards_from_the_deck(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message \"Not enough cards remaining to draw 53 additional\" is encountered",
  "keyword": "Then "
});
formatter.match({
  "location": "RESTStepCalls.error_message_is_encountered(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/getUniqueDeck.feature");
formatter.feature({
  "name": "Test 1",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Shuffle of the cards return unique deck every time",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RestsTests"
    }
  ]
});
formatter.step({
  "name": "Get \"2\" new shuffled deck of cards",
  "keyword": "Given "
});
formatter.match({
  "location": "RESTStepCalls.deckRequestIsCalled(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A new shuffled deck is requested",
  "keyword": "When "
});
formatter.match({
  "location": "RESTStepCalls.a_new_shuffled_deck_is_requested()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "New deck is unique",
  "keyword": "Then "
});
formatter.match({
  "location": "RESTStepCalls.new_deck_is_unique()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status of request is success",
  "keyword": "And "
});
formatter.match({
  "location": "RESTStepCalls.status_of_request_is_success()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/partialDeckAndRetrieve.feature");
formatter.feature({
  "name": "Test 4",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Retrieve a partial deck and draw all cards from it",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RestsTests"
    }
  ]
});
formatter.step({
  "name": "Retrieve a partial deck of cards containing \"AS,AC,AD,AH\"",
  "keyword": "Given "
});
formatter.match({
  "location": "RESTStepCalls.retrieve_a_partial_deck_of_cards_containing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status of request is success",
  "keyword": "Then "
});
formatter.match({
  "location": "RESTStepCalls.status_of_request_is_success()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Draw \"4\" cards from the deck",
  "keyword": "When "
});
formatter.match({
  "location": "RESTStepCalls.draw_cards_from_the_deck(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status of request is success",
  "keyword": "Then "
});
formatter.match({
  "location": "RESTStepCalls.status_of_request_is_success()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The deck has correct amount of cards remaining",
  "keyword": "And "
});
formatter.match({
  "location": "RESTStepCalls.the_deck_has_correct_amount_of_cards_remaining()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All partial deck cards are present",
  "rows": [
    {
      "cells": [
        "code",
        "value",
        "suit"
      ]
    },
    {
      "cells": [
        "AS",
        "ACE",
        "SPADES"
      ]
    },
    {
      "cells": [
        "AC",
        "ACE",
        "CLUBS"
      ]
    },
    {
      "cells": [
        "AD",
        "ACE",
        "DIAMONDS"
      ]
    },
    {
      "cells": [
        "AH",
        "ACE",
        "HEARTS"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RESTStepCalls.all_partial_deck_cards_are_present(DataTable)"
});
formatter.result({
  "status": "passed"
});
});