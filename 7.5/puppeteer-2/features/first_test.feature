Feature: Go to the cinema test
    Scenario: Should choose a date
        Given user is on "/client/index.php" page
        Then user choose a date "Пн, 18"


    Scenario: Should choose a time
        Given user is on "/client/index.php" page
        When user chose a time "19:00"
        Then user sees the selected date and time


    Scenario: Should choosing a seat
