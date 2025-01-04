describe('register page', () => {
  it('Should show validation errors when leaving all fields blank', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="submit"]').click();

    cy.get('[data-cy="emailError"]').should('exist');
    cy.get('[data-cy="passwordError"]').should('exist');
  })

  it('Should redirect to success page when filling the form and click', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="emailInput"]').type("name1.l@qq.com")
    cy.get('[data-cy="passwordInput"]').type("name1pwd")

    cy.get('[data-cy="submit"]').click();
    cy.url().should('match', /\/success$/)
  })
})