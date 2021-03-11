import React from 'react'

import { DiGithubBadge } from 'react-icons/di'
import { TiSocialLinkedinCircular } from 'react-icons/ti'

import styles,
{aboutIcon,
  infoText,
  linkedin,
  github,
  glitch,
  homeTextContainer
} from './HomeText.module.scss'

const HomeText = (props) => {

  const {info} = props

  return (
    <>
      <div className={styles.homeTextOuter}>
        <div className={`${glitch} ${infoText} ${homeTextContainer}`}>
          <a href="https://github.com/Simon994" target="blank">
            <DiGithubBadge className={`${aboutIcon} ${github}`}/>
          </a>
          <a href="https://www.linkedin.com/in/simonrtneil/" target="blank">
            <TiSocialLinkedinCircular className={`${aboutIcon} ${linkedin}`}/>
          </a>
        </div>
        <p className={`${glitch} ${infoText} ${homeTextContainer}`} data-text={info[0]}>
          {info[0]}
        </p>
        <p className={`${glitch} ${infoText} ${homeTextContainer}`} data-text={info[1]}>
          {info[1]}
        </p>
        <p className={`${glitch} ${infoText} ${homeTextContainer}`} data-text={info[2]}>
          {info[2]}
        </p>
      </div>
    </>
  )
}

export default HomeText