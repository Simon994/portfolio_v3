import React from 'react'

import { DiGithubBadge } from 'react-icons/di'
import { TiSocialLinkedinCircular } from 'react-icons/ti'

const HomeText = (props) => {

  const {info} = props

  return (
    <>
      <div className="home-text-outer">
        <div>
          <a href="https://github.com/Simon994" target="blank">
            <DiGithubBadge className="about-icon github"/>
          </a>
          <a href="https://www.linkedin.com/in/simonrtneil/" target="blank">
            <TiSocialLinkedinCircular className="about-icon linkedin"/>
          </a>
        </div>
        <p className="glitch name home-text-container" id="" data-text={info[0]}>
          {info[0]}
        </p>
        <p className="glitch name home-text-container" id="" data-text={info[1]}>
          {info[1]}
        </p>
        <p className="glitch name home-text-container" id="" data-text={info[2]}>
          {info[2]}
        </p>
      </div>
    </>
  )
}

export default HomeText