/// <reference types="cypress"/>

import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { LoginPage } from "../../selaski/ui/page/login_page";
const code = Cypress.env('code');

var login_page = new LoginPage();

Then('verify the Login page is loaded succesfully', () => {
    login_page.verfyIngresarButtonIsVisible();
    login_page.verfyMessageVerificationTextAssertion('Ingresa el Código de Verificación');
    login_page.verifyIconIsLoading();
})

When('I type the code valid', () => {
    login_page.inputCode(code + "")
})

And('I click in Ingresar button', () => {
    login_page.clickIngresarButton()
})

When('I type the code {string}', (code) => {
    login_page.inputCode(code)
})

Then('verify Ingresar button is disable', () => {
    login_page.verifyTheElementIsNotEnabled
})

Then('verify the message code invalid is {string}', (messageExp) => {
    login_page.verifyCodeMessageError(messageExp)
})