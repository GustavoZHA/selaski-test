const url = Cypress.env('url');

export class Navigate {
    loginPage() {
        cy.visit(url)
    }
}