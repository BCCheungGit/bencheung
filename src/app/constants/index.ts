
import {
  codeninjas,
  ocm,
  purplek,
  weelrn_logo,
  docker,
  css,
  html,
  javascript,
  typescript,
  react,
  tailwind,
  nodejs,
  linkedin,
  instagram,
  github,
  C,
  python,
  ocm_visitors,
  ocm_checkin,
  java,
} from '../assets';




export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: 'projects',
    title: "Projects"

  },

  {
    id: "contact",
    title: "Contact",
  },

];



export const experiences = [
  {
    title: "Data Science Intern",
    company_name: "Weelrn (Shanghai, remote)",
    icon: weelrn_logo,
    iconBg: "#FFFFFF",
    date: "February 2024 - July 2024",
    points: [
      "Led a team of six students to write Python scripts to run automated AI-generated learning cycles, containerized with Docker and deployed on the Cloud.",
      "Extracted data and performed analysis to quantify student interactions. ",
      "Organized weekly meetings and presentations. ",
    ]
  },
  
  {
    title: "Software Engineer Intern",
    company_name: "Kulla (Shanghai, remote)",
    icon: purplek,
    iconBg: "#FFFFFF",
    date: "September 2023 - January 2024",
    points: [
      "Designed and implemented a BIM software that allows users to visualize and interact with 3D models of buildings.",
      "Led a team of three students to design and build a front-end system using Next.js and help build a back-end system using Django.",
      "Collaborated with the team to design and implement new features for the platform.",
    ]
  },
  {
    title: "Instructor",
    company_name: "Code Ninjas (New York)",
    icon: codeninjas,
    iconBg: "#FFFFFF",
    date: "February 2021 - August 2022",
    points: [
      "Taught young adults aged 7-14 the basic principles of coding languages such as Python, JavaScript, HTML, CSS, and Java. ",
      "Provided guidance and support to students as they worked through coding challenges and projects.",
    ]
  },
]


export const technologies = [{
  name: "Docker",
  icon: docker
},
{
  name: "CSS",
  icon: css
},
{
  name: "HTML",
  icon: html
},
{
  name: "JavaScript",
  icon: javascript
},
{
  name: "TypeScript",
  icon: typescript
},
{
  name: "React",
  icon: react
},
{
  name: "Tailwind",
  icon: tailwind
},
{
  name: "Node.js",
  icon: nodejs
},
{
  name: "C",
  icon: C,
},
{
  name: "Python",
  icon: python,
}, 
{
  name: "Java",
  icon: java,
}

]

export const socials = [
  {
    name: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/in/benjamin-cheung-50b06b231/"
  },
  {
    name: "Github",
    icon: github,
    url: "https://www.github.com/BCCheungGit"
  },
  {
    name: "Instagram",
    icon: instagram,
    url: "https://www.instagram.com/ben_cheungg/"
  }
]

export const projects = [
  {
    title: "OCM Visitor Registration",
    image: ocm_visitors,
    date: "Jun 2024 - Aug 2024",
    active_users: "~3000 yearly active users",
    points: [
      "Next.js", "Typescript", "TailwindCSS", "Supabase", "Node.js"
    ],
    linkicon: github,
    link: "https://github.com/BCCheungGit/OCM-Visitor-Registration"
  },
  {
    title: "OCM Check-In System",
    image: ocm_checkin,
    date: "Jun 2023 - Sep 2023",
    active_users: "~10000 yearly active users",
    points: [
      "React", "Firebase", "Postgres", "Node.js",
    ],
    linkicon: github,
    link: "https://github.com/BCCheungGit/ocm-checkin-app"
  },
]