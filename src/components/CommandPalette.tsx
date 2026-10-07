import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { profile } from '../data/content'

type Item = { label: string; run: () => void }
const go = (id: string) => () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
const ext = (u: string) => () => window.open(u, '_blank', 'noopener')

export default function CommandPalette({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const [q, setQ] = useState('')
  const [idx, setIdx] = useState(0)
  const input = useRef<HTMLInputElement>(null)
  const items: Item[] = useMemo(() => [
    { label: 'Go to About', run: go('about') }, { label: 'Go to Experience', run: go('experience') },
    { label: 'Go to Projects', run: go('projects') }, { label: 'Go to Skills', run: go('skills') },
    { label: 'Go to Education', run: go('education') }, { label: 'Contact', run: go('contact') },
    { label: 'GitHub', run: ext(profile.github) }, { label: 'LinkedIn', run: ext(profile.linkedin) },
    { label: 'Send email', run: () => { window.location.href = `mailto:${profile.email}` } },
    { label: 'Download resume', run: () => { const a = document.createElement('a'); a.href = profile.resume; a.download = ''; a.click() } },
  ], [])
  const list = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()))

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setOpen(!open) }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h)
  }, [open, setOpen])
  useEffect(() => { if (open) { setQ(''); setIdx(0); setTimeout(() => input.current?.focus(), 30) } }, [open])

  const choose = (i?: Item) => { if (!i) return; setOpen(false); setTimeout(i.run, 120) }
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setIdx((idx + 1) % Math.max(list.length, 1)) }
    if (e.key === 'ArrowUp') { e.preventDefault(); setIdx((idx - 1 + list.length) % Math.max(list.length, 1)) }
    if (e.key === 'Enter') choose(list[idx])
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[70] flex items-start justify-center bg-black/60 px-4 pt-[18vh] backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
          <motion.div role="dialog" aria-modal="true" aria-label="Command palette" onClick={(e) => e.stopPropagation()} onKeyDown={onKey}
            initial={{ y: -10, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: -10, scale: 0.98 }} transition={{ duration: 0.15 }}
            className="w-full max-w-lg overflow-hidden rounded-xl border border-white/10 bg-panel shadow-2xl">
            <div className="flex items-center gap-3 border-b border-white/10 px-4">
              <Search size={16} className="text-zinc-500" />
              <input ref={input} value={q} onChange={(e) => { setQ(e.target.value); setIdx(0) }} placeholder="Type a command or search" aria-label="Search commands"
                className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-zinc-500" />
            </div>
            <ul className="max-h-72 overflow-auto p-2">
              {list.length === 0 && <li className="px-3 py-6 text-center text-sm text-zinc-500">No matching command</li>}
              {list.map((i, n) => (
                <li key={i.label}>
                  <button onClick={() => choose(i)} onMouseEnter={() => setIdx(n)}
                    className={`w-full rounded-lg px-3 py-2.5 text-left text-sm ${n === idx ? 'bg-accent/15 text-white' : 'text-zinc-400'}`}>{i.label}</button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
