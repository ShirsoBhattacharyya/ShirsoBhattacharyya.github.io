import React from "react";

const SocialIcon = ({ link, icon, label, nav = false }) => {
  if (nav === true) {
    return (
      <a aria-label={label} href={link}>
        <i className={icon} aria-hidden="true" style={{ color: "black" }} />
      </a>
    );
  } else {
    return (
      <a aria-label={label} href={link}>
        <i className={icon} aria-hidden="true" />
      </a>
    );
  }
};

export default SocialIcon;
