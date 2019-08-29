/// enables intellisense for cypress
/// <reference types="Cypress" />


/* eslint-disable no-undef */
describe("Login page", function() {

    it("should successfully load the login page", function() {
      cy.visit("/login");
    });

    it("should fill input fields", function() {
        cy.get("input").first().type('admin', { delay: 100 });
        cy.get("input").eq(1).type('superuser01', { delay: 100 })
        
      });

      it("should click to submit", function() {
        cy.get(".btn-primary").click();
      });

      it("should click the sidebar link for Chapters", function() {
    cy.get(".sidebar-link")
      .eq(0)
      .click()
      .wait(1000);
  });
})