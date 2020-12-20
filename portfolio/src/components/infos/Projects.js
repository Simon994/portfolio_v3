/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import redshirtsRun from '../../styles/screenshots/Redshirts_run_screenshot.png'

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

        </div>
        <div className='project-card'>

        </div>
      </div>
    </div>
  )
}

export default Projects