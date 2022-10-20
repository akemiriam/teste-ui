/// <reference types="cypress" />

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('https://shopee.com.br/toca.dos.amigurumis')
      
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('[class="col-xs-2 shop-collection-view__item"]')
            .eq(10)
            .click()

    })

    it('Deve adicionar um iproduto ao carrinho', () => {


        cy.get('[class="col-xs-2 shop-collection-view__item"]')
            .eq(10)
            .click()
   

    })



})