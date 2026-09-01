import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/lib/reveal'
import { profile } from '@/data/profile'

export function Contact() {
  return (
    <Section id="contact">
      <Reveal className="mx-auto max-w-3xl text-center">
        <div className="card p-8 text-center sm:p-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-800/60 px-3 py-1.5 font-mono text-xs text-accent-300">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            open to connect
          </span>

          <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let&rsquo;s build something{' '}
            <span className="text-accent-gradient">intelligent.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-zinc-400">
            Interested in AI engineering, LLM evaluation, software engineering, or building
            something ambitious? Let&rsquo;s connect.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-primary">
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-outline">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            {/* Email is a configurable placeholder — replace profile.email with a real address. */}
            <a href={`mailto:${profile.email}`} className="btn-ghost">
              <Mail className="h-4 w-4" />
              Email
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <p className="mt-8 font-mono text-xs text-zinc-600">
            {profile.location} · response usually within a day
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
