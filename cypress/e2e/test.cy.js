//const { describe, beforeEach } = require("node:test");

describe('Test tests', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
    })

    it('Open site and validate any element', () => {
        cy.get('html body div#app header a img').should('be.visible');
    })

})