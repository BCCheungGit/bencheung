
import {
  codeninjas,
  ocm,
  purplek,
  weelrn_logo
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
    title: "Data Science Intern",
    company_name: "Weelrn (Shanghai, remote)",
    icon: weelrn_logo,
    iconBg: "#FFFFFF",
    date: "February 2024 - June 2024",
    points: [
      "Led a team of six students to write Python scripts to run automated AI-generated learning cycles, containerized with Docker and deployed on the Cloud.",
      "Extracted data and performed analysis to quantify student interactions. ",
      "Organized weekly meetings and presentations. ",
    ]
  }
]