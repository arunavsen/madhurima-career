export type Proficiency = "Professional" | "Upper Intermediate" | "Proficient";

export interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface LanguageItem {
  name: string;
  level: string;
  proficiency: Proficiency;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  detail: string;
  score: string;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  tagline: string;
  summary: string;
  contact: ContactItem[];
  skills: SkillGroup[];
  languages: LanguageItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  interests: string[];
  cvFileName: string;
}
