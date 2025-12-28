// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web-development' | 'qa-automation';
  problem?: string;
  solution?: string;
  result?: string;
  tech_stack: string[];
  github_url?: string;
  live_url?: string;
  image_url?: string;
  featured: boolean;
  created_at: string;
}

// Certification types
export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: number;
  badge_url?: string;
  credential_url?: string;
  category: 'cloud' | 'programming' | 'cybersecurity' | 'data-science' | 'networking';
}

// Tech Stack types
export interface TechItem {
  id: string;
  name: string;
  icon?: string;
  category: 'frontend' | 'backend' | 'database' | 'qa-devops';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

// Contact form types
export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
}

// About/Profile types
export interface ProfileInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  education: Education[];
  experience: Experience[];
  skills: string[];
  social_links: SocialLink[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  year_start: number;
  year_end: number;
}

export interface Experience {
  company: string;
  role: string;
  description: string;
  year_start: number;
  year_end?: number;
  current: boolean;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'twitter';
  url: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}
