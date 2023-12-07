import self from "../assets/pngs/self.png";
import bathandbodyworks from "../assets/pngs/bathandbodyworks.png";
import geekbuying from "../assets/pngs/geekbuying.png";
import kfc from "../assets/pngs/kfc.png";
import react_logo from "../assets/pngs/react.png";
import redux_logo from "../assets/pngs/redux.png";
import chakraui_logo from "../assets/pngs/chakralogo.png";
import javascript_logo from "../assets/svgs/js.svg";
import css3_logo from "../assets/pngs/css.png";
import html5_logo from "../assets/pngs/html.png";
import node_logo from "../assets/svgs/nodejs.svg";
import express_logo from "../assets/svgs/expressjs.svg";
import mongodb_logo from "../assets/svgs/mongodb.svg";
import youtube from "../assets/pngs/youtube.png";
import beautiva from "../assets/pngs/beautiva.png";

export let colors = ["rgb(112, 100, 298)", " rgb(253, 218, 172)"];

export const info = {
  firstName: "Shirso",
  lastName: "Bhattacharyya",
  initials: "SB",
  position: "a Full Stack Web Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "Fueled by chai and code",
    },
    {
      emoji: "🌎",
      text: "Based in India",
    },
    {
      emoji: "💼",
      text: "Associate IT Engineer at Honeysys",
    },
    {
      emoji: "📧",
      text: "shirso369@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/ShirsoBhattacharyya",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://linkedin.com/in/shirso369",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/shirso369",
      icon: "fa fa-twitter",
      label: "twitter",
    },
  ],
  bio: "Hello! I'm Shirso. I'm a full stack web developer passionate about MERN Stack web frameworks. I studied coding at Masai School, where I did put in a lot of hard work to understand HTML, CSS, Javascript and MERN technologies like MongoDB, Express, React and Node. I am in this journey for constant improvement and upskilling. Please feel to ping me incase of collabs because every project is a learning experience I cherish wholeheartedly.",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "redux",
      "nodejs",
      "express",
      "mongodb",
      "git",
      "github",
      "html5",
      "css3",
    ],
    exposedTo: [
      "typescript",
      "socket.io",
      "nextjs",
      "reactnative",
      "electron",
      "firebase",
      "docker",
    ],
  },
  frontend: [
    {
      title: "React",
      logo: react_logo,
    },
    {
      title: "Redux",
      logo: redux_logo,
    },
    {
      title: "ChakraUI",
      logo: chakraui_logo,
    },
    {
      title: "Javascript",
      logo: javascript_logo,
    },
    {
      title: "CSS3",
      logo: css3_logo,
    },
    {
      title: "HTML5",
      logo: html5_logo,
    },
  ],
  backend: [
    {
      title: "NodeJS",
      logo: node_logo,
    },
    {
      title: "Express",
      logo: express_logo,
    },
    {
      title: "MongoDB",
      logo: mongodb_logo,
    },
  ],
  hobbies: [
    {
      label: "chess",
      emoji: "♟️",
    },
    {
      label: "spirituality",
      emoji: "🙏",
    },
    {
      label: "real madrid fan",
      emoji: "⚽",
    },
  ],
  portfolio: [
    {
      title: "Beautiva",
      live: "https://beautiva.netlify.app/",
      source: "https://github.com/ShirsoBhattacharyya/Beautiva",
      description:
        "Beautiva is an Ecommerce web application that deals with selling lifestyle-related products. Design inspiration is taken from Nykaa.",
      techStack: "React,Redux,SCSS, Material UI, ChakraUI, Node.js, Express, MongoDB, JWT",
      image: beautiva,
    },
    {
      title: "Youtube Clone",
      live: "https://yt-clone-shirso.web.app/",
      source: "https://github.com/ShirsoBhattacharyya/youtube-clone",
      description:
        "YouTube is an American online video sharing and social media platform headquartered in San Bruno, California. It was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim. It is owned by Google, and is the second most visited website, after Google Search. This is an attempt to further polish my React skills by trying to clone Youtube. I have tried my best to make it look as close to the original Youtube India page as possible.",
      techStack: "React,Redux,SCSS",
      image: youtube,
    },
    {
      title: "GeekBuying Clone",
      live: "https://geek-buying-clone.netlify.app/",
      source: "https://github.com/ShirsoBhattacharyya/GeekBuyingCW2",
      description:
        "This is the clone of GeekBuying website using HTML, CSS and Javascript. Geekbuying is an online retailer of electronic devices & accessories. Product catalog includes mobiles & tables, consumer electronics, computer & networking products, sports accessories, home decor electronics, and more",
      techStack: "HTML,CSS,JavaScript",
      image: geekbuying,
    },
    {
      title: "KFC Clone",
      live: "https://enchanted-slave-2236.netlify.app",
      source: "https://github.com/ShirsoBhattacharyya/enchanted-slave-2236",
      description:
        "In this Individual Project, I have attempted to clone KFC website using ReactJS. KFC (Kentucky Fried Chicken) is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken. It is the worlds second-largest restaurant chain after McDonalds. KFC was founded by Colonel Harland Sanders, an entrepreneur who began selling fried chicken from his roadside restaurant in Corbin, Kentucky. By branding himself as Colonel Sanders, Harland became a prominent figure of American cultural history and his image remains widely used in KFC advertising to this day. KFC was one of the first American fast-food chains to expand internationally, opening outlets in Canada, the United Kingdom, Mexico and Jamaica by the mid-1960s.",
      techStack: "ReactJS,CSS",
      image: kfc,
    },
    {
      title: "Bath & Body Works Clone",
      live: "https://bath-and-body-works-clone.netlify.app/",
      source: "https://github.com/ShirsoBhattacharyya/Bath-BodyWorks-CW1",
      description:
        "This is the first project for our construct week. This website is a clone of “Bath & Body Works”. The website has a landing page, product section with filter and sorting functionalities, sign up and login section, and finally cart section with payment systems. This project was a crucial learning experience for all the team members.",
      techStack: "HTML,CSS,JavaScript",
      image: bathandbodyworks,
    },
  ],
};
