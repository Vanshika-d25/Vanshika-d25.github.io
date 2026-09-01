import { Trophy, Zap, Bot } from 'lucide-react'
import type { Achievement, Certification, EducationItem, RepoLink } from '@/types'

export const achievements: Achievement[] = [
  {
    id: 'codevita',
    icon: Trophy,
    title: 'TCS CodeVita Season 13',
    lines: ['Advanced to Round 3', 'All-India Rank: 2980'],
  },
  {
    id: 'problems',
    icon: Zap,
    title: '600+ Algorithmic Problems',
    lines: ['Solved across coding platforms'],
  },
  {
    id: 'salesforce',
    icon: Bot,
    title: 'Salesforce AI',
    lines: ['Agentblazer Champion Badge'],
  },
]

export const certifications: Certification[] = [
  { id: 'infosys', title: 'HTML, CSS, JavaScript, React, Bootstrap', issuer: 'Infosys Springboard' },
  { id: 'ibm', title: 'Python for Data Science, AI and Development', issuer: 'Coursera (IBM)' },
  { id: 'gfg', title: 'Mastering Generative AI and ChatGPT', issuer: 'GeeksforGeeks' },
  { id: 'salesforce', title: 'Agentblazer Champion Badge', issuer: 'Salesforce AI' },
]

export const education: EducationItem[] = [
  {
    id: 'btech',
    institution: 'Pranveer Singh Institute of Technology, Kanpur',
    degree: 'B.Tech — Computer Science and Engineering',
    period: '2022 – 2026',
    details: ['CGPA: 8.66'],
  },
  {
    id: 'school',
    institution: 'City Montessori School, Lucknow',
    degree: 'Class 12 — ISC, 2021  ·  Class 10 — ICSE, 2019',
    period: 'Class 12: 96.25%  ·  Class 10: 95.2%',
    details: ['ISC (Class 12): 96.25%', 'ICSE (Class 10): 95.2%'],
  },
]

export const repos: RepoLink[] = [
  {
    name: 'SkinMentor',
    url: 'https://github.com/Vanshika-d25/SkinMentor',
    description: 'AI-powered personalized skincare assistant with computer vision.',
  },
  {
    name: 'FinPulse-API',
    url: 'https://github.com/Vanshika-d25/FinPulse-API',
    description: 'Scalable financial data processing & analytics service.',
  },
  {
    name: 'ChatterBox',
    url: 'https://github.com/Vanshika-d25/ChatterBox',
    description: 'Real-time WebSocket-powered chat application.',
  },
  {
    name: 'Automated_Python_Docstring_Generator',
    url: 'https://github.com/Vanshika-d25/Automated_Python_Docstring_Generator',
    description: 'AST-based docstring coverage & PEP-257 compliance tool.',
  },
  {
    name: 'Flashcard-engine',
    url: 'https://github.com/Vanshika-d25/Flashcard-engine',
    description: 'Flashcard engine application.',
  },
  {
    name: 'RealTime-Edge-Detection-Viewer',
    url: 'https://github.com/Vanshika-d25/RealTime-Edge-Detection-Viewer',
    description: 'Real-time edge detection viewer.',
  },
  {
    name: 'hiring-agent',
    url: 'https://github.com/Vanshika-d25/hiring-agent',
    description: 'AI agent that evaluates and scores resumes.',
  },
  {
    name: 'aiml-notes',
    url: 'https://github.com/Vanshika-d25/aiml-notes',
    description: 'AI / ML study notes and reference material.',
  },
]
