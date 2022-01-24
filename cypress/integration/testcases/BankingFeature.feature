Feature: Banking Feature
    I want to validate Banking Features

    Background: Website Navigation
        Given I navigate to the website

    Scenario: Login as Bank Manager
        When I click on Bank Manager Login Button
        Then I validate the page title

    Scenario: Add a Customer
        When I click on Bank Manager Login Button
        And I click Add Customer Button
        And I enter
            | firstName | lastName  | postCode |
            | Nikolay   | Nedyalkov | 1632     |
        And I click the submit button
        Then I validate the alert text