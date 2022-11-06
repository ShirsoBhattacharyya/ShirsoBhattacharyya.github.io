import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../information/information";

const Portfolio = () => {
  return (
    <Box>
        <h1 style={{padding:'4rem 0',textAlign:'center',fontSize:'38px'}}>PROJECTS :</h1>
        <Box display={'flex'} alignItems={'center'} justifyContent='center' flexWrap='wrap'>
                {info.portfolio.map((project, index) => (
                   <Box key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} desc={project.description} techStack={project.techStack}/>
                   </Box>
                ))}
        </Box>
    </Box>
  )
}

export default Portfolio
