import React from 'react'

import Navbar from './components/common/Navbar'
import Home from './components/infos/Home'
import Skills from './components/infos/Skills'
import Projects from './components/infos/Projects'
import GitHubActivity from './components/infos/GitHubActivity'


class App extends React.Component {

  render() {
    return (
      <>
        <Navbar />
        <Home />
        <Projects />
        <Skills />
        {/* <GitHubActivity /> */}
      </>
    )
  }
}

export default App
