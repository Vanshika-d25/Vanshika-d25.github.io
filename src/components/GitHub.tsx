import { ArrowUpRight, Github } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal, stagger, fadeUp } from '@/lib/reveal'
import { profile } from '@/data/profile'
import { repos } from '@/data/content'
import { motion } from 'framer-motion'

export function GitHub() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="// github"
            title="More on GitHub"
            description="Selected repositories — AI tooling, backend services, and experiments."
          />
          <Reveal>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-outline">
              <Github className="h-4 w-4" />
              @Vanshika-d25
            </a>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <div className="card overflow-hidden">
            <div className="flex items-center justify-between border-b border-ink-700/70 bg-ink-850/60 px-4 py-3">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56]/80" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]/80" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f]/80" />
                <span className="ml-2">repositories — {repos.length}</span>
              </div>
              <span className="font-mono text-[10px] text-zinc-600">main</span>
            </div>

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '0px 0px -8% 0px' }}
              className="divide-y divide-ink-700/60"
            >
              {repos.map((repo) => (
                <motion.li key={repo.name} variants={fadeUp}>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 px-4 py-4 transition-colors hover:bg-ink-800/60 sm:px-6"
                  >
                    <Github className="h-4 w-4 shrink-0 text-zinc-600 transition-colors group-hover:text-accent-300" />
                    <span className="shrink-0 font-mono text-sm text-zinc-300 transition-colors group-hover:text-accent-300">
                      {repo.name}
                    </span>
                    <span className="hidden min-w-0 flex-1 truncate text-sm text-zinc-500 sm:block">
                      {repo.description}
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-600 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-300" />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
