Feature: Intership test

    @regression
    Scenario: Verify The login is successfully when code is valid
        Given I navigate selaski page
        Then verify the Login page is loaded succesfully
        When I type the code valid
        And I click in Ingresar button
        Then verify the login is succesfully

    @regression
    Scenario: Verify the error message to code invalid
        Given I navigate selaski page
        When I type the code "1257"
        And I click in Ingresar button
        Then verify the message code invalid is "Código incorrecto. Por favor ingresa el código correcto para tener acceso"

    @regression
    Scenario Outline: Verify the Ingresar button is disable to <code>
        Given I navigate selaski page
        When I type the code "<code>"
        Then verify Ingresar button is disable
        Examples:
            | code |
            | 1-12 |
            | 522- |
            | 69-1 |
            | 193- |
            | 5--2 |

    @regression
    Scenario: Verify the Embarque Filter successfully
        Given I navigate selaski page
        Then verify the Login page is loaded succesfully
        When I type the code valid
        And I click in Ingresar button
        Then verify the login is succesfully
        And I click in filter button
        And I click in select dropdown
        And I click "Embarque" item in select dropdown
        And I type "Prueba 1" in search text box
        Then verify the tag search generate is "Embarque: Prueba 1"
        And verify the first column name is "Embarque"
        And verify the result contains the "Prueba 1"