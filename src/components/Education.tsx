import { GraduationCap, School } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { stagger, fadeUp } from '@/lib/reveal'
import { education } from '@/data/content'
import { motion } from 'framer-motion'

export function Education() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="container-x">
        <SectionHeading eyebrow="// education" title="Education" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          className="grid gap-4 lg:grid-cols-2"
        >
          {education.map((edu, i) => {
            const Icon = i === 0 ? GraduationCap : School
            return (
              <motion.div
                key={edu.id}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="card card-hover group p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-ink-600 bg-ink-800/70 text-accent-400 transition-colors group-hover:border-accent-400/40">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold leading-snug text-white">
                      {edu.institution}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">{edu.degree}</p>
                    <span className="mt-3 inline-flex rounded-full border border-ink-600 bg-ink-800/60 px-3 py-1 font-mono text-xs text-zinc-400">
                      {edu.period}
                    </span>
                    <ul className="mt-4 space-y-1.5">
                      {edu.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-zinc-400">
                          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent-400/70" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
