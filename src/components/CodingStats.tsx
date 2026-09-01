import { Hash, Trophy } from 'lucide-react'
import { CountUp } from '@/lib/CountUp'
import { Reveal } from '@/lib/reveal'
import { Tag } from '@/components/ui/Tag'

const tags = ['DSA', 'Algorithms', 'Problem Solving', 'Competitive Programming']

export function CodingStats() {
  return (
    <Reveal>
      <div className="card grid gap-8 p-7 sm:p-9 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent-400">
            <Hash className="h-3.5 w-3.5" />
            problems solved
          </div>
          <div className="mt-3 flex items-end gap-3">
            <span className="bg-gradient-to-br from-white to-zinc-400 bg-clip-text font-mono text-6xl font-bold leading-none text-transparent">
              <CountUp to={600} suffix="+" />
            </span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-zinc-400">
            Algorithmic problems solved across coding platforms.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>

        <div className="md:border-l md:border-ink-700/60 md:pl-8">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent-400">
            <Trophy className="h-3.5 w-3.5" />
            tcs codevita s13
          </div>
          <div className="mt-3 flex items-end gap-3">
            <span className="bg-gradient-to-br from-white to-zinc-400 bg-clip-text font-mono text-6xl font-bold leading-none text-transparent">
              <CountUp to={2980} />
            </span>
            <span className="mb-2 font-mono text-sm text-zinc-500">all-india rank</span>
          </div>
          <p className="mt-3 text-sm text-zinc-400">Advanced to Round 3 · Qualifier.</p>
        </div>
      </div>
    </Reveal>
  )
}
