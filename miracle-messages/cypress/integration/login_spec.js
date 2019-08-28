/// enables intellisense for cypress
/// <reference types="Cypress" />


/* eslint-disable no-undef */
describe("Login page", function() {

    it("should successfully load the login page", function() {
      cy.visit("/login");
    });

    it("should fill input fields", function() {
        cy.get(".input").first().type('username', { delay: 100 });
        cy.get(".input").eq(1).type('password', { delay: 100 })
        
      });

      it("should click to submit", function() {
        cy.get(".submitb").click();
      });
})