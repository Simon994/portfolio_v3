/* eslint-disable react/jsx-key */
import React from 'react'
import * as Is from 'react-icons/di'
import { SiTypescript, SiJest, SiMocha } from 'react-icons/si'
import { AiOutlineGitlab } from 'react-icons/ai'

import { Icon } from './Icon'
import styles from './Skills.module.scss'

const Skills = () => {
  
  const icons = [
    <Is.DiGit />,
    <Is.DiGithubBadge />,
    <AiOutlineGitlab />,
    <Is.DiJavascript1 />,
    <Is.DiPython />,
    <Is.DiCss3 />,
    <Is.DiSass />,
    <Is.DiHtml5 />,
    <Is.DiReact />,
    <Is.DiNodejs />,
    <Is.DiDjango />,
    <Is.DiMongodb />,
    <Is.DiPostgresql />,
    <Is.DiNpm />,
    <Is.DiMarkdown />,
    <Is.DiVisualstudio />,
    <SiTypescript />,
    <SiJest />,
    <SiMocha />
  ]
  
  return (
    <div id='section3' className={styles.skillsContentOuter}>
      {
        icons.map((icon, index) => {
          return <Icon
            iconType={icon}
            key={index}
          />
        })
      }
    </div>
  )
}

export default Skills