import React from 'react'

const ProjectCard = (props) => {
  
  const {
    githubLink,
    imgLink,
    altText,
    titleText,
    infoText,
    liveLink
  } = props

  return (
    <div className='project-card card-border fade-in'>
      <a href={githubLink}>
        <img src={imgLink} alt={altText}/>
      </a> 
      <div >
        <div >
          <h5>{titleText}</h5>
          <p>{infoText}<br/>
            <a href={githubLink}>Github repository</a><br/>
            <a href={liveLink}>Live version</a>
          </p>
        </div>
      </div> 
    </div>
  )
}

export default ProjectCard