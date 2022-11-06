import React, {useState} from 'react';
import Style from './BaseLayout.module.scss';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';
import {Link, Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";
import Skills from '../skills/Skills';


const BaseLayout = () => {
    const [darkMode, setDarkMode] = useState(false);
    const handleClick=()=>{
        setDarkMode(!darkMode);
    }
    return (
        <Box component='div' width='100%' className={darkMode ? Style.dark : Style.light}>
            <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
                <Grid item>
                    <Navbar darkMode={darkMode} handleClick={handleClick}/>
                </Grid>
                {/* <Grid item flexGrow={1}>
                    <Routes>
                        <Route exact path={'#'} element={<Home/>}/>
                        <Route exact path={'#about'} element={<About/>}/>
                        <Route exact path={'#portfolio'} element={<Portfolio/>}/>
                        <Route exact path={'#contact'} element={<Contact/>}/>
                    </Routes>
                </Grid> */}
                <Grid item style={{paddingTop:'10rem'}}>
                    <Home/>
                    <hr style={{margin:'8rem 4rem'}}/>
                    <About/>
                    <hr style={{margin:'8rem 4rem'}}/>
                    <Skills/>
                    <hr style={{margin:'8rem 4rem'}}/>
                    <Portfolio/>
                    <hr style={{margin:'8rem 4rem'}}/>
                    <Contact/>
                    <hr style={{margin:'1.5rem 4rem'}}/>
                </Grid>
                <Grid item>
                    <Box component={'footer'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                            p={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
                        <p style={{fontSize:'15px'}}>Portfolio created with &hearts; by Shirso Bhattacharyya</p>
                        <p style={{fontSize:'15px',margin:'15px'}}>&copy; 2022</p>
                    </Box>
                </Grid>
            </Grid>
      </Box>
    )
}

export default BaseLayout
