import { useRef, type ReactNode, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.45, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

export function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 })
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 })
  const move = (e: MouseEvent) => {
    const r = ref.current!.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * 0.18)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.28)
  }
  const reset = () => { x.set(0); y.set(0) }
  return <motion.div ref={ref} style={{ x, y }} onMouseMove={move} onMouseLeave={reset} className="inline-block">{children}</motion.div>
}

export function SectionHeading({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-zinc-400">{sub}</p>}
    </div>
  )
}

export const Badge = ({ children, strong = false }: { children: ReactNode; strong?: boolean }) => (
  <span className={`rounded-md border px-2 py-1 font-mono text-xs transition-colors ${strong ? 'border-accent/30 bg-accent/10 text-accent' : 'border-white/10 bg-white/[0.03] text-zinc-300'}`}>
    {children}
  </span>
)

export const Section = ({ id, children }: { id: string; children: ReactNode }) => (
  <section id={id} className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">{children}</section>
)
