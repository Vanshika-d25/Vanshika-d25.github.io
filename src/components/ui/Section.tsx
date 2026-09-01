import type { ReactNode } from 'react'
import type { SectionId } from '@/types'
import { cn } from '@/lib/cn'

interface SectionProps {
  id: SectionId
  children: ReactNode
  className?: string
  bare?: boolean
}

export function Section({ id, children, className, bare = false }: SectionProps) {
  return (
    <section id={id} className={cn('relative scroll-mt-24 py-24 sm:py-32', className)}>
      {bare ? children : <div className="container-x">{children}</div>}
    </section>
  )
}
