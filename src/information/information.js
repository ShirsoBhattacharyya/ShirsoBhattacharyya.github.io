import self from '../assets/pngs/self.png';
import bathandbodyworks from '../assets/pngs/bathandbodyworks.png';
import geekbuying from '../assets/pngs/geekbuying.png';
import kfc from '../assets/pngs/kfc.png';

export let colors = ["rgb(204, 255, 20)", "rgb(18, 136, 248)"];

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
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in India'
        },
        {
            emoji: "💼",
            text: "Student at Masai School"
        },
        {
            emoji: "📧",
            text: "shirso369@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/ShirsoBhattacharyya",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/shirso369",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }

    ],
    bio: "Hello! I'm Shirso. I'm a full stack web developer passionate about MERN Stack web frameworks. I studied coding at Masai School, where I did put in a lot of hard work to understand HTML, CSS, Javascript and MERN technologies like MongoDB, Express, React and Node. I am in this journey for constant improvement and upskilling. Please feel to ping me incase of collabs because every project is a learning experience I cherish wholeheartedly.",
    skills:
        {
            proficientWith: ['javascript','react', 'nodejs','express','mongodb','git', 'github', 'html5', 'css3'],
            exposedTo: ['typescript', 'socket.io', 'nextjs','reactnative','electron','firebase','docker']
        }
    ,
    hobbies: [
        {
            label: 'chess',
            emoji: '♟️'
        },
        {
            label: 'spirituality',
            emoji: '🙏'
        },
        {
            label: 'real madrid fan',
            emoji: '⚽'
        }
    ],
    portfolio: [
        {
            title: "GeekBuying Clone",
            live: "https://geek-buying-clone.netlify.app/", 
            source: "https://github.com/Randhir200/GeekBuying-CW2", 
            image: geekbuying
        },
        {
            title: "KFC Clone",
            live: "https://enchanted-slave-2236.netlify.app",
            source: "https://github.com/ShirsoBhattacharyya/enchanted-slave-2236",
            image: kfc
        },
        {
            title: "Bath & Body Works Clone",
            live: "https://bath-and-body-works-clone.netlify.app/",
            source: "https://github.com/ShirsoBhattacharyya/Bath-BodyWorks-CW1",
            image: bathandbodyworks
        }
    ]
}