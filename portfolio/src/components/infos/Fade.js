import React from 'react'

import { giveObserver, useObserver } from '../../lib/observer'
import styles from './Fade.module.scss'

export default function FadeIn(props) {
  const domRef = React.useRef()
  const [isVisible, setVisible] = React.useState(false)
  
  const observer = giveObserver(setVisible)
  useObserver(observer, domRef)

  return (
    <div
      className={`${styles.fadeInSection} ${isVisible ? `${styles.isVisible}` : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  )
}
