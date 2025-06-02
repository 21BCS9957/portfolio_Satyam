import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Tekisky",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Satyam transformed our vision into a stunning digital reality. His attention to detail and creative approach made our website stand out in ways we never imagined possible.",
    name: "Sarah Chen",
    designation: "Product Director",
    company: "InnovateX",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Working with Satyam was a game-changer for our business. His technical expertise combined with his creative problem-solving skills helped us achieve results beyond our expectations.",
    name: "Michael Rodriguez",
    designation: "Founder & CEO",
    company: "TechFlow",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Satyam's innovative solutions and dedication to excellence helped us increase our conversion rate by 75%. His ability to blend aesthetics with functionality is truly remarkable.",
    name: "Emma Thompson",
    designation: "Marketing Director",
    company: "GrowthLabs",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "AI-Powered Portfolio",
    description:
      "A dynamic portfolio website built with React and Three.js, featuring AI-powered animations and interactive 3D elements. Experience a unique blend of creativity and technology.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "blue-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/your-username/ai-portfolio",
    live_link: "https://your-portfolio-url.com"
  },
  {
    name: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory management, secure payment integration, and an intuitive admin dashboard. Built with modern technologies for optimal performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "blue-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/your-username/ecommerce-platform",
    live_link: "https://your-ecommerce-url.com"
  },
  {
    name: "Task Management System",
    description:
      "An advanced task management system with real-time collaboration, progress tracking, and AI-powered task prioritization. Perfect for teams looking to boost productivity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/your-username/task-manager",
    live_link: "https://your-task-manager-url.com"
  },
];

export { services, technologies, experiences, testimonials, projects };
