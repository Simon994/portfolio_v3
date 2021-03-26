import React from 'react'

import { DiGithubBadge } from 'react-icons/di'
import { TiSocialLinkedinCircular } from 'react-icons/ti'

import styles,
{
  aboutIcon,
  infoText,
  linkedin,
  github,
  glitch,
  homeTextContainer
} from './HomeText.module.scss'

const HomeText = (props) => {

  const { infos } = props

  return (
    <div className={styles.homeTextOuter}>
      <div className={`${glitch} ${infoText} ${homeTextContainer}`}>
        <a href="https://github.com/Simon994" target="blank">
          <DiGithubBadge className={`${aboutIcon} ${github}`} />
        </a>
        <a href="https://www.linkedin.com/in/simonrtneil/" target="blank">
          <TiSocialLinkedinCircular className={`${aboutIcon} ${linkedin}`} />
        </a>
      </div>
      <div data-cy='about-text'>
        {infos.map((info, index) => (
          <p key={index}
            className={`${glitch} ${infoText} ${homeTextContainer}`}
            data-text={info}
          >
            {info}
          </p>
        )
        )}
      </div>
    </div>
  )
}

export default HomeText