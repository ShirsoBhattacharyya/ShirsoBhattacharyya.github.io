import React from "react";
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import Styles from "./Portfolio.module.scss";

const PortfolioBlock = ({ image, live, source, title, desc, techStack }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    } else {
      return text;
    }
  };
  return (
    <Box className={Styles.portfolioBlock}>
      <Box height="200px">
        <Box
          component={"img"}
          src={image}
          alt={"mockup"}
          border={"2px solid"}
          borderRadius={"25px"}
        />
      </Box>
      <br />
      <Box>
        <h1 style={{ fontSize: "2rem", textAlign: "center" }}>{truncateText(title, 12)}</h1>
        <br />
        <Box className={Styles.projectDesc}>
          <p>{truncateText(desc, 95)}</p>
        </Box>
        <Box padding="0.5rem" fontSize="22px">
          <p style={{ textAlign: "center" }}>TECH STACK : {truncateText(techStack, 15)}</p>
        </Box>
        <Box
          className={"portfolio"}
          display={"flex"}
          gap={"0.5rem"}
          alignItems={"center"}
          justifyContent={"center"}
          fontSize={"1.5rem"}
          py={"2rem"}
        >
          <Box p={1} border={"2px solid"} borderRadius={"25px"}>
            <IconLink link={live} title={"Live Demo"} icon={"fa fa-safari"} />
          </Box>
          <Box p={1} border={"2px solid"} borderRadius={"25px"}>
            <IconLink link={source} title={"Source Code"} icon={"fa fa-code"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioBlock;
