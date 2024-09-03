describe('Footer', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should show error if email is incorrect', () => {
        const emailInput = cy.getByTestId('email-input');
        const submitButton = cy.getByTestId('email-submit-button');
        const errorContainer = cy.getByTestId('email-error');

        errorContainer.should('be.empty');

        emailInput.type('wrong-email');
        submitButton.click();
        cy.wait(100);
        errorContainer.should('have.text', 'Email must be valid');

        emailInput.clear();
        errorContainer.should('be.empty');
    })
});