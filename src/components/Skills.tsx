import { Layers } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal, stagger, fadeUp } from '@/lib/reveal'
import { Tag } from '@/components/ui/Tag'
import { skillCategories } from '@/data/skills'
import { motion } from 'framer-motion'

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="// skills"
        title="Tools I reach for"
        description="A focused stack across AI/LLM evaluation, ML, backend, and core CS."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillCategories.map((cat) => (
          <motion.div
            key={cat.name}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="card card-hover group p-5"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-ink-600 bg-ink-800/70 text-accent-400 transition-colors group-hover:border-accent-400/40 group-hover:bg-ink-750">
                <cat.icon className="h-5 w-5" />
              </span>
              <h3 className="text-sm font-semibold text-white">{cat.name}</h3>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Reveal delay={0.1} className="mt-8">
        <div className="flex items-center justify-center gap-2 font-mono text-xs text-zinc-600">
          <Layers className="h-3.5 w-3.5" />
          {skillCategories.length} categories · always learning more
        </div>
      </Reveal>
    </Section>
  )
}
