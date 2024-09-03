describe('Navigation', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should navigate to Info page', () => {
        cy.getByTestId('info').click();

        cy.url().should('include', '/info');
    });

    it('should navigate to Spa services page', () => {
        cy.getByTestId('spa-services').click();

        cy.url().should('include', '/spa-services');
    });

    it('should navigate to Book appointment page', () => {
        cy.getByTestId('book-appointment').click();

        cy.url().should('include', '/book-appointment');
    });

    it('should navigate to Blog page', () => {
        cy.getByTestId('blog').click();

        cy.url().should('include', '/blog');
    });

    it('should navigate to About us page', () => {
        cy.getByTestId('about-us').click();

        cy.url().should('include', '/about-us');
    });

    it('should navigate to Contact us page', () => {
        cy.getByTestId('contact-us').click();

        cy.url().should('include', '/contact-us');
    });
});