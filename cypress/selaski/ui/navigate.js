const url = Cypress.env('Url');

export class Navigate {
    loginPage () {
        cy.visit(url)
    }
}