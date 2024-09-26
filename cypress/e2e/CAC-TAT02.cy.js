/// <reference types="cypress"/>


describe('Central de atendimento ao cliente TAT', function () {
    beforeEach(() => {
        cy.visit('src/index.html')
    })

    it('verifica o titulo da aplicação', () => {
        //verificação usando o expect
        cy.title()
            .should(titulo2 => {
                expect(titulo2).to.be.equal('Central de Atendimento ao Cliente TAT')
            })
        //verificação direto no should
        cy.title()
            .should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', () => {
        cy.get('#firstName')
            .should('be.visible')
            .type('Bruno', { animationDistanceThreshold: 5 })

        cy.get('#lastName')
            .should('be.visible')
            .type('Souza')

        cy.get('#email')
            .should('be.visible')
            .type('brutastee@gmail.com', { delay: 0 })

        cy.get('#open-text-area')
            .should('be.visible')
            .type('Rapaz menino')

        cy.contains("button[type='submit']", "Enviar")
            .should('be.visible')
            .click()

        cy.get('.success > strong')
            .should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
        cy.get('#firstName')
            .should('be.visible')
            .type('Bruno')

        cy.get('#lastName')
            .should('be.visible')
            .type('Souza')

        cy.get('#email')
            .should('be.visible')
            .type('brutastee@gmail.', { delay: 0 })

        cy.get('#open-text-area')
            .should('be.visible')
            .type('Rapaz menino')

        cy.contains("button[type='submit']", "Enviar")
            .should('be.visible')
            .click()

        cy.get('.error > strong')
            .should('have.text', 'Valide os campos obrigatórios!')
    })

    it('verificar que campo telefone só acveita numeros', () => {
        cy.get('#phone')
            .should('be.visible')
            .type("texte")
            .should('have.value', '')
    });

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        cy.get('#firstName')
            .should('be.visible')
            .type('Bruno')

        cy.get('#lastName')
            .should('be.visible')
            .type('Souza')

        cy.get('#email')
            .should('be.visible')
            .type('brutastee@gmail.com', { delay: 0 })

        cy.get('#open-text-area')
            .should('be.visible')
            .type('Rapaz menino')

        cy.get('#phone-checkbox')
            .should('be.visible')
            .check()

        cy.contains("button[type='submit']", "Enviar")
            .should('be.visible')
            .click()

        cy.get('.error > strong')
            .should('have.text', 'Valide os campos obrigatórios!')
    });

    it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
        cy.get('#firstName')
            .type('Bruno')
            .should('have.value', 'Bruno')
            .clear()
            .should('have.value', '')

        cy.get('#lastName')
            .type('Souza')
            .should('have.value', 'Souza')
            .clear()
            .should('have.value', '')

        cy.get('#email')
            .type('brutastee@gmail.com')
            .should('have.value', 'brutastee@gmail.com')
            .clear()
            .should('have.value', '')

        cy.get('#open-text-area')
            .type('Rapaz menino')
            .should('have.value', 'Rapaz menino')
            .clear()
            .should('have.value', '')
    });

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
        cy.contains("button[type='submit']", "Enviar")
            .should('be.visible')
            .click()

        cy.get('.error > strong')
            .should('have.text', 'Valide os campos obrigatórios!')
    });

    it('envia o formuário com sucesso usando um comando customizado', () => {
        cy.fillMandatoryFieldsAndSubmit("Bruno", "Souza", "brutastee@gmail.com", "teste")
    });

    it('selecionar opcao (Youtube) em combo suspenso pelo texto', () => {
        cy.get('#product')
            .select('YouTube')
            .should('have.value', 'youtube')
    })

    it('selecionar opcao (Mentoria) em combo suspenso pelo valor', () => {
        cy.get('#product')
            .select('mentoria')
            .should('have.value', 'mentoria')
    })

    it('selecionar opcao (blog) em combo suspenso pelo indice', () => {
        cy.get('#product')
            .select(1)
            .should('have.value', 'blog')
    })

    it('marcando inputs do tipo radio', () => {
        cy.get('input[value=elogio]')
            .check()
            .should('have.value', 'elogio')
            .should('be.checked')

    })

    it('marcando inputs do tipo atendimento em cadeia', () => {
        cy.get('input[type=radio]')
            .should('have.length', 3)
            .each(ele => {
                cy.wrap(ele).check()
                cy.wrap(ele).should('be.checked')
            })


    })

    it('marcando e desmarcando inputs checkbox', () => {
        // cy.get('input[type=checkbox]')
        //     .should('have.length', 2)
        //     .each(ele => {
        //         cy.wrap(ele).check()
        //         cy.wrap(ele).should('be.checked')
        //         cy.wrap(ele).uncheck()
        //         cy.wrap(ele).should('not.be.checked')
        //     })

        cy.get('input[type=checkbox]')
            .check()
            .should('be.checked')
            .last()
            .uncheck()
            .should('not.be.checked')
    })

    it('upload de arquivo pasta fixture', () => {
        cy.get("#file-upload")
            .should('not.have.value')
            .selectFile('cypress/fixtures/example.json')
            .should(ele => {
                expect(ele[0].files[0].name).equal('example.json')
            })
    })

    it('upload de arquivo usando drag and drop', () => {
        cy.get("#file-upload")
            .should('not.have.value')
            .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
            .should(ele => {
                expect(ele[0].files[0].name).equal('example.json')
            })
    })

    it('upload de arquivo usando alias', () => {
        cy.fixture("example.json")
            .as('arquivo')

        cy.get("#file-upload")
            .should('not.have.value')
            .selectFile('@arquivo', { action: 'drag-drop' })
            .should(ele => {
                expect(ele[0].files[0].name).equal('example.json')
            })
    })

    it("verificar que pagina de politica de privacidade abre em outra aba sem a necessidade de um clique", () => {
        cy.get("#privacy a").should('have.attr', 'target', '_blank')
    })

    it("verificar que pagina de politica de privacidade removendo o att targer e dando um clique", () => {
        cy.get("#privacy a")
            .invoke('removeAttr', 'target')
            .click()
        cy.contains('div p', 'Talking About Testing')
            .should('be.visible')


    })

})  