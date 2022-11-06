import React from 'react'

const SocialIcon = ({link, icon, label}) => {
  return (
    <a aria-label={label} href={link} style={{color:'black'}}>
        <i className={icon} aria-hidden="true"/>
    </a>
  )
}

export default SocialIcon
