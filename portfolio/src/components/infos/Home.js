import React from 'react'

import Plane from './Plane'

const Home = () => {
  
  const infoAboutMe = [
    'I\'m a software engineer with a background in product management and scientific publishing.',
    'My first taste of programming was during my DPhil (PhD) at the University of Oxford. There, I designed and programmed instruments that helped to uncover the chemistry and physics of bird navigation. I also developed a passion for publishing my results, which led me to become the editor for a portfolio of scientific journals. As an editor, I collaborated with software engineers, data scientists and UX designers to develop journal products that our readers and authors loved.',
    'The technology-driven change I experienced in the scientific publishing industry inspired me to return to programming. After completing a Software Engineering Immersive at General Assembly, I joined Dunelm as a Site Reliability Engineer, where I use my skills for problem solving and analysis in an environment that encourages learning and creative, curious thinking.'
  ]

  return (
    <>
      <Plane usage="home" info={infoAboutMe}/>
    </>
  )
}

export default Home