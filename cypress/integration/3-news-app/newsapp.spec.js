describe('news app cypress test', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    });

    it('click more articles', () => {
        cy.get('.article').should('have.length', 5);
        cy.get('.btn').click();
        cy.get('.article').should('have.length', 10);
    });

    it('main article is exist and has a details', () => {
        cy.get('.mainArticle').invoke('text');
    });
});
