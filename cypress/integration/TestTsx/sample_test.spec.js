describe('Testing in PT App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Home Page Testing', () => {
        cy.get('.App-link').should('be.visible').and('have.text', 'Learn React');
    });
});
