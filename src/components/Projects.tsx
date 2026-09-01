import { ArrowUpRight, Github } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { stagger, fadeUp } from '@/lib/reveal'
import { Tag } from '@/components/ui/Tag'
import { projects } from '@/data/projects'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import type { Project } from '@/types'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className={cn(
        'card card-hover group relative flex flex-col overflow-hidden p-6',
        // Feature the first two cards on large screens
        index === 0 && 'lg:col-span-2 lg:p-7',
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-xl border border-ink-600 bg-ink-800/70 text-accent-400 transition-colors duration-300 group-hover:border-accent-400/40">
          <Icon className="h-6 w-6" />
        </span>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} on GitHub`}
          className="rounded-lg border border-ink-600 bg-ink-800/60 p-2 text-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-400/50 hover:text-accent-300"
        >
          <Github className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-5">
        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
        <p className="mt-1 font-mono text-xs text-accent-300/90">{project.tagline}</p>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>

      {project.highlights && (
        <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-zinc-500">
              <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-accent-400/70" />
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <div className="mt-6 flex-1" />
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500 transition-colors hover:text-accent-300"
      >
        View on GitHub
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </motion.article>
  )
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="// projects"
        title="Featured work"
        description="AI applications, evaluation tooling, and backend services — all on GitHub."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        className="grid gap-4 lg:grid-cols-3"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </motion.div>
    </Section>
  )
}
