export const SKILLS = [
  {
    name: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Java", "C", "C++"],
  },
  {
    name: "Frontend Development",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Bootstrap",
      "AG Grid",
      "CSS",
      "HTML",
    ],
  },
  {
    name: "Backend Development",
    items: [
      "Node.js",
      "NestJS",
      "Spring Boot",
      "REST APIs",
      "WebSocket",
      "TypeORM",
      "JPA",
    ],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    name: "Cloud & DevOps",
    items: [
      "AWS (S3, CloudFront)",
      "Docker",
      "CI/CD Pipelines",
      "Vercel Deployment",
    ],
  },
  {
    name: "Testing & Quality Assurance",
    items: ["Jest", "Unit Testing", "Sentry Error Monitoring"],
  },
  {
    name: "Tools & Practices",
    items: [
      "Git",
      "GitHub Actions",
      "Agile Methodology",
      "Technical Documentation",
      "React Query",
      "Redux",
    ],
  },
];

export const EXPERIENCES = [
  {
    company: "Jellyfish Technologies",
    role: "Software Engineer",
    duration: "March 2023 - Present",
    highlights: [
      "Developed responsive UI components using React, Tailwind CSS, and Next.js",
      "Migrated state management from Context API to Redux, improving performance by 30%",
      "Implemented OTP verification system reducing unauthorized access by 25%",
      "Integrated AG Grid for visualizing 10,000+ row datasets",
      "Optimized API performance using Redis caching and query optimization",
      "Implemented secure refresh token authentication mechanism",
      "Integrated WebSocket for real-time emergency notifications",
    ],
  },
  {
    company: "Brainrock Consulting Services",
    role: "Full-Stack Developer",
    duration: "Feb 2022 - Feb 2023",
    highlights: [
      "Contributed to government project API development",
      "Implemented full-stack solutions using React.js and PHP",
      "Maintained and improved existing applications based on user feedback",
      "Collaborated with cross-functional teams to achieve project milestones",
      "Developed and maintained MySQL databases",
      "Created responsive UIs using Bootstrap and CSS",
    ],
  },
];

export const EDUCATION = [
  {
    institution: "Graphic Era Hill University",
    degree: "Bachelor of Technology in Computer Science",
    duration: "2020 - 2023 | Dehradun, Uttarakhand",
  },
  {
    institution: "Government Polytechnic Dehradun",
    degree: "Diploma in Information Technology",
    duration: "2017 - 2020 | Dehradun, Uttarakhand",
  },
];

export const ACHIEVEMENTS = [
  "Secured 91st global rank in CodeChef May Challenge 2021",
  "Selected among 3000+ students for Samsung Prism program",
];

export type Skill = {
  name: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  highlights: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  duration: string;
};

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  role: string;
  image?: string;
  demoUrl?: string;
  codeUrl?: string;
  features?: string[];
}

export const PROJECTS: Project[] = [
  {
    name: "FMI x KFM24/7",
    description:
      "A platform designed to streamline maintenance operations across multiple retail stores. Store managers raise requests, which are reviewed and approved by the brand’s central team. Approved requests are assigned to vendors based on location, who then dispatch technicians for on-site repairs. The system automates invoice generation, validation, and payment processing, ensuring transparency and efficiency. Built with React.js, React Native, Nest.js, and PostgreSQL.",
    techStack: ["React.js", "Nest.js", "MongoDB", "PostgreSQL"],
    role: "Full Stack Developer",
    demoUrl: "https://kfm247.com",
  },
  {
    name: "Survey App for Truck Inspections",
    description:
      "An app designed for technicians to conduct truck inspections in remote mining sites with full offline functionality. The app enables technicians to record tire pressure, condition, and other key metrics while visually mapping tire positions for easy identification. With an intuitive interface, users can inspect each tire efficiently and sync data once back online. Built with React Native, Realm for offline storage, and Redux Toolkit, the app ensures seamless data collection, improves inspection accuracy, and enhances fleet maintenance operations.",
    techStack: ["React Native", "TypeScript", "Realm"],
    role: "Frontend Developer",
    demoUrl: "#",
  },
  {
    name: "Builder Digital: 149Photos",
    description: "149 Photos is a real estate media management platform designed to streamline the creation, organization, and delivery of high-quality visual content for property listings. It enables seamless collaboration between builders, photographers, and buyers by centralizing media workflows—from assigning photographers to properties, to capturing and sharing HD photos, 3D visuals, and videos. The platform supports remote progress tracking for homeowners and enhances property marketing with verified media content. Built with Sails.js, Handlebars, and MySQL.",
    techStack: [
      "Sails.js",
      "Handlebars",
      "MySQL",
      "Redis",
    ],
    role: "Backend Developer",
    demoUrl: "https://149photos.com/"
  }
];
