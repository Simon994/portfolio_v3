import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {

  render(){
    return (
      <nav>
        <ul>
          <li>
            <Link to='/'>
              About
            </Link>
          </li>
          <li>Projects</li>
          <li>
            <Link to='/skills'>
              Skills
            </Link>
          </li>
          <li>Other</li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(Navbar)