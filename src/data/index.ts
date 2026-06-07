import type { Project, Skill, SocialLink } from "@/types";

export const personalInfo = {
  name: "Your Name",
  title: "Full Stack Developer",
  tagline: "I build things for the web.",
  bio: "A passionate developer with X years of experience building modern web applications. I love creating elegant solutions to complex problems.",
  email: "you@example.com",
  location: "Your City, Country",
  availableForWork: true,
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/yourusername", icon: "Github" },
  { label: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "Linkedin" },
  { label: "Twitter", url: "https://twitter.com/yourusername", icon: "Twitter" },
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Project One",
    description: "A short one-liner about what this project does.",
    longDescription: "A longer description that appears in the modal/expanded view.",
    tags: ["React", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/yourusername/project-one",
    liveUrl: "https://project-one.vercel.app",
    imageUrl: "/images/project-one.png",
    featured: true,
  },
  {
    id: "project-2",
    title: "Project Two",
    description: "Another cool thing you built.",
    tags: ["Next.js", "Tailwind", "Postgres"],
    githubUrl: "https://github.com/yourusername/project-two",
    featured: true,
  },
  {
    id: "project-3",
    title: "Project Three",
    description: "Something else entirely.",
    tags: ["Python", "FastAPI", "Docker"],
    liveUrl: "https://project-three.com",
    featured: false,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: "expert" },
  { name: "TypeScript", category: "frontend", level: "expert" },
  { name: "Tailwind CSS", category: "frontend", level: "expert" },
  { name: "Next.js", category: "frontend", level: "advanced" },
  // Backend
  { name: "Node.js", category: "backend", level: "advanced" },
  { name: "PostgreSQL", category: "backend", level: "intermediate" },
  // Tools
  { name: "Git", category: "tools", level: "expert" },
  { name: "Docker", category: "tools", level: "intermediate" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
