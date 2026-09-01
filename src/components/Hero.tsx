import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Github, Linkedin } from 'lucide-react'
import { profile } from '@/data/profile'
import { highlightCode } from '@/lib/highlight'

type TLine =
  | { type: 'cmd'; text: string }
  | { type: 'blank' }
  | { type: 'code'; text: string }
  | { type: 'out'; text: string; ok?: boolean }

const terminalLines: TLine[] = [
  { type: 'cmd', text: 'cat profile.config.ts' },
  { type: 'blank' },
  { type: 'code', text: 'const engineer = {' },
  { type: 'code', text: '  name: "Vanshika Dixit",' },
  { type: 'code', text: '  role: "AI Engineer",' },
  { type: 'code', text: '  focus: ["LLM Eval", "AI Agents", "Benchmarking"],' },
  { type: 'code', text: '  current: "Turing · ComputerBench",' },
  { type: 'code', text: '  shipping: true,' },
  { type: 'code', text: '}' },
  { type: 'blank' },
  { type: 'out', text: '✓ verifiers passed · benchmark reproducible', ok: true },
]

function renderLine(line: TLine, index: number) {
  switch (line.type) {
    case 'cmd':
      return (
        <div className="text-zinc-300">
          <span className="text-accent-400">$</span> {line.text}
        </div>
      )
    case 'blank':
      return <div className="h-3" />
    case 'code':
      return <div className="text-zinc-300">{highlightCode(line.text, index)}</div>
    case 'out':
      return <div className="text-accent-300">{line.text}</div>
  }
}

export function Hero() {
  const reduce = useReducedMotion()

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

        {/* right: terminal */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="card overflow-hidden p-0 shadow-card"
          >
            <div className="flex items-center gap-2 border-b border-ink-700/70 bg-ink-850/80 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]/80" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]/80" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]/80" />
              <span className="ml-2 font-mono text-xs text-zinc-500">profile.config.ts</span>
            </div>
            <div className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed no-scrollbar">
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={reduce ? false : { opacity: 0 }}
                  animate={reduce ? undefined : { opacity: 1 }}
                  transition={{ duration: 0.35, delay: 0.4 + i * 0.08, ease: 'easeOut' }}
                >
                  {renderLine(line, i)}
                </motion.div>
              ))}
              <motion.div
                initial={reduce ? false : { opacity: 0 }}
                animate={reduce ? undefined : { opacity: 1 }}
                transition={{ delay: 0.4 + terminalLines.length * 0.08 }}
                className="mt-1 flex items-center gap-1 text-zinc-500"
              >
                <span className="text-accent-400">$</span>
                <span className="inline-block h-4 w-2 animate-blink bg-accent-400/80" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
