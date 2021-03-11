import React from 'react'

import Navbar from './components/common/Navbar'
import Home from './components/infos/Home'
import Skills from './components/infos/Skills'
import Projects from './components/infos/Projects'

class App extends React.Component {

  render() {
    return (
      <>
        <Navbar />
        <Home/>
        <Projects/>
        <Skills/>
      </>
    )
  }
}

export default App
