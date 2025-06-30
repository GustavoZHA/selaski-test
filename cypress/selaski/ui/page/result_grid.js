export class ResultGrid {
    header_column_first = 'app-molecule-table-first-element-list app-atom-table-header div';
    item_text_in_first_columns = 'app-molecule-table-first-element-list span [title]'

    verifyFirstColumnsName(textExpect) {
        cy.get(this.header_column_first)
            .should('be.visible')
            .and('contain.text', textExpect);
    }

    verifyItemTextInFirstColumnsContains(textExpect) {
        cy.get(this.item_text_in_first_columns).each(($el) => {
            cy.wrap($el).should('contain.text', textExpect);
        });
    }
}