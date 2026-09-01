import { Reveal } from '@/lib/reveal'
import { cn } from '@/lib/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'mb-10 sm:mb-14',
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl',
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'eyebrow mb-3',
            align === 'center' ? 'justify-center' : 'justify-start',
          )}
        >
          <span className="h-px w-6 bg-accent-400/70" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-zinc-400">{description}</p>
      )}
    </Reveal>
  )
}
