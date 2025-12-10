export interface SocialLink {
  platform:
    | "github"
    | "linkedin"
    | "twitter"
    | "website"
    | "email"
    | "dribbble"
    | "behance"
    | "instagram"
    | "facebook"
    | "youtube"
    | "other";
  label?: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tech: string[];
  highlights?: string[];
  demoUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  tagline: string;
  location?: string;
  about: string;
  resumeUrl?: string;
  avatarUrl?: string;
  socials: SocialLink[];
  skills: string[];
  projects: Project[];
  email?: string;
  phone?: string;
}
