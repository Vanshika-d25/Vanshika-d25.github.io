import { Award } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { stagger, fadeUp } from '@/lib/reveal'
import { certifications } from '@/data/content'
import { motion } from 'framer-motion'

export function Certifications() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="container-x">
        <SectionHeading eyebrow="// certifications" title="Certifications" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {certifications.map((c) => (
            <motion.div
              key={c.id}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="card card-hover group flex items-start gap-4 p-5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-ink-600 bg-ink-800/70 text-accent-400 transition-colors group-hover:border-accent-400/40">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-semibold leading-snug text-white">{c.title}</h3>
                <p className="mt-1 font-mono text-xs text-zinc-500">{c.issuer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
