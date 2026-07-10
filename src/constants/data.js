import { 
  Code2, 
  Layers, 
  Layout, 
  Globe, 
  Cpu, 
  Link2, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  BookOpen, 
  Award, 
  Settings, 
  Server, 
  Database,
  Search,
  Monitor
} from "lucide-react";

export const PERSONAL_INFO = {
  name: "Arun Chakrawarti",
  title: "Frontend Developer",
  tagline: "React.js | Next.js | Tailwind CSS | Redux Toolkit | REST APIs",
  bio: "A passionate Frontend Developer specializing in building premium, modern, and highly interactive user interfaces. I love turning complex designs into clean, responsive, and performance-optimized code with a focus on details and user experience.",
  resumeUrl: "#", // Add resume link here
  socials: [
    {
      name: "GitHub",
      url: "https://github.com", // Replace with real links if available
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "linkedin"
    },
    {
      name: "Email",
      url: "mailto:arun.chakrawarti.dev@gmail.com",
      icon: "mail"
    }
  ],
  stats: [
    { label: "Experience", value: 1, suffix: " Year" },
    { label: "Projects Completed", value: 10, suffix: "+" },
    { label: "UI Screens Designed", value: 500, suffix: "+" },
    { label: "Responsive Designs", value: 100, suffix: "%" }
  ]
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 80 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 }
    ]
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "Bootstrap", level: 85 }
    ]
  },
  {
    title: "State Management",
    skills: [
      { name: "Redux Toolkit", level: 85 },
      { name: "Context API", level: 90 }
    ]
  },
  {
    title: "Backend Communication",
    skills: [
      { name: "Axios", level: 90 },
      { name: "REST APIs", level: 88 }
    ]
  },
  {
    title: "Tools & Deployments",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 92 },
      { name: "Postman", level: 85 },
      { name: "Vercel", level: 90 }
    ]
  }
];

export const EXPERIENCE = [
  {
    role: "Frontend Developer",
    company: "Freelance / Projects Development",
    duration: "2025 - Present",
    description: "Building responsive, modern frontend applications and web solutions using React, Next.js, and Tailwind CSS. Implementing dynamic features, backend integrations, and bug fixes.",
    responsibilities: [
      "Responsive UI Development using Tailwind CSS and React components",
      "API Integration using Axios and fetch, managing state with Redux Toolkit",
      "Dashboard Development with complex charts, analytics, and tables",
      "Bug Fixing, code refactoring, and optimizing performance for fast page load",
      "Creating highly modular, reusable UI components for scalable codebases",
      "Ensuring mobile-first and fully responsive designs across all devices"
    ],
    logoPlaceholder: "FD"
  }
];

