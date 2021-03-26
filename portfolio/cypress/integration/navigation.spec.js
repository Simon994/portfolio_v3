/// <reference types="Cypress" />

describe('Page visit', () => {
  it('test url works', () => {
    cy.visit('http://localhost:3000/portfolio')
  })

  it('test About navigation link is selected', () => {
    cy.get('[data-cy=about]')
      .invoke('attr', 'class')
      .should('contain', 'selected')
  })

  it('test first paragraph of About is visible', () => {
    cy.get('[data-cy=about-text]')
      .find('p')
      .first()
      .isWithinViewport()
  })
})

describe('Projects navigation', () => {
  beforeEach(() => {
    cy.get('[data-cy=projects]').as('projectslink')
  })
  
  it('test projects link exists', () => {
    cy.get('@projectslink')
      .contains('Projects')
  })
  
  it('test projects link works', () => {
    // using wait here is kind of an antipattern, but am doing this to ensure we
    // wait for the page to scroll fully scroll
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('@projectslink')
      .click()
      .wait(1000)
    
    cy.get('[data-cy=projectImg1Container]')
      .isWithinViewport()
      .then(() => {
        cy.get('@projectslink')
          .invoke('attr', 'class')
          .should('contain', 'selected')
        
        cy.get('[data-cy=about]')
          .invoke('attr', 'class')
          .should('not.contain', 'selected')
      })
  })
})

describe('Skills navigation', () => {
  beforeEach(() => {
    cy.get('[data-cy=skills]').as('skillslink')
  })
  
  it('test skills link exists', () => {
    cy.get('@skillslink')
      .contains('Skills')
  })
  
  it('test projects link works', () => {
    // using wait here is kind of an antipattern, but am doing this to ensure we
    // wait for the page to scroll fully scroll
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('@skillslink')
      .click()
      .wait(1000)
    
    cy.get('[data-cy=skills-divider]')
      .isWithinViewport()
      .then(() => {
        cy.get('@skillslink')
          .invoke('attr', 'class')
          .should('contain', 'selected')
        
        cy.get('[data-cy=projects]')
          .invoke('attr', 'class')
          .should('not.contain', 'selected')
      })
  })
})