import React from "react";
import Styles from "./Portfolio.module.scss";

const IconLink = ({ link, title, icon }) => {
  return (
    <a href={link} target={"_blank"} rel="noopener noreferrer">
      <i style={{ paddingRight: "0.5rem" }} className={icon} />{" "}
      <p className={Styles.projecticon}>{title}</p>
    </a>
  );
};

export default IconLink;
