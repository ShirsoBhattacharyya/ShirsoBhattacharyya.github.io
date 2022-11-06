import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import Toggler from "../home/Toggler";
import {Link} from "react-router-dom";
import {Box, Button, ListItem, ListItemText} from "@mui/material";
import {info} from "../../information/information";
import SocialIcon from '../home/SocialIcon';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CloseIcon from "@mui/icons-material/Close";



const links = [
  {
      name: 'Home',
      to: '#',
      active: 'home'
  },
  {
      name: 'About Me',
      to: '#about',
      active: 'about'
  },
  {
      name: 'Skills',
      to: '#skills',
      active: 'skills'
  },
  {
      name: 'Projects',
      to: '#projects',
      active: 'projects'
  },
  {
      name: 'Contact',
      to:'#contact',
      active: 'contact'
  },
  {
    name:'Resume',
    to:'#resume',
    active:'resume'
  }
]

const Navbar = ({darkMode, handleClick}) => {
  const [open, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };
  return (
    <Box component={'nav'} width={'100%'} height={'70px'} padding={'0.5rem'} display='flex' alignItems='center' justifyContent={'space-between'}>
        <Box display={'flex'} gap={'1.5rem'} fontSize={{xs: '2rem', md: '2.5rem'}}>
                  {info.socials.map((social, index) => (
                     <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
                  ))}
        </Box>
        <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '2rem',s:'2rem', md: '2rem'}}
                fontSize={'1rem'}>
                <Box className={Style.options}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'}
                         sx={{borderImageSource: info.gradient}}
                         >
                        <Link to={link.to}>
                            {!link.type && <p style={{paddingBottom: '0.5rem',color:'black'}}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
                </Box>
                <li className={Style.menu}>
                    <React.Fragment key='right'>
                        <Button onClick={toggleDrawer(true)}>
                            <MenuIcon color='black'/>
                        </Button>
                        <SwipeableDrawer anchor='right' open={open} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)} borderRadius='15px'>
                            <Box width='250px'>
                                <ListItem>
                                    <CloseIcon onClick={toggleDrawer(false)}/>
                                </ListItem>
                                <ListItem>
                                    <Box padding='1rem 2rem' border='2px solid'  width='140px' height='60px' borderRadius='25px'>
                                        <ListItemText primary='Home'/>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box padding='1rem 2rem' border='2px solid'  width='140px' height='60px' borderRadius='25px'>
                                        <ListItemText primary='About Me'/>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box padding='1rem 2rem' border='2px solid'  width='140px' height='60px' borderRadius='25px'>
                                        <ListItemText primary='Skills'/>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box padding='1rem 2rem' border='2px solid' width='140px' height='60px' borderRadius='25px'>
                                        <ListItemText primary='Projects'/>
                                    </Box>    
                                </ListItem>
                                <ListItem>
                                    <Box padding='1rem 2rem' border='2px solid' width='140px' height='60px' borderRadius='25px'>
                                        <ListItemText primary='Contact'/>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box padding='1rem 2rem' border='2px solid' width='140px' height='60px' borderRadius='25px'>
                                        <ListItemText primary='Resume'/>
                                    </Box>
                                </ListItem> 
                            </Box>
                        </SwipeableDrawer>
                    </React.Fragment>
                </li>
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick}/>
                </li>
        </Box>
    </Box>
  )
}

export default Navbar
