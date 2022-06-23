describe('end to end', () => {
  it('end to end', () => {
    cy.visit('/');
    cy.get('#start-button').click();

    // body page
    cy.get('#body')
    cy.get('.next-button').click();

    // ranking page
    cy.get('.next-button').click();

    // forehand page
    cy.get('.next-button').click();

    // backhand page
    cy.get('.next-button').click();

    // serve page
    cy.get('.next-button').click();

    // shot weightings page
    cy.get('.next-button').click();

    // summary page
    cy.get('.next-button').click();

    // results page
    cy.get('#results .container .row').find('.col').its('length').should('be.gte', 1);
  });
});
