import React from 'react'
import IconLink from "./IconLink";
import {Box} from "@mui/material";
import Styles from './Portfolio.module.scss';

const PortfolioBlock = ({image, live, source, title, desc, techStack}) => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} border={'2px solid'} borderRadius={'25px'} padding='2rem 1rem' margin='1rem'>
        <Box component={'img'} src={image} alt={'mockup'} border={'2px solid'} borderRadius={'25px'} height='60%'/>
        <br/>
        <h1 style={{fontSize: '2rem'}}>{title}</h1>
        <br />
        <Box className={Styles.projectDesc}>
          <p>{desc}</p>
        </Box>
        <Box padding='0.5rem' fontSize='22px'>
          <p>TECH STACK : {techStack}</p>
        </Box>
        <Box className={'portfolio'} display={'flex'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
            </Box>
            <Box p={1} border={'2px solid'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box>
        </Box>
    </Box>
  )
}

export default PortfolioBlock
