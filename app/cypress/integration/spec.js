it('shows an h1', () => {
    cy.visit('/')

    cy.get('h1')
        .should('contain', 'All products')
})
