// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (nome, sobrenome, email, comoAjudar) => {
    cy.get('#firstName').should('be.visible').type(nome)

    cy.get('#lastName').should('be.visible').type(sobrenome)

    cy.get('#email').should('be.visible').type(email)

    cy.get('#open-text-area').should('be.visible').type(comoAjudar)

    cy.get('.button').should('be.visible').click()

    cy.get('.success > strong').should('be.visible')
})