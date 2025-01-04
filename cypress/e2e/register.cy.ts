describe('register page', () => {
  it('Should show validation errors when leaving all fields blank', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="submit"]').click();

    cy.get('[data-cy="emailError"]').should('exist');
    cy.get('[data-cy="passwordError"]').should('exist');
  })
})