Feature: Test 3

  @RestsTests
  Scenario: Attempt to draw more cards than deck contains
    Given Get "1" new shuffled deck of cards
    When Draw "53" cards from the deck
    Then Error message "Not enough cards remaining to draw 53 additional" is encountered