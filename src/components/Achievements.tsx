import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { stagger, fadeUp } from '@/lib/reveal'
import { CodingStats } from '@/components/CodingStats'
import { achievements } from '@/data/content'
import { motion } from 'framer-motion'

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading
        eyebrow="// achievements"
        title="Milestones & metrics"
        description="Competitive programming rankings and earned credentials."
      />

      <div className="space-y-8">
        <CodingStats />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          className="grid gap-4 sm:grid-cols-3"
        >
          {achievements.map((a) => {
            const Icon = a.icon
            return (
              <motion.div
                key={a.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="card card-hover group p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-ink-600 bg-ink-800/70 text-accent-400 transition-colors group-hover:border-accent-400/40">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-white">{a.title}</h3>
                <ul className="mt-2 space-y-1">
                  {a.lines.map((line) => (
                    <li key={line} className="text-sm text-zinc-400">
                      {line}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </Section>
  )
}
