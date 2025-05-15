//const { describe, beforeEach } = require("node:test");

describe('Test tests', () => {

    beforeEach(() => {
        cy.visit('https://www.olx.ua/uk/');
    })

    it('Verify that website has opened properly', () => {
        cy.get('[data-cy="myolx-link"]').should('be.visible');
    })

    it('Verify elements in header: logo, chat button, language toggle, Favourites button, Notification button, User Profile button, Add Advertisement button ', () => {
        cy.get('.css-1kpgv52').should('be.visible'); //logo
        cy.get('.css-1qvxr9c').should('be.visible'); //chat
        cy.get('.css-1lxhyof').should('be.visible'); //language
        cy.get('.css-oo5g20').should('be.visible'); //favourites
        cy.get('.css-1acola7').should('be.visible'); //notification
        cy.get('.css-12l1k7f').should('be.visible'); //user profile
        cy.get('.css-eg56tj').should('be.visible'); //button
    })

    it('Click Search button and test searching', () => {
        cy.get('[data-testid="search-submit"]').click();
        cy.url().should('include', 'https://www.olx.ua/uk/list/')
        cy.get('[data-cy="search-bar-input"]').type('рушник')

    })

})