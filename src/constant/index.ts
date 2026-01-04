import AiEmailImage from '../assets/AiEmailImage.png';
import CostDivideImage from '../assets/CostDivideImage.png';
import ForwardImage from '../assets/ForwardImage.png';
import MusicSunoImage from '../assets/MusicSunoImage.png';
import QuickMoneyImage from '../assets/QuickMoneyImage.png';
import StudyAreaImage from '../assets/StudyAreaImage.png';
import YouMeImage from '../assets/YouMeImage.png';

export const EXPERIENCES = [
  {
    role: "Full Stack Software Engineer",
    company: "Admix Enterprises",
    year: "Aug 2025 - Present",
    description: "Leading full-stack development of SaaS platforms using TypeScript, React, and Node.js. Implementing real-time functionality with WebRTC and Socket.IO, designing reusable APIs, and managing SEO setup and sprint planning.",
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Remote",
    year: "Sep 2024 - Present",
    description: "Delivering production-ready MERN stack web applications for multiple clients. Built ERP systems, implemented secure role-based authentication, and developed AI-based tools.",
  },
  {
    role: "Software Engineer Intern",
    company: "Avijo",
    year: "Dec 2024 - Jul 2025",
    description: "Contributed to healthcare platforms focusing on government API integrations (M1, M2, M3). Guided a team of developers and handled backend development with Node.js.",
  },
  {
    role: "React Developer Intern",
    company: "Celebal Technologies",
    year: "May 2025 - Jun 2025",
    description: "Gained expertise in React performance optimization (memoization, useCallback) and state management while building reusable UI components.",
  },
];

export const PROJECTS = [
  {
    title: "YouMe",
    description:
      "Real-time WebRTC video conferencing platform featuring P2P mesh signaling and secure room management.",
    text:
      "YouMe is a real-time video conferencing platform built using WebRTC and Socket.IO. It supports peer-to-peer mesh connections, secure room creation, and real-time signaling. The project focuses on low-latency communication and secure session handling for multiple users.",
    technologies: ["WebRTC", "Socket.IO", "React", "Node.js"],
    image: YouMeImage,
    link: "https://earnest-capybara-46c292.netlify.app/",
    github: "https://github.com/VinaySinghPatel",
  },
  {
    title: "MusicSuno",
    description:
      "Ad-free music streaming platform with smart caching mechanisms to reduce API usage and filter content.",
    text:
      "MusicSuno is a music streaming application built using the YouTube API. It implements smart caching to minimize API calls, filters non-music content, and provides an ad-free listening experience. Users can search, play, and manage music efficiently without repeated API hits.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "YouTube API"],
    image: MusicSunoImage,
    link: "https://rad-sprite-665569.netlify.app/",
    github: "https://github.com/VinaySinghPatel",
  },
  {
    title: "Forward",
    description:
      "Lightweight chat application supporting secure one-to-one and group messaging with real-time delivery.",
    text:
      "Forward is a real-time chat application that supports secure one-to-one and group conversations. It uses Socket.IO for instant message delivery and focuses on simplicity, performance, and reliable real-time communication.",
    technologies: ["Socket.IO", "React", "Node.js", "Express"],
    image: ForwardImage,
    link: "https://silver-tarsier-dd6ed9.netlify.app/",
    github: "https://github.com/VinaySinghPatel",
  },
  {
    title: "QuickMoney",
    description:
      "Peer-to-peer micro-loan platform enabling area-wise user discovery and direct communication.",
    text:
      "QuickMoney is a MERN-based peer-to-peer micro-loan platform where users can post small loan requests and connect with nearby lenders. It supports area-wise discovery, real-time chat, and aims to provide quick financial assistance without traditional intermediaries.",
    technologies: ["MERN Stack", "Geolocation", "Socket.IO"],
    image: QuickMoneyImage,
    link: "https://famous-marigold-70f8e4.netlify.app/",
    github: "https://github.com/VinaySinghPatel",
  },
  {
    title: "StudyArea",
    description:
      "Stack Overflow–like Q&A platform for college students.",
    text:
      "StudyArea is a full-stack Q&A platform designed for college students, similar to Stack Overflow. Students can post questions and receive answers from peers. The platform is actively used by 20+ students and helps in collaborative learning and doubt resolution.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    image: StudyAreaImage,
    link: "https://deft-semifreddo-592c5a.netlify.app/",
    github: "https://github.com/VinaySinghPatel",
  },
  {
    title: "Cost Divide",
    description:
      "Expense-splitting application for friends and groups.",
    text:
      "Cost Divide is an expense management app for friends living together or traveling in groups. Users can add expenses once, and the app automatically calculates individual shares. Notifications or emails are sent so no one needs to manually remind others.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: CostDivideImage,
    link: "https://calm-lily-b58758.netlify.app/",
    github: "https://github.com/VinaySinghPatel",
  },
  {
    title: "AI Email Generator",
    description:
      "AI-powered tool to generate and send professional emails.",
    text:
      "This AI-powered email generator allows users to simply enter a topic, after which the system automatically generates a professional email and sends it via Gmail to the specified recipient. It improves productivity by reducing manual email writing effort.",
    technologies: ["React", "Node.js", "AI API", "Nodemailer"],
    image: AiEmailImage,
    link: "https://lucky-pothos-54fe63.netlify.app/",
    github: "https://github.com/VinaySinghPatel",
  },
];


export const SKILLS = {
  frontend: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux Toolkit"
  ],
  backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Authentication"
  ],
  realtime: [
    "WebRTC",
    "Socket.IO"
  ],
  database: [
    "MongoDB",
    "Caching"
  ],
  languages: [
    "JavaScript",
    "Core Java",
    "C/C++",
  ],
  tools: [
    "Git (CLI)",
    "Version Control (Git)",
    "VS Code"
  ],
  practices: [
    "Agile/Scrum"
  ]
};


export const CONTACT_INFO = {
  email: "vinaypatel898944@gmail.com",
  phone: "+91 8770686758",
  linkedin: "https://www.linkedin.com/in/vinay-singh-patel-8979aa2b7/",
  github: "https://github.com/VinaySinghPatel",
  portfolio: "https://vinaysinghpatel.github.io/officialWeb/",
  location: "Jabalpur (MP), India",
};

export const HERO_CONTENT = {
  name: "Vinay Patel",
  role: "Full Stack Software Engineer",
  description: "Full Stack Software Engineer with 1.5+ years of experience building real-world web applications using the MERN stack. Expert in AI-assisted workflows, TypeScript, WebRTC, and scalable architecture.",
};

export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_4h8y5z9",
  TEMPLATE_ID: "template_n7doaol",
  PUBLIC_KEY: "Us-Unlj3JEBPl2TuI",
};
