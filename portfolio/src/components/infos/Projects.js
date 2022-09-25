/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import FadeIn from './Fade'
import styles from './Projects.module.scss'

import ProjectSection from './info-content/ProjectSection'


const content = {
  project1: {
    title: 'Wurtec',
    paragraphs: ['A full-stack e-commerce web app for Wurtec, an elevator manufacturing business with branches across the US and international distribution. Used by large elevator customers such as Otis, Schindler, Kone, and Thyssen-Krupp.', 'Tech stack includes: React, NextJS, NodeJS, NestJS, Typescript, Prisma (connected to a PostgreSQL database)', 'The API layer interacts with a third-party headless CMS.'],
    liveLink: 'https://wurtec.com/',
    liveTest: 'live-wurtec',
  },
  project4: {
    title: '499px (RAWshot) - Personal Learning Project',
    paragraphs: ['A full-stack app, with multiple relationships and CRUD functionality, cloning key parts of the photo-sharing website 500px', 'Technologies include: Django, Django REST framework, React, PostgreSQL, SASS, Axios and Semantic UI React'],
    liveLink: 'https://rawshot-499px.herokuapp.com/',
    liveTest: 'live-499px',
    secondLink: 'https://github.com/Simon994/499px',
    secondTest: 'github-499px',
    secondText: 'GitHub repo'
  }
}

const Projects = () => {
  return (
    <div id='section2'>   
      <div
        className={styles.projectImg1Container}
        data-cy='projectImg1Container'
      >
        {[...Array(3)].map((x, i) =>
          <div key={i} className={styles.projectImg1Glitch}></div>
        )}
      </div>

      <FadeIn>
        <ProjectSection {...content.project1}/>
      </FadeIn>

      <div className={styles.projectImg2Container}></div>
      <FadeIn>
        <ProjectSection {...content.project4}/>
      </FadeIn>


      <FadeIn>
        <section className={styles.projectBlurb}>
          <h3>Discover Montréal</h3>
          <p>Full-stack MERN app with multiple relationships and CRUD functionality</p>
          <p>Users can share, rate and comment on attractions around Montréal</p>
          <p>Built in 9 days as part of a 4-person team. My focus was split ca.80:20 between frontend and backend, respectively</p>
          <p><a
            href="https://discover-montreal.herokuapp.com/"
            target="blank"
            data-cy="live-montreal"
          >
            Live version
          </a>  |  <a
            href="https://github.com/Simon994/sei-project-3"
            target="blank"
            data-cy="github-montreal"
          >
            GitHub repo</a> </p>
        </section>
      </FadeIn>

      <div className={styles.projectImg3Container}></div>

      <FadeIn>
        <section className={styles.projectBlurb}>
          <h3>News Feed <span style={{ fontWeight: '400' }}>and</span> News Feed v2Global</h3>
          <p>A React app that consumes 3rd party API data from News API</p>
          <p>My focus included building the top-stories section and other components, styling, bug-fixing, and contributing to overall project planning</p>
          <p>Built in 3 days, as part of a two-person collaborative project</p>
          <p><a
            href="https://the-news-feed-v2-global.netlify.app/"
            target="blank"
            data-cy="live-newsfeed"
          >
            Live version (v2Global)
          </a>  |  <a 
            href="https://github.com/Simon994/news-feed-v2Global"
            target="blank"
            data-cy="github-newsfeedv2"
          >
            GitHub repo (v2Global)
          </a>  |  <a
            href="https://github.com/Simon994/news-feed"
            target="blank"
            data-cy="github-newsfeedv1"
          >
            GitHub repo (News Feed)
          </a>
          </p>
        </section>
      </FadeIn>
      <div className={styles.projectImg4Container}></div>

      <FadeIn>
        <section className={styles.projectBlurb}>
          <h3>Redshirt's Run</h3>
          <p>A grid-based game, inspired by Pacman and Star Trek, built with vanilla JavaScript, HTML5 and CSS3</p>
          <p>Built solo in a week, three weeks into my Software Engineering Immersive at General Assembly</p>
          <p><a
            href="https://simon994.github.io/sei-project-1/"
            target="blank"
            data-cy="live-redshirts"
          >
              Live version
          </a>  |  <a
            href="https://github.com/Simon994/sei-project-1"
            target="blank"
            data-cy="github-redshirts"
          >
            GitHub repo
          </a> </p>
        </section>
      </FadeIn>
    </div>
  )
}

export default Projects