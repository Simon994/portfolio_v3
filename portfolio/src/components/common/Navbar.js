import React from 'react'
import { Link } from 'react-scroll'

import styles from './navbar.module.scss'

class Navbar extends React.Component {

  render(){
    return (
      <nav >
        <ul>
          <li>
            <Link
              to="section1"
              spy={true}
              smooth={true}
              duration={1000}
              className={styles.navLink}
              activeClass={styles.selected}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="section2"
              spy={true}
              smooth={true}
              duration={1000}
              className={styles.navLink}
              activeClass={styles.selected}
            >
                Projects
            </Link>
          </li>
          <li>
            <Link
              to="section3"
              spy={true}
              smooth={true}
              duration={1000}
              className={styles.navLink}
              activeClass={styles.selected}
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