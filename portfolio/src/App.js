import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Home from './components/infos/Home'
import Skills from './components/infos/Skills'

class App extends React.Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/skills' component={Skills}></Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App
