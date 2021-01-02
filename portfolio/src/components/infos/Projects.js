/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Projects = () => {
  return (
    <>   
      <div className="project-img1-container">
        <div className="project-img1-glitch"></div>
        <div className="project-img1-glitch"></div>
        <div className="project-img1-glitch"></div>
      </div>

      <section className="project-blurb section-light">
        <h3>499px (RAWshot)</h3>
        <p>A full-stack app, with multiple relationships and CRUD functionality, cloning key parts of the photo-sharing website 500px</p>
        <p>Technologies include: Django, Django REST framework, React, PostgreSQL, SASS, Axios and Semantic UI React</p>
        <p>Built solo in 8 days</p>
        <p><a href="https://rawshot-499px.herokuapp.com/" target="blank">Live version</a>  |  <a href="https://github.com/Simon994/RAWShot" target="blank">GitHub repo</a> </p>
        <p></p>
      </section>

      <div className="project-img2-container"></div>

      <section className="project-blurb section-dark">
        <h3>Discover Montréal</h3>
        <p>Full-stack MERN app with multiple relationships and CRUD functionality</p>
        <p>Users can share, rate and comment on attractions around Montréal</p>
        <p>Built in 9 days as part of a 4-person team. My focus was split ca.80:20 between frontend and backend, respectively</p>
        <p><a href="https://discover-montreal.herokuapp.com/" target="blank">Live version</a>  |  <a href="https://github.com/Simon994/sei-project-3" target="blank">GitHub repo</a> </p>
      </section>

      <div className="project-img3-container"></div>

      <section className="project-blurb section-dark">
        <h3>News Feed <span style={{ fontWeight: '400' }}>and</span> News Feed v2Global</h3>
        <p>A React app that consumes 3rd party API data from News API</p>
        <p>My focus included building the top-stories section and other components, styling, bug-fixing, and contributing to overall project planning</p>
        <p>Built in 3 days, as part of a two-person collaborative project</p>
        <p><a href="https://the-news-feed-v2-global.netlify.app/" target="blank">Live version (v2Global)</a>  |  <a href="https://github.com/Simon994/news-feed-v2Global" target="blank">GitHub repo (v2Global)</a>  |  <a href="https://github.com/Simon994/news-feed" target="blank">GitHub repo (News Feed)</a>
        </p>
      </section>

      <div className="project-img4-container"></div>

      <section className="project-blurb section-light">
        <h3>Redshirt's Run</h3>
        <p>A grid-based game, inspired by Pacman and Star Trek, built with vanilla JavaScript, HTML5 and CSS3</p>
        <p>Built solo in a week, three weeks into my Software Engineering Immersive at General Assembly</p>
        <p><a href="https://simon994.github.io/sei-project-1/" target="blank">Live version</a>  |  <a href="https://github.com/Simon994/sei-project-1" target="blank">GitHub repo</a> </p>
      </section>
    </>
  )
}

export default Projects