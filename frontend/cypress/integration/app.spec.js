// app.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('App', () => {
    it('should display ping', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy=app]').contains('Query')
    })
})