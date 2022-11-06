import { Box } from '@mui/material';
import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { info } from '../../information/information';
import Styles from'./Skills.module.scss';

const Skills = () => {
  return (
    <Box>
        <h1 style={{textAlign:'center',padding:'4rem 0',fontSize:'38px'}}>SKILLS :</h1>
        <br />
        <br />
        <Box>
            <Box className={Styles.skillsets}>
                <h1 style={{fontSize: '2rem',textAlign:'center',padding:'4rem 0'}}>Frontend</h1>
                <Box className='frontend' display='flex' alignItems='center' justifyContent='center' gap='3rem' flexWrap='wrap'>
                    {
                        info.frontend.map(skill=>(
                            <Box border='2px solid' height='160px' width='140px' borderRadius='25px' padding='2rem'>
                                <img src={skill.logo} style={{height:'100px',width:'100px'}} alt={skill.title}/>
                                <h3 style={{textAlign:'center',padding:'2rem 0',fontSize:'18px'}}>{skill.title}</h3>
                            </Box>
                        ))
                    }
                </Box>
                <h1 style={{fontSize: '2rem',textAlign:'center',padding:'4rem 0'}}>Backend</h1>
                <Box className='backend' display='flex' alignItems='center' justifyContent='center' gap='3rem' flexWrap='wrap'>
                    {
                        info.backend.map(skill=>(
                            <Box border='2px solid' height='160px' width='140px' borderRadius='25px' padding='2rem'>
                                <img src={skill.logo} style={{height:'100px',width:'100px'}} alt={skill.title}/>
                                <h3 style={{textAlign:'center',padding:'2rem 0',fontSize:'18px'}}>{skill.title}</h3>
                            </Box>
                        ))
                    }
                </Box>
                {/* <Box width='2.5rem' height='100%' position='absolute' right='0' top='0' marginLeft='2rem' style={{background:info.gradient, WebkitTextFillColor: 'transparent'}}></Box> */}
            </Box>
            <Box position='relative'>
                <h1 style={{fontSize: '2rem',textAlign:'center',padding:'4rem 0'}}>Daily Contributions</h1>
                <Box
                width={["85%", "75%", "75%"]}
                margin='auto'
                className="github_Calender"
                border='2px solid'
                borderRadius='25px'
                padding='1rem'
                >
                <GitHubCalendar
                    style={{ margin: "auto",display:'flex',flexDirection:'column',justifyContent:'center' }}
                    username="ShirsoBhattacharyya"
                    year={new Date().getFullYear()}
                />
                </Box>
                <Box display='flex' justifyContent='center' m='2rem'>
                    <img src="https://github-readme-streak-stats.herokuapp.com/?user=ShirsoBhattacharyya&theme=dark&hide_border=false&include_all_commits=true&count_private=true" alt="" />
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Skills
