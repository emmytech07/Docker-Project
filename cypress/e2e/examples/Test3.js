/// <reference types="cypress" />
require('cypress-xpath')

describe("Using a Select Option", ()=> {
    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })

    it("Doing for static select option", ()=>{
       cy.get("#opentab").invoke('removeAttr', 'target').click();

       cy.origin('https://www.qaclickacademy.com/',()=>{

        cy.get(".active").click()
       })
     
    })

})