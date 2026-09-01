import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  to: number
  duration?: number
  suffix?: string
  className?: string
}

export function CountUp({ to, duration = 1.4, suffix = '', className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to, duration])

  return (
    <span ref={ref} className={className}>
      {val}
      {suffix}
    </span>
  )
}
