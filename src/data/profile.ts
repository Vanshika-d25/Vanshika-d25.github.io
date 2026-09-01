import type { SectionId } from '@/types'

export const profile = {
  name: 'Vanshika Dixit',
  role: 'AI Engineer • LLM Evaluation • Software Engineering',
  location: 'Lucknow, India',
  github: 'https://github.com/Vanshika-d25',
  linkedin: 'https://www.linkedin.com/in/vanshika-dixit-6695312b3/',
  // Configurable placeholder — replace with a real address when available.
  email: 'vanshika.dixit259@gmail.com',
  intro:
    'Computer Science Engineer focused on LLM evaluation, AI agent benchmarking, machine learning, backend engineering, and algorithmic problem solving. Experienced in building reliable evaluation systems, automated testing pipelines, AI-powered applications, and scalable backend services.',
} as const

export const navLinks: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

// Floating technical keywords rendered subtly in the hero background.
export const heroKeywords: { label: string; top: string; left: string; delay: string; size: string }[] = [
  { label: 'llm_eval()', top: '14%', left: '8%', delay: '0s', size: 'text-xs' },
  { label: '{ agents }', top: '22%', left: '82%', delay: '1.2s', size: 'text-sm' },
  { label: 'verifiers', top: '68%', left: '12%', delay: '0.6s', size: 'text-xs' },
  { label: 'benchmark', top: '78%', left: '76%', delay: '1.8s', size: 'text-sm' },
  { label: 'AST.parse', top: '40%', left: '90%', delay: '0.9s', size: 'text-xs' },
  { label: 'pytest', top: '54%', left: '4%', delay: '1.5s', size: 'text-xs' },
  { label: 'docker', top: '86%', left: '44%', delay: '2.1s', size: 'text-xs' },
  { label: 'RAG', top: '10%', left: '58%', delay: '0.3s', size: 'text-xs' },
]