export const PROJECTS = [
  {
    id: "notebook-ias",
    title: "Notebook IAS Student Portal",
    subtitle: "Educational Student Portal",
    description: "A premium student portal built for civil service aspirants. It allows students to view online test series, download premium study materials, register for courses, and check daily current affairs. Includes real-time progress tracking, performance analysis charts, and a beautiful light/dark mode UI.",
    shortDescription: "A feature-rich learning portal for civil services preparation, with exam prep, mock tests, and notes.",
    image: "/images/project-ias.jpg",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Redux Toolkit", "REST APIs", "Framer Motion", "Recharts"],
    features: [
      "Interactive mock test dashboard with real-time timers",
      "Analytical reports on student performance with chart visualizations",
      "E-library containing categorized PDF notes and study materials",
      "Responsive design with smooth Awwwards-style page transitions",
      "Secure authentication and persistent state management via Redux Toolkit"
    ],
    liveUrl: "https://notebook-ias.example.com",
    githubUrl: "https://github.com/arunchakrawarti/notebook-ias-portal"
  },
  {
    id: "home-tuition",
    title: "Home Tuition Website",
    subtitle: "Tutor Booking Platform",
    description: "An intuitive web platform connecting local home tutors with students and parents. Students can filter tutors based on subject, location, budget, and grade. Features an interactive profile booking system, rating/review features, and a secure dashboard for tutors to manage schedules.",
    shortDescription: "A modern platform matching students with local, verified home tutors for customized learning.",
    image: "/images/project-tuition.jpg",
    technologies: ["React.js", "Tailwind CSS", "REST APIs", "Axios", "Framer Motion", "Context API"],
    features: [
      "Advanced filtering system for matching subject, location, and rating",
      "Tutor application and verification workflow",
      "Interactive booking schedule with automated email alerts",
      "User review & rating submission portal",
      "Clean, modern UI designed with glassmorphic cards and hover micro-animations"
    ],
    liveUrl: "https://home-tuition.example.com",
    githubUrl: "https://github.com/arunchakrawarti/home-tuition-finder"
  },
  {
    id: "astrology-website",
    title: "Astrology Website",
    subtitle: "Personal Horoscope & Consultation",
    description: "A highly immersive and aesthetically pleasing astrology consultation platform. Features live horoscopes, birth chart generation (Kundali), astrological matchmaking, and an interactive consulting interface to book calls with verified astrologers.",
    shortDescription: "A premium astrology website with horoscope matching, daily predictions, and direct chat consultations.",
    image: "/images/project-astrology.jpg",
    technologies: ["React.js", "Tailwind CSS", "Axios", "REST APIs", "Framer Motion", "CSS Gradients"],
    features: [
      "Daily, weekly, and monthly horoscope generator using public APIs",
      "Astrological chart mapping calculator (Kundali and Matchmaking API)",
      "Astrologer listing with availability scheduler",
      "Real-time contact details page and reviews",
      "Cosmic neon background effects and high-fidelity typography"
    ],
    liveUrl: "https://astrology.example.com",
    githubUrl: "https://github.com/arunchakrawarti/cosmic-astrology"
  },
  {
    id: "admin-dashboard",
    title: "Premium Admin Dashboard",
    subtitle: "Analytics & Management Hub",
    description: "A comprehensive SaaS-style admin dashboard featuring dark mode analytics, user management tables, revenue monitoring charts, dynamic calendars, and task checkers. Fully customizable and built for high-performance data processing.",
    shortDescription: "An analytical operations control panel with data grids, charts, and clean system state controls.",
    image: "/images/project-dashboard.jpg",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Redux Toolkit", "REST APIs", "Recharts", "Framer Motion"],
    features: [
      "Multi-axis line charts and bar charts for live sales and traffic reports",
      "Interactive user management table with search, pagination, and sorting",
      "Dynamic activity feeds and tasks status tracker",
      "Fully responsive sidebar layout and sticky navbar",
      "Quick theme toggles and custom glassmorphism panels"
    ],
    liveUrl: "https://dashboard.example.com",
    githubUrl: "https://github.com/arunchakrawarti/premium-admin-dashboard"
  }
];

export const SERVICES = [
  {
    title: "Frontend Development",
    description: "Creating highly interactive, beautiful, and pixel-perfect layouts using HTML, CSS, and modern JavaScript/TypeScript framework tools.",
    icon: "code"
  },
  {
    title: "React Development",
    description: "Building powerful Single Page Applications (SPAs) with state-of-the-art state managers, hook systems, and optimized render cycles.",
    icon: "layers"
  },
  {
    title: "Next.js Development",
    description: "Developing lightning-fast server-rendered websites (SSR/SSG), utilizing App Router patterns, file routing, and SEO optimization.",
    icon: "cpu"
  },
  {
    title: "Responsive Web Design",
    description: "Ensuring your website looks jaw-dropping on mobile, tablet, and ultra-wide desktops using flex/grid fluid layouts.",
    icon: "monitor"
  },
  {
    title: "Dashboard Development",
    description: "Designing data-rich corporate dashboards filled with neat diagrams, paginated grids, filters, and admin operations.",
    icon: "layout"
  },
  {
    title: "API Integration",
    description: "Seamlessly connecting frontend applications to RESTful and GraphQL backend endpoints via highly resilient Axios methods.",
    icon: "globe"
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    duration: "Graduated",
    description: "Focused on programming fundamentals, computer science principles, database systems, and software engineering. Built a solid software development foundation."
  },
  {
    degree: "Diploma",
    institution: "Board of Technical Education Uttar Pradesh (BTEUP)",
    duration: "Completed",
    description: "Gained core training in technical principles, engineering concepts, and practical laboratory practices, enhancing problem-solving and technical execution skills."
  },
  {
    degree: "10+2 (Intermediate)",
    institution: "UP Board (Uttar Pradesh Board)",
    duration: "Completed",
    description: "Completed secondary education with a focus on science and mathematics, building strong analytical and problem-solving skills."
  },
  {
    degree: "Relevant Frontend Certifications",
    institution: "Industry Recognised Platforms",
    duration: "Continuous Learning",
    description: "Completed comprehensive certifications in Advanced React, Next.js Framework, Responsive Web Design, and Tailwind CSS Layouts."
  }

];

export const CONTACT_INFO = {
  phone: "+91 7991574306", 
  email: "arunmojampur@gmail.com",
  location: "India",
  github: "https://github.com",
  linkedin: "https://linkedin.com"
};
