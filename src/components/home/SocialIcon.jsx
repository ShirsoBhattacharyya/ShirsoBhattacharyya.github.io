import React from 'react'

const SocialIcon = ({link, icon, label}) => {
  return (
    <a target="_blank" aria-label={label}
           rel="noopener noreferrer" href={link}>
        <i className={icon} aria-hidden="true"/>
    </a>
  )
}

export default SocialIcon
