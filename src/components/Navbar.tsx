import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Command } from 'lucide-react'
import { nav } from '../data/content'
import { Magnetic } from './ui'

export default function Navbar({ onLogo, onPalette }: { onLogo: () => void; onPalette: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'border-b border-white/10 bg-ink/70 backdrop-blur-xl' : 'border-b border-transparent'}`}>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" onClick={onLogo} className="font-mono text-sm font-medium text-white">ritheesh<span className="text-accent">.dev</span></a>
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <li key={n.id}><a href={`#${n.id}`} className="rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-white">{n.label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={onPalette} aria-label="Open command palette" className="hidden items-center gap-1.5 rounded-md border border-white/10 px-2 py-1.5 font-mono text-xs text-zinc-400 transition hover:border-white/20 hover:text-white lg:flex">
            <Command size={12} /> K
          </button>
          <div className="hidden md:block"><Magnetic>
            <a href="#contact" className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200">Let's connect</a>
          </Magnetic></div>
          <button className="rounded-md p-2 text-zinc-300 md:hidden" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-5 md:hidden">
            {nav.map((n, i) => (
              <motion.li key={n.id} initial={{ x: -8, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.04 }}>
                <a href={`#${n.id}`} onClick={() => setOpen(false)} className="block border-b border-white/5 py-3 text-lg text-zinc-200">{n.label}</a>
              </motion.li>
            ))}
            <li className="py-4"><a href="#contact" onClick={() => setOpen(false)} className="block rounded-lg bg-white py-3 text-center font-medium text-black">Let's connect</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
