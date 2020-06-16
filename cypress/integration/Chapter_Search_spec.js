/// enables intellisense for cypress
/// <reference types="Cypress" />

describe("Icon renders, and user can expand and close bar", () => {
    it("Icon should render on landing page", () => {
        cy.visit("/");
        expect(cy.get(".fa-search").first()).to.exist;
    })

    it("Searchbar should expand upon clicking icon", () => {
        cy.get(".search-bar").first().click();
    })

    it("Searchbar should close upon clicking the chevron to the right", () => {
        cy.get(".MuiButtonBase-root").last().click();
    })
})

describe("Chapter search", () => {
    it("User should be able to search for existing chapter", () => {
        cy.get(".search-bar").first().click();
        cy.get(".search-menu").first().type("bost");
        cy.get("#search-menu-option-0").click();
        cy.contains("Massachusetts College of Art and Design").should("be.visible");
        cy.get(".mapboxgl-popup-close-button").first().click();
    })
})

// describe("Reunion search", () => {
//     it("User should be able to search for existing reunion", () => {
//         cy.get(".mapboxgl-popup-close-button").first().click();
//         cy.get(".search-bar").first().click();
//         cy.get(".search-menu").first().type("salt lake");
//         cy.get("#search-menu-option-0").click();
//         cy.contains("Massachusetts College of Art and Design").should("be.visible");
//     })
// })