export class HomePage {
    title_home_page = 'h1.font-extrabold.text-lg'
    filter_button = 'app-atom-filter-tab'
    select_drop_down = 'app-molecule-general-search-select app-atom-select-input'
    item_select_drop_down = 'div.search-options p'
    search_text_box = 'app-molecule-general-search-select input[type="text"]'
    tag_search = 'app-molecule-selected-filters app-atom-tag p'

    veriftReportTitleAndVisible() {
        cy.get(this.title_home_page)
            .should('be.visible')
            .and('contain.text', 'Reporte de Embarques');
    }

    clickFilterButton() {
        cy.get(this.filter_button)
            .should('be.visible')
            .click()
    }

    clickSelectDropDown() {
        cy.get(this.select_drop_down)
            .should('be.visible')
            .click({ force: true })
    }

    clickItemSelectByName(itenName) {
        cy.get(this.item_select_drop_down)
            .contains(itenName)
            .should('be.visible')
            .click({ force: true });
    }

    typeSearchTextBox(value) {
        cy.get(this.search_text_box).type(`${value}{enter}`)
    }

    verifyTagSearchGenerated(textExpected) {
        cy.get(this.tag_search)
            .should('be.visible')
            .should(($el) => {
                expect($el.text().trim()).to.equal(textExpected);
            });
    }
}