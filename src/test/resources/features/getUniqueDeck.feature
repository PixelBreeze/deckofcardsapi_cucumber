Feature: Test 1

  @RestsTests
    Scenario: Shuffle of the cards return unique deck every time
      Given Get "2" new shuffled deck of cards
      When A new shuffled deck is requested
      Then New deck is unique
      And Status of request is success
