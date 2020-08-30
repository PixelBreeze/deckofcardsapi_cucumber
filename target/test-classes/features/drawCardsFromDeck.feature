Feature: Test 3

  @RestsTests
  Scenario: Draw a card from the deck
    Given Get "1" new shuffled deck of cards
    When Draw "5" cards from the deck
    Then Status of request is success
    And The deck has correct amount of cards remaining
    When Draw "1" cards from the deck
    Then Status of request is success
    And The deck has correct amount of cards remaining

