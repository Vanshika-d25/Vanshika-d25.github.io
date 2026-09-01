import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Github, Menu, X } from 'lucide-react'
import { navLinks, profile } from '@/data/profile'
import { useActiveSection } from '@/lib/useActiveSection'
import { cn } from '@/lib/cn'

const sectionIds = navLinks.map((l) => l.id)

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 16))

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-ink-700/70 bg-ink-900/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-ink-600 bg-ink-800 font-mono text-sm font-bold text-accent-400 transition-colors group-hover:border-accent-400/60">
            VD
          </span>
          <span className="hidden font-mono text-sm text-zinc-400 sm:block">
            vanshika.dixit
            <span className="text-accent-400">_</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                'relative rounded-md px-3 py-2 text-sm transition-colors',
                active === link.id ? 'text-white' : 'text-zinc-400 hover:text-zinc-200',
              )}
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-3 -bottom-px h-px bg-accent-400"
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="btn-ghost px-2.5"
          >
            <Github className="h-4 w-4" />
          </a>
          <button
            className="btn-ghost px-2.5 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="container-x border-t border-ink-700/70 bg-ink-900/95 py-3 backdrop-blur-xl">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'rounded-lg px-3 py-2.5 text-sm transition-colors',
                      active === link.id
                        ? 'bg-ink-800 text-accent-300'
                        : 'text-zinc-300 hover:bg-ink-800/60 hover:text-white',
                    )}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
