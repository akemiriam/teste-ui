/// <reference types="cypress" />
var faker = require('faker');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('https://www.netoffice.com.br/ativaempresa.php')
    });
    
    it('Deve completar o cadastro manualmente', () => {
        cy.get('#bt_entrar_empresa').click()
        cy.get('#cod_empresa').type('demo')
        cy.get('#login-modal > .modal-dialog > .modal-content > .modal-body > .login-form-container > .login-form > .btn').click()
        cy.get('#login_username').type('brenoabreu1992@gmail.com')
        cy.get('#login_pass').type('131008Bm')
        cy.get('#login_toggle').click()

    });

});