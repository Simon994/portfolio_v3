import React from 'react'
import { DiGit, DiCss3 } from 'react-icons/di'

const Skills = () => {
  
  const icon = <DiGit className='icon'/>
  const cssIcon = <DiCss3 className='icon'/>

  return (
    <>
      <div className="skills-content-outer">
        <div className="skills-content-border">
          <div className="example-one">
            {icon}
            {icon}
            {icon}
          </div>
        </div>
        <div className="skills-content-border">
          <div className="example-one">
            {cssIcon}
            {cssIcon}
            {cssIcon}
          </div>
        </div>
        <div className="skills-content-border">
          <div className="example-one">
            {cssIcon}
            {cssIcon}
            {cssIcon}
          </div>
        </div>
      </div>
    </>  
  )
}

export default Skills