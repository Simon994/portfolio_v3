import React from 'react'

export const Icon = (props) => {

  const icon = props.iconType

  return (
    <div className="skills-content-border">
      <div className={props.isThin ? 'icon-glitch-thin' : 'icon-glitch'}>
        {icon}
        {icon}
        {icon}
      </div>
    </div>
  )

}
