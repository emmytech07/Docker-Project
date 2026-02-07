/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'


describe("My Second Test Suite", function () {
    it("Handle iframe navigation correctly", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      
        cy.get("#courses-iframe")
          .invoke("attr", "src")
          .then((src) => {
            const newOrigin = new URL(src).origin
      
            cy.origin(newOrigin, { args: { src } }, ({ src }) => {
              cy.visit(src)
              cy.contains("Home").click()
            })
          })
      })      
      
});
