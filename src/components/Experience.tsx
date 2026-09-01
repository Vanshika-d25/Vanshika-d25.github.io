import { Briefcase, ChevronRight } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal, fadeUp, stagger } from '@/lib/reveal'
import { Tag } from '@/components/ui/Tag'
import { experiences } from '@/data/skills'
import { motion } from 'framer-motion'

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="// experience"
        title="Where I've shipped"
        description="Evaluation systems, automated tooling, and production backend work."
      />

      <div className="relative">
        {/* vertical line */}
        <div
          aria-hidden
          className="absolute left-[7px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-accent-400/50 via-ink-700 to-transparent sm:block"
        />

        <div className="space-y-10">
          {experiences.map((exp) => (
            <Reveal key={exp.id} className="relative pl-0 sm:pl-12">
              {/* dot */}
              <span
                aria-hidden
                className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border-2 border-accent-400 bg-ink-900 sm:block"
              >
                <span className="absolute inset-0.5 rounded-full bg-accent-400" />
              </span>

              <div className="card card-hover p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-accent-300">
                      <Briefcase className="h-4 w-4" />
                      <span className="font-mono text-xs uppercase tracking-widest">
                        {exp.company}
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-white">{exp.role}</h3>
                  </div>
                  <span className="rounded-full border border-ink-600 bg-ink-800/60 px-3 py-1 font-mono text-xs text-zinc-400">
                    {exp.period}
                  </span>
                </div>

                {exp.summary && (
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-md border border-accent-400/20 bg-accent-400/[0.06] px-3 py-1.5 font-mono text-xs text-accent-200">
                    <ChevronRight className="h-3.5 w-3.5" />
                    {exp.summary}
                  </div>
                )}

                <motion.ul
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '0px 0px -12% 0px' }}
                  className="mt-5 space-y-3"
                >
                  {exp.points.map((point, i) => (
                    <motion.li
                      key={i}
                      variants={fadeUp}
                      className="flex gap-3 text-[15px] leading-relaxed text-zinc-400"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400/70"
                      />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
