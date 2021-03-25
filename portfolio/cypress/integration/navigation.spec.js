/// <reference types="Cypress" />

describe('Navigation', () => {
  it('test url works', () => {
    cy.visit('http://localhost:3000/portfolio')
  })

  it('test projects link exists', () => {
    cy.get('a').contains('Projects').click()
  })
})