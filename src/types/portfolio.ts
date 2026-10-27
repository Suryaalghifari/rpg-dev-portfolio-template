export type SkillRank = "Harian" | "Produksi" | "Pernah coba";

export interface Skill {
  id: string;
  name: string;
  rank: SkillRank;
  icon?: string;
}

export interface Shot {
  src: string;
  alt: string;
  caption?: string;
  w: number;
  h: number;
}

export type ProjectStatus = "AKTIF" | "SELESAI";

export interface Project {
  slug: string;
  title: string;
  status: ProjectStatus;
  featured: boolean;
  problem: string;
  role: string;
  result: string;
  skills: string[];
  shots: Shot[];
  year: number;
}

export interface AboutDialogOption {
  id: string;
  question: string;
  answer: string;
}

export interface AboutStat {
  label: string;
  value: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
}

export interface AboutData {
  name: string;
  subtitle: string;
  avatar: string;
  options: AboutDialogOption[];
  stats: AboutStat[];
  experience?: ExperienceItem[];
}
