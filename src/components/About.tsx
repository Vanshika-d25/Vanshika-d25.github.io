import { GraduationCap, MapPin, Briefcase } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal, fadeUp, stagger } from '@/lib/reveal'
import { motion } from 'framer-motion'
import { profile } from '@/data/profile'

const facts: { icon: LucideIcon; k: string; v: string }[] = [
  { icon: Briefcase, k: 'Role', v: 'AI Engineer @ Turing' },
  { icon: GraduationCap, k: 'Education', v: 'B.Tech CSE · 8.66 CGPA' },
  { icon: MapPin, k: 'Location', v: profile.location },
]

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="// about" title="Engineering reliable AI & evaluation systems" />

      <div className="max-w-3xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -12% 0px' }}
        >
          {[
            'I am a Computer Science and Engineering graduate with experience spanning AI engineering, LLM evaluation, machine learning, backend development, and competitive programming.',
            'Currently working as an AI Engineer at Turing, contributing to ComputerBench — where I design and evaluate benchmark tasks for LLM agents across complex software engineering and computer-use workflows.',
            'Previously an AI Intern at Infosys Springboard, where I built an automated Python docstring analysis and validation tool using AST parsing, pydocstyle, pre-commit hooks, and GitHub Actions.',
          ].map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="mb-5 text-[15px] leading-relaxed text-zinc-400"
            >
              {p}
            </motion.p>
          ))}
        </motion.div>
      </div>

      <Reveal delay={0.1} className="mt-8 grid gap-3 sm:grid-cols-3">
        {facts.map((f) => (
          <div key={f.k} className="card card-hover p-4">
            <div className="flex items-center gap-2 text-accent-400">
              <f.icon className="h-4 w-4" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                {f.k}
              </span>
            </div>
            <p className="mt-2 text-sm font-medium text-zinc-200">{f.v}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  )
}
