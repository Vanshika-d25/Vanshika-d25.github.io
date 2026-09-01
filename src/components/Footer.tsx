import { Github, Linkedin, ArrowUp } from 'lucide-react'
import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer className="relative border-t border-ink-700/70 bg-ink-950/40">
      <div className="container-x py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <a href="#home" className="font-mono text-sm font-bold text-white">
              Vanshika Dixit
            </a>
            <p className="mt-1 font-mono text-xs text-zinc-500">
              AI Engineer · Builder · Problem Solver
            </p>
            <p className="mt-3 font-mono text-[11px] text-zinc-600">
              Vanshika Dixit © 2026
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-lg border border-ink-700 bg-ink-800/60 text-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-400/40 hover:text-accent-300"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-lg border border-ink-700 bg-ink-800/60 text-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-400/40 hover:text-accent-300"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="grid h-10 w-10 place-items-center rounded-lg border border-ink-700 bg-ink-800/60 text-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-400/40 hover:text-accent-300"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
