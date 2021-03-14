import React from 'react'

import styles from './Icon.module.scss'

export const Icon = (props) => {

  const icon = props.iconType

  return (
    <div className={styles.skillsContentBorder}>
      <div className={`${props.isVisible ? `${styles.iconGlitch}` : ''}`}>
        {icon}
        {icon}
        {icon}
      </div>
    </div>
  )

}
