import React from 'react';
import Style from './Home.module.scss';
import me from '../../assets/pngs/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";
import {info} from "../../information/information";

const Home = () => {
  return (
    <Box id='home'>
        <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'} width='100%'
            justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
               <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '30vh', md: '40vh'}}
                  height={{xs: '30vh', md: '40vh'}}
                  borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
               <Box>
               <br/>
               <h1>Hi, I'm <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName}</span><span className={Style.hand}>👋</span>
               </h1>
               <h2>I'm {info.position}.</h2>
               <Box component={'ul'} p={'0.8rem'}>
                  {info.miniBio.map((bio, index) => (
                     <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
                  ))}
               </Box>
               <Box display={'flex'} gap={'1.5rem'} fontSize={{xs: '2rem', md: '2.5rem'}}>
                  {info.socials.map((social, index) => (
                     <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
                  ))}
               </Box>
            </Box>
        </Box>
        <br/>
        <Box style={{display:'flex',justifyContent:'center',margin:'2.5rem',marginLeft:'-1rem'}}>
            <button style={{padding:'1rem 1.5rem',borderRadius:'1.5rem',fontSize:'1rem',background:info.gradient,fontWeight:'500',cursor:'pointer'}}><a href={'https://drive.google.com/file/d/1SejhiySssjkCn37TfIwxQ_MO5w-huHNG/view?usp=sharing'} target='_blank' rel="noreferrer"><p style={{color:'black'}}>Download Resume</p></a></button>
        </Box>
    </Box>
  )
}

export default Home
