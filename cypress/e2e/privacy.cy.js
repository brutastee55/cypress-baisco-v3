it('testa pagina de politica de privacidade de forma independente', () => {
    cy.visit('src/privacy.html')

    cy.title()
        .should(title => {
            expect(title).to.be.equal('Central de Atendimento ao Cliente TAT - Política de privacidade')
        })

    cy.get("h1#title")
        .should('have.text', 'CAC TAT - Política de privacidade')


    cy.get('div[class=privacy] p:first-of-type')
        .invoke('text')
        .then(texto => {
            expect(texto).to.be.equal("Não salvamos dados submetidos no formulário da aplicação CAC TAT.")
        })
})