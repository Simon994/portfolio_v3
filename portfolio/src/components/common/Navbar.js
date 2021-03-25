import React from 'react'
import { Link } from 'react-scroll'

import styles from './Navbar.module.scss'

class Navbar extends React.Component {

  render(){
    return (
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
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
          <li className={styles.listItem}>
            <Link
              to="section2"
              spy={true}
              smooth={true}
              duration={1000}
              className={styles.navLink}
              activeClass={styles.selected}
              data-cy='projects'
            >
                Projects
            </Link>
          </li>
          <li className={styles.listItem}>
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