import React from 'react'
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../information/information";
const About = () => {
  const firstName = info.firstName.toLowerCase();
  const aboutMeText = () => {
    return (
      <Box className='#about'>
          <p><span style={{color: info.baseColor}}>{firstName} $</span> cat
              about{firstName} </p>
          <p><span style={{color: info.baseColor}}>about{firstName} <span
              className={Style.green}>(main)</span> $ </span>
              {info.bio}
          </p>
      </Box>
    );
  }
  const skillsText = () => {
    return (
      <>
          <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
          </p>
          <p><span style={{color: info.baseColor}}>skills/tools <span
              className={Style.green}>(main)</span> $</span> ls</p>
          <p style={{color: info.baseColor}}> Proficient With</p>
          <ul className={Style.skills}>
              {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
          </ul>
          <p style={{color: info.baseColor}}> Exposed To</p>
          <ul className={Style.skills}>
              {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
          </ul>
      </>
    );
}
const miscText = () => {
    return (
      <>
          <p><span style={{color: info.baseColor}}>{firstName} $</span> cd interests</p>
          <p><span style={{color: info.baseColor}}>interests <span
              className={Style.green}>(main)</span> $</span> ls</p>
          <ul>
              {info.hobbies.map((hobby, index) => (
                  <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
              ))}
          </ul>
      </>
    );
}
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
        <h1 style={{padding:'4rem 0',fontSize:'38px'}}>ABOUT ME :</h1>
        <Terminal text={aboutMeText()}/>
        {/* <Terminal text={skillsText()}/> */}
        <Terminal text={miscText()}/>
    </Box>
  )
}

export default About
