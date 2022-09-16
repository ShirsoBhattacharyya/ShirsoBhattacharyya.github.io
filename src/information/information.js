import self from '../assets/pngs/self.png';

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
    bio: "Hello! I'm Shirso. I'm a full stack web developer specializing in MERN Stack web frameworks. I studied coding at Masai School, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
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
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: self
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: self
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: self
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: self
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: self
        }
    ]
}