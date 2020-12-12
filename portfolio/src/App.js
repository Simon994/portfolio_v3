import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Navbar from './components/common/Navbar'
import Home from './components/infos/Home'
import Skills from './components/infos/Skills'

class App extends React.Component {

  render() {
    return (
      <>
        <Navbar />
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={700}
              classNames='fade'
            >
              <Switch location={location}>
                <Route exact path='/' component={Home}></Route>
                <Route path='/skills' component={Skills}></Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </>
    )
  }
}

export default App
