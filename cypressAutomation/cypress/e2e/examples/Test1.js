require('cypress-xpath')

describe('My first Test suite', () => {

  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/")
  })

  it("My First test case", () => {
    cy.get(".search-keyword").type("ca")

    cy.get(".product:visible").should('have.length', 4)

    cy.get(".products").as("productLocator")

    // Click product by index
    cy.get("@productLocator")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click()

    // Click product by name (Cashews)
    cy.get("@productLocator")
      .find(".product")
      .each(($el) => {
        if ($el.find("h4.product-name").text().includes("Cashews")) {
          cy.wrap($el).find("button").click()
        }
      })

    // Validate Cashews added to cart
    // cy.get(".cart-info table").should("contain.text", "Cashews")

    cy.xpath("//img[@alt='Cart']").click()
    cy.xpath("//button[.='PROCEED TO CHECKOUT']").click()
    cy.xpath("//button[normalize-space()='Place Order']").click()
  })

  it("logo Name", () => {
    cy.get(".brand.greenLogo")
      .invoke("text")
      .then((text) => {
        cy.log(text)
        expect(text.trim()).to.eq("GREENKART")
      })
  })

})
