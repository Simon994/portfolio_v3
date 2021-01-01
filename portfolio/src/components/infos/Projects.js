/* eslint-disable react/no-unescaped-entities */
import React from 'react'

// import redshirtsRun from '../../styles/screenshots/Redshirts_run_screenshot.png'
// import newsFeed from '../../styles/screenshots/News_Feed_V2Global.png'
// import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <>
      
      <div className="project-img1-container">
        <div className="project-img1-glitch"></div>
        <div className="project-img1-glitch"></div>
        <div className="project-img1-glitch"></div>
        <div className="project-title">
          <span className="border" style={{ display: 'inline-block', color: 'black' }}>JavaScript, HTML5, CSS3</span>
        </div>
      </div>

      <section className="project-blurb section-light">
        <h3>Redshirt's Run</h3>
        <p>A grid-based game, inspired by Pacman and Star Trek, built with vanilla JavaScript, HTML5 and CSS3.</p>
        <p>Built solo in a week, three weeks into my Software Engineering Immersive at General Assembly</p>
        <p>Play the live version <a href="https://simon994.github.io/sei-project-1/">here</a></p>
        <p>See the GitHub repo <a href="https://github.com/Simon994/sei-project-1">here</a></p>
      </section>


      <div className="project-img2-container">
        <div className="project-title">
          <span className="border" style={{ display: 'inline-block', color: 'black' }}>React.js, consuming 3rd party API data</span>
        </div>
      </div>

      <section className="project-blurb section-dark">
        <h3>News Feed</h3>
        <p>A grid-based game, inspired by Pacman and Star Trek, built with vanilla JavaScript, HTML5 and CSS3.</p>
        <p>Built solo in a week, three weeks into my Software Engineering Immersive at General Assembly</p>
        <p>Play the live version <a href="https://simon994.github.io/sei-project-1/">here</a></p>
        <p>See the GitHub repo <a href="https://github.com/Simon994/sei-project-1">here</a></p>
      </section>


      <div className="project-img3-container">
        <div className="project-title">
          <span className="border" style={{ display: 'inline-block', color: 'black' }}>Full-stack MERN</span>
        </div>
      </div>

      <section className="project-blurb section-dark">
        <h3>Discover Montréal</h3>
        <p>A grid-based game, inspired by Pacman and Star Trek, built with vanilla JavaScript, HTML5 and CSS3.</p>
        <p>Built solo in a week, three weeks into my Software Engineering Immersive at General Assembly</p>
        <p>Play the live version <a href="https://simon994.github.io/sei-project-1/">here</a></p>
        <p>See the GitHub repo <a href="https://github.com/Simon994/sei-project-1">here</a></p>
      </section>


      <div className="project-img1">
        <div className="project-title">
          <span className="border" style={{ display: 'inline-block', color: 'black' }}>JavaScript, HTML5, CSS3</span>
        </div>
      </div>


    </>

  )
}

export default Projects