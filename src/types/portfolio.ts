export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  contribution: string;
  challenge: string;
  architecture: {
    description: string;
    flow: string[];
  };
  repository?: string;
  liveUrl?: string;
  featured: boolean;
  image?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  status: 'Completed' | 'In Progress';
  date?: string;
  credentialUrl?: string;
}

export interface JourneyStep {
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}