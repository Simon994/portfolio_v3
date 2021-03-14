import React from 'react'

import styles from './Fade.module.scss'

export default function FadeIn(props) {
  const domRef = React.useRef()
  const [isVisible, setVisible] = React.useState(false)
  
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(function(entry) {
        setVisible(entry.isIntersecting)
      } 
      )
    }
  )

  React.useEffect(() => {
    observer.observe(domRef.current)
    return () => observer.disconnect()
  })

  return (
    <div
      className={`${styles.fadeInSection} ${isVisible ? `${styles.isVisible}` : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  )
}
