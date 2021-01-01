import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {

  render(){
    return (
      <nav>
        <ul>
          <li>
            <Link to='/' className='nav-link'>
              About
            </Link>
          </li>
          <li>
            <Link to='/projects' className='nav-link'>
              Projects
            </Link>
          </li>
          <li>
            <Link to='/skills' className='nav-link'>
              Skills
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(Navbar)