import type { LucideIcon } from 'lucide-react'

export type SectionId =
  | 'home'
  | 'about'
  | 'experience'
  | 'skills'
  | 'projects'
  | 'achievements'
  | 'contact'

export interface NavLink {
  id: SectionId
  label: string
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  summary?: string
  points: string[]
  tags: string[]
  url?: string
}

export interface SkillCategory {
  name: string
  icon: LucideIcon
  items: string[]
}

export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  highlights?: string[]
  tech: string[]
  github: string
  icon: LucideIcon
}

export interface Achievement {
  id: string
  icon: LucideIcon
  title: string
  lines: string[]
}

export interface Certification {
  id: string
  title: string
  issuer: string
}

export interface EducationItem {
  id: string
  institution: string
  degree: string
  period: string
  details: string[]
}

export interface RepoLink {
  name: string
  url: string
  description: string
}
