Feature: Go to the cinema test
    Scenario: Should choose a date
        Given user is on "/client/index.php" page
        When user choose a date "Пн, 18"


    Scenario: Should choose a time
        Given user is on "/client/index.php" page
        When user chose a time "19:00"
        Then user sees the selected date and time


    Scenario: Should check the selected date and time
        Given user is on "/client/index.php" page
        When user choose a date "Пн, 18"
        When user chose a time "19:00"
        Then user sees the selected date and time


    Scenario: Should choose аnd book a seat
        Given user is on "/client/index.php" page


    Scenario: Should check that seat are booked
        Given user is on "/client/index.php" page
