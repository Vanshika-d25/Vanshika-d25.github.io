import {
  ScanFace,
  Landmark,
  MessagesSquare,
  FileCode2,
  Bot,
} from 'lucide-react'
import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'skinmentor',
    name: 'SkinMentor',
    tagline: 'Personalized Skincare Assistant',
    description:
      'AI-powered skincare platform that analyzes facial images using computer vision and machine learning to provide personalized skincare insights.',
    highlights: [
      'AI-powered facial skin analysis',
      'Computer vision and image processing',
      'TensorFlow-based ML component',
      'MongoDB backend',
      'JWT authentication',
    ],
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Computer Vision', 'Image Processing', 'Machine Learning', 'MongoDB', 'JWT'],
    github: 'https://github.com/Vanshika-d25/SkinMentor',
    icon: ScanFace,
  },
  {
    id: 'finpulse',
    name: 'FinPulse API',
    tagline: 'Financial Data Processing & Analytics Service',
    description:
      'Scalable backend service for financial transaction management with secure APIs, authentication, role-based access control, and analytics.',
    highlights: [
      'RESTful APIs',
      'JWT authentication',
      'Role-Based Access Control',
      'Controller-Service-Model architecture',
      'MongoDB persistence',
      'Deployed backend',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'REST APIs'],
    github: 'https://github.com/Vanshika-d25/FinPulse-API',
    icon: Landmark,
  },
  {
    id: 'chatterbox',
    name: 'ChatterBox',
    tagline: 'Real-Time Chat Application',
    description:
      'React-based real-time messaging application supporting live user presence and WebSocket-powered communication.',
    highlights: ['Real-time messaging', 'WebSocket events', 'Live user presence', 'Responsive interface'],
    tech: ['ReactJS', 'Bootstrap', 'WebSockets'],
    github: 'https://github.com/Vanshika-d25/ChatterBox',
    icon: MessagesSquare,
  },
  {
    id: 'docstring',
    name: 'Automated Python Docstring Generator',
    tagline: 'Documentation Coverage & PEP-257 Compliance',
    description:
      'Automated Python documentation analysis tool that evaluates docstring coverage and PEP-257 compliance across multi-module codebases.',
    tech: ['Python', 'AST', 'pydocstyle', 'GitHub Actions', 'Pre-commit'],
    github: 'https://github.com/Vanshika-d25/Automated_Python_Docstring_Generator',
    icon: FileCode2,
  },
  {
    id: 'hiring-agent',
    name: 'Hiring Agent',
    tagline: 'AI Resume Evaluation',
    description: 'AI agent designed to evaluate and score resumes.',
    tech: ['Python', 'AI', 'Agents'],
    github: 'https://github.com/Vanshika-d25/hiring-agent',
    icon: Bot,
  },
]
