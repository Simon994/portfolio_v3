/* eslint-disable react/no-unescaped-entities */
import React from 'react'

// import redshirtsRun from '../../styles/screenshots/Redshirts_run_screenshot.png'
// import newsFeed from '../../styles/screenshots/News_Feed_V2Global.png'
// import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <>
      {/* <div className='projects-outer-container'>
        <div className='projects-cards-container'>
          <ProjectCard
            githubLink='https://github.com/Simon994/sei-project-1'
            imgLink={redshirtsRun}
            altText="Redshirt's run demo"
            titleText="Redshirt's run"
            infoText='A grid-based game built with JavaScript, HTML5, CSS3.'
            liveLink='https://simon994.github.io/sei-project-1/'
          />
          <ProjectCard
            githubLink='https://github.com/Simon994/news-feed-v2Global'
            imgLink={newsFeed}
            altText="NewsFeed demo"
            titleText="News Feed v2Global"
            infoText='A React app that consumes API data from GNews.'
            liveLink='https://the-news-feed-v2-global.netlify.app'
          />
          <div className='project-card'>

          </div>
        </div>
      </div> */}


      {/* <div className="parallax">
        <div className="parallax-section" id="first-group">

          <div className="parallax-layer parallax-layer-front">
            <div className='front-container'>Redshirt's run</div>
          </div>

          <div className="parallax-layer parallax-layer-med">
            <div className='med-container'>
              <p>Redshirt's run</p>
              <p>A grid-based game built with JavaScript, HTML5, CSS3.</p>
              <p>Built solo in a week, three weeks into my Software Engineering Immersive at General Assembly</p>
            </div>
          </div>


          <div className="parallax-layer parallax-layer-base">
            <div className='base-container'>
              This is the base
              <div className="project-img" />
            </div>
          </div>
        </div>

        <div className="parallax-section" id="second-group">
          <div className="parallax-layer parallax-layer-front">
            <div className='front-container'>This is the front</div>
          </div>
          <div className="parallax-layer parallax-layer-med">
            <div className='med-container'>
              This is the med
              <img src={redshirtsRun} className="project-img" />
            </div>
          </div>
          <div className="parallax-layer parallax-layer-base">
            <div className='base-container'>This is the base</div>
          </div>
        </div>
      </div> */}


      <div className="project-img1">
        <div className="project-img1-glitch"></div>
        <div className="project-img1-glitch"></div>
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


      <div className="project-img2">
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


      <div className="project-img3">
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