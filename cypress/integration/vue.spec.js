describe('vue', () => {
    beforeEach('open app', () => {
        cy.visit('')
    })

    it('displays list of players', () => {
        cy.get('h1').should('contain', 'List of players')

        // Carlsen is the number 1 player so he should be in there
        cy.get('li').should('contain', 'Carlsen')
    })
    it('changes capitalization player names if button is pressed', () => {
        cy.get('button').click()

        // first click puts all player names in lowercase
        cy.get('li').should('not.contain', 'Carlsen')
        cy.get('li').should('contain', 'carlsen');

        // next clicks makes them uppercase again
        cy.get("button").click();
        cy.get('li').should("contain", "CARLSEN");
        cy.get("li").should("not.contain", "carlsen");

        // and so on
        cy.get("button").click();
        cy.get("li").should("contain", "carlsen");
        cy.get("li").should("not.contain", "CARLSEN");
    })
})