/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import redshirtsRun from '../../styles/screenshots/Redshirts_run_screenshot.png'
import newsFeed from '../../styles/screenshots/News_Feed_V2Global.png'

const Projects = () => {
  return (
    <div className='projects-outer-container'>
      <div className='projects-cards-container'>
        <div className='project-card'>
          <a href="https://github.com/Simon994/sei-project-1">
            <img src={redshirtsRun} alt="Redshirt's run demo"/>
          </a> 
          <div >
            <div >
              <h5>Redshirt's run</h5>
              <p>A grid-based game built with JavaScript, HTML5, CSS3.<br/>
                <a href="https://github.com/Simon994/sei-project-1">Github repository</a><br/>
                <a href="https://simon994.github.io/sei-project-1/">Live version</a>
              </p>
            </div>
          </div> 
        </div>
        <div className='project-card'>
          <a href="https://github.com/Simon994/news-feed-v2Global">
            <img src={newsFeed} alt="NewsFeed demo"/>
          </a> 
          <div >
            <div >
              <h5>News Feed v2Global</h5>
              <p>A React app that consumes API data from GNews.<br/>
                <a href="https://github.com/Simon994/news-feed-v2Global">Github repository</a><br/>
                <a href="https://the-news-feed-v2-global.netlify.app">Live version</a>
              </p>
            </div>
          </div> 
        </div>
        <div className='project-card'>

        </div>
      </div>
    </div>
  )
}

export default Projects