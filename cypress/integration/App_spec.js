/// enables intellisense for cypress
/// <reference types="Cypress" />

/* eslint-disable no-undef */
describe("home page App.js", function() {

  it("should successfully load the home page", function() {
    cy.visit("/");
  });

  it("should get children of chapterStats", function() {
    cy.get(".chapterStats")
      .children()
      .should("have.length", 2);
  });

  it("should return all the svg elements", function() {
    cy.get("svg").then($el => {
      $el.get();
    });
  });

  it("should click green Join Chapter button", function() {
    cy.get(".green a").click();
  });

  it("should click white See Reunion Stories button", function() {
    cy.get(".white a").click();
  });

  it("should click email link", function() {
    cy.get(".email").click();
  });

  it("should click on svg", function() {
    cy.get("svg")
      .eq(4).wait(2000)
      .click();
  });

  it('should have state on load', () => {
    cy.window().its('store').invoke('getState').should('exist')
 })
});
