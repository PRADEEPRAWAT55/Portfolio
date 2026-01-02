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

export type Project = {
  name: string;
  description: string;
  techStack: string[];
  role: string;
  image?: string;
  demoUrl?: string;
  codeUrl?: string;
  features?: string[];
};

export const SKILLS: Skill[] = [
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
      "Framer Motion",
    ],
  },
  {
    name: "Backend Development",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "Spring Boot",
      "REST APIs",
      "WebSocket",
      "TypeORM",
      "Prisma",
      "JPA",
      "GraphQL",
    ],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL"],
  },
  {
    name: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3, RDS, CloudFront, CloudWatch, CodeDeploy)",
      "Docker",
      "CI/CD Pipelines",
      "GitHub Actions",
      "Kubernetes",
      "Vercel Deployment",
    ],
  },
  {
    name: "Testing & Quality Assurance",
    items: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "Unit Testing",
      "Sentry Error Monitoring",
    ],
  },
  {
    name: "Tools & Practices",
    items: [
      "Git",
      "Agile Methodology",
      "Technical Documentation",
      "React Query",
      "Redux",
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Jellyfish Technologies",
    role: "Software Engineer",
    duration: "March 2023 - Present",
    highlights: [
      "Developed responsive UI components using React, Tailwind CSS, Next.js, and Bootstrap.",
      "Migrated state management from Context API to Redux and integrated React Query for efficient caching, reducing redundant calls.",
      "Implemented OTP verification (‑25% unauthorized access) and secure refresh token flows.",
      "Integrated AG Grid for 10,000+ row datasets and optimized API performance with Redis caching and query tuning.",
      "Built and optimized NestJS services with PostgreSQL + TypeORM; added WebSocket for real-time emergency notifications.",
      "Deployed and monitored on AWS (EC2, S3, RDS, CloudFront, CloudWatch, CodeDeploy) with CI/CD pipelines.",
      "Improved UX via code splitting, lazy loading, memoization, React Virtualized, and Sentry monitoring.",
    ],
  },
  {
    company: "Brainrock Consulting Services",
    role: "Web Developer Intern",
    duration: "July 2022 - February 2023",
    highlights: [
      "Built APIs and full-stack features for government and client projects using React.js, PHP, and MySQL.",
      "Developed responsive UIs with Bootstrap and CSS; maintained deployed apps based on user feedback.",
      "Collaborated with cross-functional teams to deliver milestones and stable releases.",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
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

export const PROJECTS: Project[] = [
  {
    name: "KFM24/7 (FMI)",
    description:
      "Fleet management platform with web and mobile apps for operations, tracking, and reporting.",
    techStack: ["React.js", "React Native", "Nest.js", "PostgreSQL", "Redis", "Docker"],
    role: "Full Stack Developer",
    demoUrl: "https://kfm247.com",
  },
  {
    name: "Survey App for Truck Inspections",
    description:
      "Offline-first React Native app for technicians to record tire metrics, map positions, and sync when online; improves inspection accuracy and fleet maintenance.",
    techStack: ["React Native", "TypeScript", "Realm", "AsyncStorage", "Redux"],
    role: "Frontend Developer",
  },
  {
    name: "Builder Digital: 149Photos",
    description:
      "Real estate media management platform for assigning photographers, capturing HD photos/3D/video, and sharing with builders and buyers; supports remote progress tracking.",
    techStack: ["Node.js", "React.js", "MongoDB", "Redis", "Docker", "AG Grid"],
    role: "Full Stack Developer",
    demoUrl: "https://149photos.com/",
  },
  {
    name: "Personal Portfolio (This Site)",
    description:
      "Responsive Next.js portfolio with slate/blue theme, animated sections, and structured content for skills, projects, and achievements.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    role: "Frontend Developer",
    demoUrl: "https://pradeep-portfolio.example.com",
    codeUrl: "https://github.com/PRADEEPRAWAT55/Portfolio",
  },
];

export const ACHIEVEMENTS = [
  "Secured 91st global rank in CodeChef May Challenge 2021.",
  "Selected out of 3000+ students for Samsung Prism (Preparing and Inspiring Student Minds).",
];
