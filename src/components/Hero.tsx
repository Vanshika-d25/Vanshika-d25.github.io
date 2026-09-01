import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin } from 'lucide-react'
import { profile } from '@/data/profile'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-12">
        {/* left: content */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-800/50 px-3 py-1.5 font-mono text-xs text-zinc-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            AI Engineer · LLM Evaluation & Benchmarking
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="mt-7 text-balance text-5xl font-extrabold tracking-tight sm:text-6xl xl:text-7xl"
          >
            <span className="text-gradient">Vanshika Dixit</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            className="mt-5 font-mono text-sm text-accent-300/90 sm:text-base"
          >
            AI Engineer · LLM Evaluation · Software Engineering
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-zinc-400"
          >
            Building reliable AI systems, evaluating intelligent agents, and solving complex
            engineering problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-outline">
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
