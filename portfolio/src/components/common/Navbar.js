import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

class Navbar extends React.Component {

  render(){
    return (
      <nav>
        <ul>
          <li>
            <NavLink 
              exact to='/'
              className='nav-link'
              activeClassName='selected'
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/projects' 
              className='nav-link'
              activeClassName='selected'
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/skills'
              className='nav-link'
              activeClassName='selected'
            >
              Skills
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(Navbar)