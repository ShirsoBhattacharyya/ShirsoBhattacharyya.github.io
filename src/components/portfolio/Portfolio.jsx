import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import GitHubCalendar from "react-github-calendar";
import {info} from "../../information/information";

const Portfolio = () => {
  const github = {
    padding: "20px 0px",
    borderRadius: "10px",
  };
  return (
    <Box>
        <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={6} md={4} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
        </Grid>
        <br />
        <br />
        <Box>
            <h1 style={{fontSize: '2rem',textAlign:'center'}}>Daily Contributions</h1>      
            <Box
              w={["80%", "80%", "65%"]}
              style={github}
              className="github_Calender"
            >
              <GitHubCalendar
                style={{ margin: "auto" }}
                username="ShirsoBhattacharyya"
                year={new Date().getFullYear()}
              />
            </Box>
        </Box>
    </Box>
  )
}

export default Portfolio
