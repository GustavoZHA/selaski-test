import { isSingleDigit } from '../../../support/utils';

export class LoginPage {
    selaski_icon = '[alt="Orybu.com"]';
    code_verification_text = '.w-full h1.text-center';
    ingresar_button = 'button[type="submit"]';
    error_message_code_invalid = '.ng-invalid .text-sm'
    input_digit1 = '#digit1';
    input_digit2 = '#digit2';
    input_digit3 = '#digit3';
    input_digit4 = '#digit4';

    verifyIconIsLoading() {
        cy.get(this.selaski_icon)
            .should('be.visible')
            .and(($img) => {
                expect($img[0].naturalWidth).to.be.greaterThan(0);
            });
    }

    verfyMessageVerificationTextAssertion(text) {
        cy.get(this.code_verification_text)
            .should('be.visible')
            .should(($el) => {
                expect($el.text().trim()).to.equal(text);
            });
    }

    verfyIngresarButtonIsVisible() {
        cy.get(this.ingresar_button)
            .should('be.visible')
    }

    verifyCodeMessageError(messageExpected) {
        cy.get(this.error_message_code_invalid)
            .should('be.visible')
            .should(($el) => {
                expect($el.text().trim()).to.equal(messageExpected);
            });
    }

    inputCode(code) {
        if (isSingleDigit(code[0])) cy.get(this.input_digit1).type(code[0])
        if (isSingleDigit(code[1])) cy.get(this.input_digit2).type(code[1])
        if (isSingleDigit(code[2])) cy.get(this.input_digit3).type(code[2])
        if (isSingleDigit(code[3])) cy.get(this.input_digit4).type(code[3])
    }

    clickIngresarButton() {
        cy.get(this.ingresar_button).click()
    }

    verifyTheElementIsNotEnabled() {
        cy.get(this.ingresar_button)
            .should('be.disabled')
            .should('be.visible');
    }
}