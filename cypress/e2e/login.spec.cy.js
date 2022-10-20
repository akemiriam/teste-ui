/// <reference types="cypress" />

context ('Funcionalidade Login', () =>{

    beforeEach(() => {
        cy.visit('https://www.netoffice.com.br/ativaempresa.php')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it.only('Deve fazer login com sucesso', () => {
        cy.get('#bt_entrar_empresa').click()
        cy.get('#cod_empresa').type('demo')
        cy.get('#login-modal > .modal-dialog > .modal-content > .modal-body > .login-form-container > .login-form > .btn').click() 
        cy.get('#login_username').type('brenoabreu1992@gmail.com')
        cy.get('#login_pass').type('131008Bm')
        cy.get('#login_toggle').click()
        cy.get('[style="position: absolute; bottom: 53px; left: 139px;"] > .semi-bold').should('contain', 'Breno Falcão Abreu')


    })
    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', ()=> {
        cy.get('#bt_entrar_empresa').click()
        cy.get('#cod_empresa').type('demo')
        cy.get('#login-modal > .modal-dialog > .modal-content > .modal-body > .login-form-container > .login-form > .btn').click() 
        cy.get('#login_username').type('brenoabreu92@gmail.com')
        cy.get('#login_pass').type('131008')
        cy.get('#login_toggle').click()
        cy.get('[href="esqueceu_senha.php"]').should('contain', 'Problemas ao acessar?')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', ()=> {
        cy.get('#bt_entrar_empresa').click()
        cy.get('#cod_empresa').type('demo')
        cy.get('#login-modal > .modal-dialog > .modal-content > .modal-body > .login-form-container > .login-form > .btn').click() 
        cy.get('#login_username').type('brenoabreu1992@gmail.com')
        cy.get('#login_pass').type('131008')
        cy.get('#login_toggle').click()
    })
    
})
