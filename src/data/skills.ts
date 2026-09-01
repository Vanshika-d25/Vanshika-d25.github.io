import {
  Code2,
  BrainCircuit,
  LineChart,
  Layers3,
  TerminalSquare,
  Database,
  Cpu,
} from 'lucide-react'
import type { ExperienceItem, SkillCategory } from '@/types'

export const experiences: ExperienceItem[] = [
  {
    id: 'turing',
    company: 'Turing',
    role: 'AI Engineer — LLM Evaluation & Benchmarking',
    period: 'Aug 2026 – Present',
    points: [
      'Develop and evaluate benchmark tasks for LLM agents across complex software engineering and computer-use workflows as part of ComputerBench.',
      'Build and validate Python applications, automated test suites, verifiers, and Docker-based environments for reliable and reproducible agent evaluation.',
      'Perform task refinement, edge-case analysis, and technical validation to improve benchmark robustness, fairness, and evaluation accuracy.',
    ],
    tags: ['Python', 'LLM Evaluation', 'AI Agents', 'Benchmarking', 'Docker', 'Automated Testing', 'Verifiers'],
    url: 'https://www.turing.com/',
  },
  {
    id: 'infosys',
    company: 'Infosys Springboard 6.0',
    role: 'AI Intern',
    period: 'Dec 2025 – Feb 2026',
    summary: 'Project: Automated Docstring Generator',
    points: [
      'Built an automated Python docstring analysis tool using Python and AST parsing to evaluate documentation coverage, maintainability, and code quality across multi-module codebases.',
      'Conducted PEP-257 compliance checks using pydocstyle.',
      'Enabled automated documentation enforcement through pre-commit hooks and GitHub Actions CI workflows.',
    ],
    tags: ['Python', 'AST', 'pydocstyle', 'GitHub Actions', 'CI/CD', 'Automation'],
  },
]

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming',
    icon: Code2,
    items: ['Python', 'C++', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'AI / LLM',
    icon: BrainCircuit,
    items: [
      'LLM Evaluation',
      'AI Agent Evaluation',
      'Benchmarking',
      'Prompt Engineering',
      'Model Evaluation',
      'RAG Fundamentals',
    ],
  },
  {
    name: 'Machine Learning',
    icon: LineChart,
    items: ['Scikit-learn', 'TensorFlow', 'Data Preprocessing', 'Feature Engineering', 'Model Evaluation'],
  },
  {
    name: 'Technologies & Frameworks',
    icon: Layers3,
    items: ['ReactJS', 'ExpressJS', 'NodeJS', 'C++ STL'],
  },
  {
    name: 'Developer & AI Tools',
    icon: TerminalSquare,
    items: ['Git', 'GitHub', 'Docker', 'OpenCode', 'Cursor', 'VS Code', 'Postman'],
  },
  {
    name: 'Databases',
    icon: Database,
    items: ['MySQL', 'MongoDB'],
  },
  {
    name: 'Core Computer Science',
    icon: Cpu,
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Operating Systems',
      'DBMS',
      'Computer Networks',
      'SDLC',
    ],
  },
]
