import React from 'react'
import * as Is from 'react-icons/di'
import { SiTypescript, SiJest, SiMocha } from 'react-icons/si'
import { AiOutlineGitlab } from 'react-icons/ai'

import { Icon } from './Icon'

const Skills = () => {
  
  // const postgresql = 
  // const npm = 
  // const md = 

  const icons = [
    <Is.DiGit key='Git'/>,
    <Is.DiGithubBadge key='GitHub'/>,
    <AiOutlineGitlab key='GitLab'/>,
    <Is.DiJavascript1 key='JavaScript'/>,
    <Is.DiPython key='Python'/>,
    <Is.DiCss3 key='CSS3'/>,
    <Is.DiSass key='Sass'/>,
    <Is.DiHtml5 key='HTML5'/>,
    <Is.DiReact key='React.js'/>,
    <Is.DiNodejs key='Node.js'/>,
    <Is.DiDjango key='Django'/>,
    <Is.DiMongodb key='MongoDB'/>,
    <Is.DiPostgresql key='PostgreSQL'/>,
    <Is.DiNpm key='npm'/>,
    <Is.DiMarkdown key='Markdown'/>,
    <Is.DiVisualstudio key='Visual Studio Code'/>,
    <SiTypescript key='TypeScript'/>,
    <SiJest key='Jest'/>,
    <SiMocha key='Mocha'/>
  ]
  
  return (
    <>
      <div className="skills-content-outer">
        {
          icons.map((icon, index) => {
            return <Icon
              iconType={icon}
              key={index}
              id={icon.key}
              className="icon"
            />
          })
        }
      </div>
    </>  
  )
}

export default Skills