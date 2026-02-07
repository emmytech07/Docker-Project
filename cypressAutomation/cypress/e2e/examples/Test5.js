/// <reference types="cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
// cy.get('.mouse-hover-content').invoke('show')
cy.contains('Top').click({force:true})  // or try using another force method
cy.url().should('include','top')
 
})
 
 
})
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
