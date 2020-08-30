Feature: Test 6

  @RestsTests
  Scenario: Adding piles and list them
    Given Retrieve a partial deck of cards containing "AS,AC,AD,AH,KS,KC,KD,KH,QS,QC,QD,QH,JS,JC,JD,JH"
    Then Status of request is success
    And Only "16" cards are in deck
    When Draw "3" cards from the deck
    Then Status of request is success
    And The deck has correct amount of cards remaining
    When Add drawn cards to "pile1" pile
    Then Status of request is success
    And Pile "pile1" contains "3" cards
    And In pile "pile1" all drawn cards are present
    When Draw "3" cards from the deck
    Then Status of request is success
    And The deck has correct amount of cards remaining
    When Add drawn cards to "pile2" pile
    Then Status of request is success
    And Pile "pile2" contains "3" cards
    And In pile "pile2" all drawn cards are present