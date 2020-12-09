import React from 'react'

import Navbar from './components/Navbar'

class App extends React.Component {

  render() {
    return (
      <>
        <Navbar />
        <div className="glitch" data-text="THIS IS A TEST OF THE SYSTEM">THIS IS A TEST OF THE SYSTEM</div>
      </>
    )
  }
}

export default App
