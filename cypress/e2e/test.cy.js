//const { describe, beforeEach } = require("node:test");

describe('Test tests', () => {

    beforeEach(() => {
        cy.visit('https://www.olx.ua/uk/');
    })

    it('Verify that website has opened properly', () => {
        cy.get('[data-cy="myolx-link"]').should('be.visible');
    })

    it('Click Search button and test searching', () => {
        cy.get('[data-testid="search-submit"]').click();
        cy.url().should('include', 'https://www.olx.ua/uk/list/')
        cy.get('[data-cy="search-bar-input"]').type('рушник')

    })

})