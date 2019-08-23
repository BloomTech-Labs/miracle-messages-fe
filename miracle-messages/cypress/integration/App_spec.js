describe('home page App.js', function() {

    it('successfully loads the home page', function() {
        cy.visit('/')
    })

    it('gets the title of the page', function() {
        cy.title().should('include', 'Miracle Messages')
    })

    
})