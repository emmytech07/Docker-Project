/// <reference types="cypress" />

describe('e2e eccommerce function',() => {
    it('Login page', ()=> {

        const productName = "Samsung Note 8"
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/')
        cy.get('#username').type("rahulshettyacademy")
        cy.get('#password').type("Learning@830$3mK2")
        cy.get("#usertype").check().should('be.checked')
        cy.get("[data-style$='btn-info']").select('Teacher')
        cy.get("#terms").check().should('be.checked')
        cy.get("[type='submit']").click()
        cy.contains("Shop Name").should("be.visible")
        cy.get("app-card").should('have.length.greaterThan', 3)
        cy.get("app-card").filter(":contains('Samsung Note 8')")
        .then($element=>{
            cy.wrap($element).should("have.length", 1).contains('button', 'Add').click()
        })
    })
})
