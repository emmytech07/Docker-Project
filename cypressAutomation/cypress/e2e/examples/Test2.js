/// <reference types="cypress" />
require('cypress-xpath')

describe("Using a Select Option", ()=> {
    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })

    it("Doing for static select option", ()=>{
        cy.xpath('//select[@id="dropdown-class-example"]').select('option1').should('have.value',"option1")
        cy.xpath('//select[@id="dropdown-class-example"]').select('Option3').should('have.value',"option3")

        // for dynamic option 
        cy.get("#autocomplete").type('ind')
        cy.get('.ui-menu-item').each(($el, index, $list)=> {
            if($el.text()==="India"){
                cy.wrap($el).click()
                
            }
            
        })
    })

})