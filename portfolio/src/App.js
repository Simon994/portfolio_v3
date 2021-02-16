import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Navbar from './components/common/Navbar'
import Home from './components/infos/Home'
import Skills from './components/infos/Skills'
import Projects from './components/infos/Projects'
import Plane from './components/infos/Plane'

class App extends React.Component {

  render() {
    return (
      <HashRouter basename='/'>
        <Navbar />
        <Route render={({ location }) => (
          <Switch location={location}>
            <Route exact path='/' component={Home}></Route>
            <Route path='/projects' component={Projects}></Route>
            <Route path='/skills' component={Skills}></Route>
            <Route path='/temp' component={Plane}></Route>
          </Switch>
        )} />
      </HashRouter>
    )
  }
}

export default App
