import React, { useState } from "react";
import Style from "./Navbar.module.scss";
import Toggler from "../home/Toggler";
import { Box, Button, ListItem, ListItemText } from "@mui/material";
import { info } from "../../information/information";
import SocialIcon from "../home/SocialIcon";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";

const links = [
  {
    name: "Home",
    to: "/",
    active: "home",
  },
  {
    name: "About Me",
    to: "/about",
    active: "about",
  },
  {
    name: "Skills",
    to: "/skills",
    active: "skills",
  },
  {
    name: "Projects",
    to: "/projects",
    active: "projects",
  },
  {
    name: "Contact",
    to: "/contact",
    active: "contact",
  },
  {
    name: "Resume",
    to: "/resume",
    active: "resume",
  },
];

const Navbar = ({ darkMode, handleClick }) => {
  const [open, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };
  return (
    <Box
      component={"nav"}
      width={"100%"}
      height={"70px"}
      padding={"0.5rem"}
      display="flex"
      alignItems="center"
      justifyContent={"space-between"}
    >
      <Box
        display={"flex"}
        gap={"1.5rem"}
        fontSize={{ xs: "2rem", md: "2.5rem" }}
      >
        {info.socials.map((social, index) => (
          <SocialIcon
            key={index}
            link={social.link}
            icon={social.icon}
            label={social.label}
            nav={true}
          />
        ))}
      </Box>
      <Box
        component={"ul"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ xs: "2rem", s: "2rem", md: "2rem" }}
        fontSize={"1rem"}
      >
        <Box className={Style.options}>
          {links.map((link, index) =>
            link.active === "resume" ? (
              <a
                href={
                  "https://drive.google.com/file/d/1SejhiySssjkCn37TfIwxQ_MO5w-huHNG/view?usp=sharing"
                }
                target="_blank"
                rel="noreferrer"
                style={{
                  paddingBottom: "0.5rem",
                  color: "black",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                key={index}
              >
                Resume
              </a>
            ) : (
              <Box
                key={index}
                component={"li"}
                sx={{ borderImageSource: info.gradient }}
              >
                <Link
                  to={link.active}
                  smooth={true}
                  duration={1000}
                  spy={true}
                  offset={-100}
                  activeClass={Style.active}
                  key={index}
                >
                  {!link.type && (
                    <p
                      style={{
                        paddingBottom: "0.5rem",
                        color: "black",
                        cursor: "pointer",
                      }}
                    >
                      {link.name}
                    </p>
                  )}
                  {link.type && <h1>{link.name}</h1>}
                </Link>
              </Box>
            )
          )}
        </Box>
        <li className={Style.menu}>
          <React.Fragment key="right">
            <Button onClick={toggleDrawer(true)}>
              <MenuIcon color="black" />
            </Button>
            <SwipeableDrawer
              anchor="right"
              open={open}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              borderRadius="15px"
            >
              <Box width="250px">
                <ListItem>
                  <CloseIcon onClick={toggleDrawer(false)} />
                </ListItem>
                <ListItem>
                  <Box
                    padding="1rem 2rem"
                    border="2px solid"
                    width="140px"
                    height="60px"
                    borderRadius="25px"
                    cursor="pointer"
                  >
                    <Link
                      to="home"
                      onClick={toggleDrawer(false)}
                      smooth={true}
                      duration={1000}
                      spy={true}
                      offset={-100}
                      activeClass={Style.active}
                    >
                      <ListItemText primary="Home" />
                    </Link>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box
                    padding="1rem 2rem"
                    border="2px solid"
                    width="140px"
                    height="60px"
                    borderRadius="25px"
                    cursor="pointer"
                  >
                    <Link
                      to="about"
                      onClick={toggleDrawer(false)}
                      smooth={true}
                      duration={1000}
                      spy={true}
                      offset={-100}
                      activeClass={Style.active}
                    >
                      <ListItemText primary="About Me" />
                    </Link>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box
                    padding="1rem 2rem"
                    border="2px solid"
                    width="140px"
                    height="60px"
                    borderRadius="25px"
                    cursor="pointer"
                  >
                    <Link
                      to="skills"
                      onClick={toggleDrawer(false)}
                      smooth={true}
                      duration={1000}
                      spy={true}
                      offset={-100}
                      activeClass={Style.active}
                    >
                      <ListItemText primary="Skills" />
                    </Link>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box
                    padding="1rem 2rem"
                    border="2px solid"
                    width="140px"
                    height="60px"
                    borderRadius="25px"
                    cursor="pointer"
                  >
                    <Link
                      to="projects"
                      onClick={toggleDrawer(false)}
                      smooth={true}
                      duration={1000}
                      spy={true}
                      offset={-100}
                      activeClass={Style.active}
                    >
                      <ListItemText primary="Projects" />
                    </Link>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box
                    padding="1rem 2rem"
                    border="2px solid"
                    width="140px"
                    height="60px"
                    borderRadius="25px"
                    cursor="pointer"
                  >
                    <Link
                      to="contact"
                      onClick={toggleDrawer(false)}
                      smooth={true}
                      duration={1000}
                      spy={true}
                      offset={-100}
                      activeClass={Style.active}
                    >
                      <ListItemText primary="Contact" />
                    </Link>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box
                    padding="1rem 2rem"
                    border="2px solid"
                    width="140px"
                    height="60px"
                    borderRadius="25px"
                    cursor="pointer"
                  >
                    <a
                      href={
                        "https://drive.google.com/file/d/1SejhiySssjkCn37TfIwxQ_MO5w-huHNG/view?usp=sharing"
                      }
                      onClick={toggleDrawer(false)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ListItemText primary="Resume" />
                    </a>
                  </Box>
                </ListItem>
              </Box>
            </SwipeableDrawer>
          </React.Fragment>
        </li>
        <li>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </Box>
    </Box>
  );
};

export default Navbar;
