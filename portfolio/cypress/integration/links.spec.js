/// <reference types="Cypress" />

describe('Links', () => {
  it('test social links', () => {
    cy.visit('http://localhost:3000/portfolio')
    //check GitHub social is linked
    cy.isLinked(
      '[data-cy=github-social]',
      'https://github.com/Simon994'
    )
    //check LinkedIn social is linked
    cy.isLinked(
      '[data-cy=linkedin-social]',
      'https://www.linkedin.com/in/simonrtneil/'
    )
  })

  it('test projects links', () => {
    cy.visit('http://localhost:3000/portfolio')

    //499px links
    cy.isLinked(
      '[data-cy=live-499px]',
      'https://rawshot-499px.herokuapp.com/'
    )
    cy.isLinked(
      '[data-cy=github-499px]',
      'https://github.com/Simon994/RAWShot'
    )

    //Discover Montreal links
    cy.isLinked(
      '[data-cy=live-montreal]',
      'https://discover-montreal.herokuapp.com/'
    )
    cy.isLinked(
      '[data-cy=github-montreal]',
      'https://github.com/Simon994/sei-project-3'
    )

    //NewsFeed links
    cy.isLinked(
      '[data-cy=live-newsfeed]',
      'https://the-news-feed-v2-global.netlify.app/'
    )
    cy.isLinked(
      '[data-cy=github-newsfeedv2]',
      'https://github.com/Simon994/news-feed-v2Global'
    )
    cy.isLinked(
      '[data-cy=github-newsfeedv1]',
      'https://github.com/Simon994/news-feed'
    )

    //Redshirt's run links
    cy.isLinked(
      '[data-cy=live-redshirts]',
      'https://simon994.github.io/sei-project-1/'
    )
    cy.isLinked(
      '[data-cy=github-redshirts]',
      'https://github.com/Simon994/sei-project-1'
    )
  })
})