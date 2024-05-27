describe('On Linkedin', () => {

    it('I can login', () => {
        cy.visit('https://linkedin.com');

        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('popescuradhoo@yahoo.com');
        cy.get('#password').type('123');
        cy.get('.btn__primary--large').click();

        cy.get('.secondary-action-new').click();
        cy.get('#ember16').should('exist');

    })

})
