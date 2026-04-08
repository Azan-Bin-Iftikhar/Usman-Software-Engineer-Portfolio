export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tech: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  summary: string;
  achievements: string[];
}
