/// <reference types="Cypress" />

describe('Navigation', () => {
  it('test url works', () => {
    cy.visit('http://localhost:3000/portfolio')
  })

  it('test projects link exists', () => {
    // using wait here is kind of an antipattern, but am doing this to ensure we
    // wait for the page to scroll fully scroll
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('[data-cy=projects]').contains('Projects').click().wait(1000)
    cy.get('[data-cy=projectImg1Container]').isWithinViewport()
  })
})