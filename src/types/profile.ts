export interface NavItem {
  id: string;
  label: string;
}

export interface SpecRow {
  label: string;
  value: string | string[];
  /** Renders list values as emphasised tags (used for the main tech stack). */
  highlight?: boolean;
}

export interface Principle {
  title: string;
  text: string;
}

export interface SkillGroup {
  title: string;
  note?: string;
  items: string[];
}

export interface Metric {
  value: string;
  label: string;
}

export interface Role {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  project: { name: string; summary: string };
  metrics: Metric[];
  highlights: string[];
  stack: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  initials: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  phoneHref: string;
  resumeUrl: string;
  headline: string;
  intro: string;
  description: string;
  specSheet: SpecRow[];
  summary: string[];
  principles: Principle[];
  skills: SkillGroup[];
  experience: Role[];
  education: Education;
  socials: SocialLink[];
}
