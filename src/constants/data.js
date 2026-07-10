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
  resumeUrl: "/Arun_Chakrawarti_Resume.pdf", 
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/arunchakrawarti", 
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/arun-chakrawarti-b89b3531a",
      icon: "linkedin"
    },
    {
      name: "Email",
      url: "mailto:arunmojampur@gmail.com",
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
      // { name: "TypeScript", level: 80 },
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
    liveUrl: "https://notebook-ias-web.vercel.app/",
    githubUrl: "https://github.com/SgCode301/notebook-ias-student"
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
    liveUrl: "https://www.hometuitionacademy.com",
    githubUrl: "https://github.com/arunchakrawarti/home-tuition"
  },
  {
    id: "astrology-website",
    title: "Celestial Astrology Landing Page",
    subtitle: "Astrology Landing Page",
    description: "A highly immersive and visually stunning landing page for celestial astrology consultations. It features interactive zodiac sign explorer sections, detailed horoscope insights, consultant profiles, pricing plans, and beautiful glassmorphic UI elements designed for a premium user experience.",
    shortDescription: "A beautiful, highly interactive astrology consultation landing page with cosmic visuals, zodiac sign selectors, and consulting details.",
    image: "/images/project-astrology.jpg",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion", "CSS Gradients", "Responsive Design"],
    features: [
      "Stunning cosmic-themed dark design with glowing neon borders and celestial aesthetics",
      "Interactive Zodiac sign selector displaying character traits and compatibility insights",
      "Consultation services breakdown with integrated calendar booking call-to-actions",
      "Testimonials, FAQs, and pricing plans optimized for high conversion rates",
      "Smooth scroll animations and fluid responsive layout for both mobile and desktop screens"
    ],
    liveUrl: "https://celestrial-astrology-web.vercel.app/",
    githubUrl: "https://github.com/arunchakrawarti/celestrial-astrology-web"
  },
  {
    id: "Bill Banao",
    title: "Bill Banao - GST Invoicing & Billing Portal",
    subtitle: "GST Invoicing & Billing Platform",
    description: "A comprehensive SaaS-style GST billing and invoicing application designed to simplify financial transactions for businesses. It allows users to generate compliant GST invoices with automated tax calculations, manage customer ledgers, track dynamic sales graphs, and view outstanding payments in real time.",
    shortDescription: "A premium GST billing and invoicing software for businesses to manage billing, tax calculations, and revenue analytics.",
    image: "/images/project-dashboard.jpg",
    technologies: ["React.js", "Tailwind CSS", "Recharts", "Framer Motion"],
    features: [
      "Automated GST tax calculation (CGST, SGST, IGST) with customizable rates",
      "Interactive sales and revenue analysis graphs built with Recharts",
      "Customer ledger management with detailed transaction logs and search",
      "Print-ready and exportable invoice templates with instant PDF generation",
      "Fully responsive dashboard layout with customizable theme views"
    ],
    liveUrl: "https://billbanao.com/",
    githubUrl: "https://github.com/arunchakrawarti/GST-Program-UI"
  },
  {
    id: "ulive-admin-dashboard",
    title: "ULive - Admin Dashboard",
    subtitle: "Streamer Management Hub",
    description: "A premium, feature-rich admin dashboard designed for the ULive live streaming and order management platform. It enables administrators to manage user streams, track live sales analytics, monitor system health, check user registration logs, and oversee live chat configurations with high efficiency and real-time synchronization.",
    shortDescription: "A professional dashboard to manage live stream users, monitor transactions, and track operational analytics in real-time.",
    image: "/images/project-dashboard.jpg",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Redux Toolkit", "REST APIs", "Recharts", "Framer Motion"],
    features: [
      "Secure administrator authentication page with token verification",
      "Dynamic live stream and sales monitoring panels using Recharts charts",
      "Comprehensive user and content management database grids with advanced sorting",
      "Real-time notifications and system status checks for seamless operations",
      "Beautiful glassmorphic design with a responsive layout built using Tailwind CSS"
    ],
    liveUrl: "https://ulive-admin-dashboard.vercel.app/",
    githubUrl: "https://github.com/SgCode301/ulive-admin-dashboard"
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
  github: "https://github.com/arunchakrawarti",
  linkedin: "https://www.linkedin.com/in/arun-chakrawarti-b89b3531a"
};
