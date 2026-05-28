// import {
//   javascript,
//   typescript,
//   html,
//   css,
//   reactjs,
//   redux,
//   tailwind,
//   nodejs,
//   mongodb,
//   git,
//   figma,
//   docker,
//   threejs,
// } from "/assets/index.js";

export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
    title: 'CHATIFY - Microservices-Based Distributed Chat',
    desc: 'A highly scalable real-time chat system engineered with independent User, Chat, and Mail services. Designed to handle asynchronous processing and secure verification seamlessly.',
    subdesc:
      'Optimized event-driven workflows using RabbitMQ and Redis OTP authentication. Containerized with Docker and deployed on AWS EC2, enabling low-latency messaging via Socket.io in a production-ready environment.',
    href: 'http://51.20.73.105:3000',
    texture: '/textures/project/chatify.png',
    logo: '/assets/chatify-logo.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
      {
        id: 4,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
    ],
  },
    

  {
    title: 'FITLY AI - Spring Boot Microservices Platform',
    desc: 'An AI-powered fitness platform featuring a robust microservices architecture. It utilizes API Gateway, Eureka Service Discovery, and a centralized Config Server for scalable routing and data management.',
    subdesc:
      'Built with Spring Boot and React, featuring secure identity management via Keycloak. Deployed on AWS EC2 utilizing Docker and Caddy, with RabbitMQ handling event streaming across PostgreSQL and MongoDB databases.',
    href: 'https://fitly-ai.duckdns.org/dashboard/',
    texture: '/textures/project/fitly.png', // Update with actual texture path if available
    logo: '/textures/project/fitly_logo.png', // Update with actual logo path if available
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Spring Boot',
        path: '/assets/Spring_boot.png', // Add placeholder or actual icon path
      },
      {
        id: 3,
        name: 'Docker',
        path: '/assets/docker.png', // Add placeholder or actual icon path
      },
      {
        id: 4,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
    ],
  },

    {
      title: 'Socially - a social media web app ',
desc: "A comprehensive social media platform where users can create posts, share images, follow profiles, and engage through likes and comments with real-time notifications.",
      subdesc:
      "Engineered to increase session duration by 25% and reduce page load times by 25%. Integrated Clerk-based authentication, successfully reducing login failures by 40% and boosting user retention by 10%.",
      href: 'https://socially-one-nu.vercel.app/',
      texture: '/textures/project/socially-project.png',
      logo: '/assets/socially-logo.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: '/assets/nextjs-icon.webp',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'prisma',
          path: '/assets/prisma.webp',
        },
         {
          id: 4,
          name: 'NeonDb',
          path: '/assets/neon.webp',
        },


      ],
    },
{
    title: 'Team Task Manager - MERN Stack Assessment',
    desc: 'A full-stack task management solution built as a comprehensive company assessment for ethara.ai, featuring a mobile-responsive dashboard and isolated team environments.',
    subdesc:
      'Developed under strict deadlines using React.js, Node.js, Express, and MongoDB. Implemented secure user authentication and role-based access control, alongside comprehensive deployment configurations and logging.',
    href: 'https://project-managemnet-mern.onrender.com/', // Update with actual live link or repo if available
    texture: '/textures/project/task.png', // Add actual asset
    logo: '/textures/project/task_logo.png', // Add actual asset
    logoStyle: {
      backgroundColor: '#1E1B4B',
      border: '0.2px solid #312E81',
      boxShadow: '0px 0px 60px 0px #818CF84D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
      {
        id: 4,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
    ],
  },
  
   {
    title: 'Zentry - Animated Gaming Website Clone',
    desc: 'A dynamic frontend clone of the award-winning Zentry website. Built to master the integration of complex scrolling animations and modern UI transitions.',
    subdesc:
      'Developed utilizing React.js and GSAP to orchestrate timeline-based animations, delivering a highly interactive and visually engaging user experience.',
    href: 'https://zentrygaming.vercel.app/',
    texture: '/textures/project/project5.png',
    logo: '/assets/zentry-logo.webp',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        id: 4,
        name: 'GSAP Animation',
        path: '/assets/gsap.png',
      },
    ],
  },
   {
    title: 'Apple iPhone 15 Pro - 3D Showcase',
    desc: 'An immersive clone of the official Apple product website designed to showcase the iPhone 15 Pro using advanced 3D rendering in the browser.',
    subdesc:
      'Engineered with React.js, GSAP for smooth scroll-triggered animations, and Three.js for rendering and manipulating high-fidelity 3D models directly in the DOM.',
    href: 'https://apple-clone3d.vercel.app/',
    texture: '/textures/project/project4.png',
    logo: '/assets/apple-logo.webp',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Three.js',
        path: '/assets/threejs.svg',
      },
      {
        id: 4,
        name: 'GSAP Animation',
        path: '/assets/gsap.png',
      },
    ],
  },
  {
    title: 'SatyaShield - Multilingual AI Fake News Detection',
    desc: 'An AI-powered verification platform utilizing the Llama 70B model to analyze and detect multilingual fake news.',
    subdesc:
      'Architected a Retrieval-Augmented Generation (RAG) pipeline to cross-reference queries against verified data sources, significantly increasing response accuracy. Designed comprehensive ER diagrams and technical documentation to structure the backend data flow.',
    href: 'https://github.com/Northernblade07/Fake_News_Detection', // Update with actual live link or repo if available
    texture: '/textures/project/satyashield.png', // Add actual asset
    logo: '/textures/project/satya_logo.png', // Add actual asset
    logoStyle: {
      backgroundColor: '#0F172A',
      border: '0.2px solid #1E293B',
      boxShadow: '0px 0px 60px 0px #38BDF84D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Python',
        path: '/assets/python.png', // Ensure this asset exists in your folder
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
    ],
  },
    // {
    //   title: 'chatify - chat and video call platform',
    //   desc: 
    //   'this is a platform made using mern stack and stream where a user can register to make new friends and have a conversation with them that can be through chatting or throug a video call',
    //   subdesc:
    //   ''
    //   ,
    //   href: 'https://chatify-33jr.onrender.com',
    //   texture: '/textures/project/chatify.png',
    //   logo: '/assets/chatify-logo.png',
    //   logoStyle: {
    //     backgroundColor: '#2A1816',
    //     border: '0.2px solid #36201D',
    //     boxShadow: '0px 0px 60px 0px #AA3C304D',
    //   },
    //   spotlight: '/assets/spotlight1.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'javaScript',
    //       path: '/assets/javascript.png',
    //     },{
    //       id: 3,
    //       name: 'mongodb',
    //       path: '/assets/mongodb.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'express js ',
    //       path: '/assets/nodejs.png',
    //     },{
          
    //     }
    //     // {
    //     //   id: 4,
    //     //   name: 'Framer Motion',
    //     //   path: '/assets/gsap.png',
    //     // },
    //   ],
    // },
   


    // {
    //   title: 'Imaginify - AI Photo Manipulation App',
    //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //   subdesc:
    //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //   texture: '/textures/project/project5.mp4',
    //   logo: '/assets/project-logo5.png',
    //   logoStyle: {
    //     backgroundColor: '#1C1A43',
    //     border: '0.2px solid #252262',
    //     boxShadow: '0px 0px 60px 0px #635BFF4D',
    //   },
    //   spotlight: '/assets/spotlight5.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-18, -5.5, -5],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];

export const tech = [
  {
    name: "HTML 5",
    icon: '/assets/html.png',
  },
  {
    name: "CSS 3",
    icon: '/assets/css.png',
  },
  {
    name: "JavaScript",
    icon: '/assets/javascript.png',
  },
  {
    name: "TypeScript",
    icon: '/assets/typescript.png',
  },
  {
    name: "React JS",
    icon: '/assets/reactjs.png',
  },
  {
    name: "Gsap",
    icon: '/assets/gsap.png',
  },
  {
    name: "Tailwind CSS",
    icon:'/assets/tailwind.png',
  },
  {
    name: "Node JS",
    icon: '/assets/nodejs.png',
  },
  {
    name: "MongoDB",
    icon: '/assets/mongodb.png',
  },
  {
    name: "Three JS",
    icon: '/assets/threejs.svg',
  },
  {
    name: "git",
    icon: '/assets/git.png',
  },
  {
    name: "Spring boot",
    icon: '/assets/springboot.png',
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
]