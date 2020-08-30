Feature: Test 4

  @RestsTests
  Scenario: Retrieve a partial deck and draw all cards from it
    Given Retrieve a partial deck of cards containing "AS,AC,AD,AH"
    Then Status of request is success
    When Draw "4" cards from the deck
    Then Status of request is success
    And The deck has correct amount of cards remaining
    And All partial deck cards are present
      | code | value | suit     |
      | AS   | ACE   | SPADES   |
      | AC   | ACE   | CLUBS    |
      | AD   | ACE   | DIAMONDS |
      | AH   | ACE   | HEARTS   |