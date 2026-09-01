import { useEffect, useState } from 'react'
import type { SectionId } from '@/types'

export function useActiveSection(sectionIds: SectionId[]): SectionId {
  const [active, setActive] = useState<SectionId>(sectionIds[0] ?? 'home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id as SectionId)
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
