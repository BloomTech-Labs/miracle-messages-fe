/// enables intellisense for cypress
/// <reference types="Cypress" />

/* eslint-disable no-undef */
describe("Admin page", function() {
  it("should successfully load the admin page", function() {
    cy.visit("/admin/chapters");
  });

  it("should get all the chapter elements", function() {
    cy.get(".card").then($el => {
      $el.get();
    });
  });

  it("should have state on load", () => {
    cy.window()
      .its("store")
      .invoke("getState")
      .should("exist");
  });

  it("should get the Edit button for first Chapter", function() {
    cy.get(".btn")
      .eq(0)
      .should("have.length", 1);
    cy.get(".btn-secondary")
      .eq(0)
      .contains("Edit");
  });

  it("should click add Chapter button", function() {
    cy.get(".addBtn").click();
  });

  it("should fill all input fields to add a Chapter", function() {
    cy.get("input")
      .eq(0)
      .type("This is how we do it!", { delay: 100 });
    cy.get("input")
      .eq(1)
      .type("1981-02-20", { delay: 100 });
    cy.get(".form-control")
      .eq(2)
      .type("One day you'll wake up, and this will all be just a dream.", { delay: 50 });
    cy.get("input")
      .eq(3)
      .type("Norfolk", { delay: 100 });
    cy.get("input")
      .eq(4)
      .type("VA", { delay: 100 });
    cy.get("input")
      .eq(5)
      .type("36.8508", { delay: 100 });
    cy.get("input")
      .eq(6)
      .type("76.2859", { delay: 100 });
    cy.get("input")
      .eq(7)
      .type("greyflanel@.com", { delay: 100 });
    cy.get("input")
      .eq(8)
      .type("26", { delay: 100 });
    cy.get("input")
      .eq(9)
      .type("72", { delay: 100 });
    cy.get("input")
      .eq(10)
      .type("9", { delay: 100 });
    cy.get("input")
      .eq(11)
      .type("86", { delay: 100 });
    cy.get(".form-control")
      .eq(12)
      .type("Once upon a time, not long ago. Where people wore pajamas and lived life slow........", { delay: 50 });
  });

  it("should click the cancel add Chapter button", function() {
    cy.get(".btn-secondary")
      .eq(25)
      .click();
  });

  it("should click the delete the first Chapter button", function() {
    cy.get(".btn-danger").eq(0).click().wait(2000);
  })

it("should click the cancel delete Chapter button", function() {
  cy.get(".btn-secondary").eq(25).contains("Cancel").click()
})

});
