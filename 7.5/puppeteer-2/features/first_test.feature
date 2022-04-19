Feature: Go to the cinema test
    Scenario: Should choose a date
        Given user is on "/client/index.php" page
        When user choose a date "Чт, 21"


    Scenario: Should choose a time and check the session
        Given user is on "/client/index.php" page
        Given user choose a date "Чт, 21"
        When user chose a time "19:00"
        Then user check the session "Начало сеанса: 19:00"


    Scenario: Should choose аnd book a seat
        Given user is on "/client/index.php" page
        Given user choose a date "Чт, 21"
        Given user chose a time "19:00"
        When user chose a seat "7/6"
        When user booking the seat "button"
        Then user receives a booking code "button"
        Then user check the seat "7/6"




