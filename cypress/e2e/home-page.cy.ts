describe('Home page', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    
    it('should show main title and navigate to `book-appointment` on button click', () => {
        cy.getByTestId('main-title').should('have.text', 'Book your doggy spa day!');
        cy.contains('Book Appointment').click();

        cy.url().should('include', '/book-appointment');
    });

    it('should show `Trending Spa Package` block and navigate to `spa-services` on button click', () => {
        cy.contains('Trending Spa Package').should('be.visible');
        cy.contains('See More Spa Packages').click();

        cy.url().should('include', '/spa-services');
    });
    
    it('should show `Dog Collars` block and navigate to `info` on button click', () => {
        cy.contains('Dog Collars').should('be.visible');
        cy.contains('See More Spa Packages').click();

        cy.url().should('include', '/spa-services');
    });

    it('should show `Animal Carry Ons` block and navigate to `info` on button click', () => {
        cy.contains('Animal Carry Ons').should('be.visible');
        cy.contains('See More Carry Ons').click();

        cy.url().should('include', '/info');
    });
});