import React from 'react'
import { Link } from 'react-scroll'

class Navbar extends React.Component {

  render(){
    return (
      <nav>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              duration={1000}
              className='nav-link'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              duration={1000}
              className='nav-link'
            >
                Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              duration={1000}
              className='nav-link'
            >
                Skills
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar