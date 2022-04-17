Feature: Go to the cinema test
    Scenario: Should choose a date
        Given user is on "/client/index.php" page
        When user choose a date "Вт, 19"


    Scenario: Should choose a time and check the session
        Given user is on "/client/index.php" page
        Given user choose a date "19"
        When user chose a time "19:00"
        Then user check the session "Начало сеанса: 19:00"


    Scenario: Should choose аnd book a seat
        Given user is on "/client/index.php" page
        Given user choose a date "Вт, 19"
        Given user chose a time "19:00"
        When user chose a seat "7/5"
        And booking seat "button"
        Then user receives a booking code "button"
        And check the seat "7/5"

    Scenario: Should check that seat are booked
        Given user is on "/client/index.php" page
        Given user choose a date "Вт, 19"
        Given user chose a time "19:00"
// дописать



