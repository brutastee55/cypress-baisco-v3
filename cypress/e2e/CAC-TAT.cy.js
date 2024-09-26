/// <reference types="cypress" />

describe('CAC TAT', function () {
    beforeEach(() => {
        cy.visit('src/index.html')
    })

    it('preenche os campos obrigatórios e envia o formulário', function () {
        cy.get('#firstName')
            .should('be.visible')
            .type('Bruno')
            .should('have.value', 'Bruno')

        cy.get('#lastName').type('Souza')

        cy.get('#email').type('brutastee@gmail.com')

        cy.get('#phone').type('123456879')

        cy.get('#open-text-area').type('testando', { delay: 20 })

        cy.get('.button').click()

        cy.get('.error').should('be.visible')

    })

    it('verificar mensagem de error', () => {
        cy.get('#firstName')
            .should('be.visible')
            .type('Bruno')
            .should('have.value', 'Bruno')

        cy.get('#lastName').type('Souza')

        cy.get('#email').type('brutastee@gmail.')

        cy.get('#phone').type('123456879')

        cy.get('#open-text-area').type('testando', { delay: 20 })

        cy.get('.button').click()

        cy.get('.error').should('be.visible')

    })

    it('validar que campo de telefone so aceita numeros', () => {
        cy.get('#phone')
            .type('yhdsf')
            .should('have.value', '')
    })

    it('validar que telefone e obrigatorio ao marcar campo detelefone', () => {
        cy.get('#phone-checkbox').click()

        cy.get('.button').click()

        cy.get('.error').should('be.visible')

    })

    it.only('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
        cy.get('#firstName')
            .should('be.visible')
            .type('Bruno')
            .should('have.value', 'Bruno')

        cy.get('#lastName').type('Souza')
            .should('have.value', 'Souza')

        cy.get('#email').type('brutastee@gmail.com')
            .should('have.value', 'brutastee@gmail.com')

        cy.get('#phone').type('123456879')
            .should('have.value', '123456879')

        cy.get('#firstName').clear()
            .should('have.value', '')

        cy.get('#lastName').clear()
            .should('have.value', '')

        cy.get('#email').clear()
            .should('have.value', '')

        cy.get('#phone').clear()
            .should('have.value', '')

    })

})