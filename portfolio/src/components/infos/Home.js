/* eslint-disable quotes */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Home = () => {
  
  const name = 'Simon R.T. Neil'

  const infoAboutMe = [
    "I'm a software engineer with a background in product management and scientific publishing.",
    "My first taste of programming was during my DPhil (PhD) at the University of Oxford. There, I designed and programmed instruments that helped to uncover the chemistry and physics of bird navigation. I also developed a passion for publishing my results, which led me to become the editor for a portfolio of scientific journals. As an editor, I collaborated with software engineers, data scientists and UX designers to develop journal products that our readers and authors loved.",
    "The technology-driven change I experienced in the scientific publishing industry inspired me to return to programming. Now completing the Software Engineering Immersive at General Assembly, I’m looking to apply my skills for problem solving and analysis in an environment that encourages learning and creative, curious thinking."
  ]

  return (
    <>
      <div className='about-outer-container'>
        <div className="glitch name content-border" data-text={name}>
          {name}
        </div>
        
        <div>
          <p className="glitch info-about content-border" data-text={infoAboutMe[0]}>
            {infoAboutMe[0]}
          </p>
          <p className="glitch info-about content-border" data-text={infoAboutMe[1]}>
            {infoAboutMe[1]}
          </p>
          <p className="glitch info-about content-border" data-text={infoAboutMe[2]}>
            {infoAboutMe[2]}
          </p>
        </div>
      </div>

    </>
  )
}

export default Home