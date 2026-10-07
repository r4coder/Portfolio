import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { projects } from '../data/content'
import { Section, SectionHeading, Reveal, Badge } from './ui'

type P = (typeof projects)[number]

function Card({ p, big }: { p: P; big?: boolean }) {
  return (
    <motion.article whileHover={{ y: -4 }} transition={{ duration: 0.2 }}
      className={`group flex h-full flex-col rounded-2xl border border-white/10 bg-panel/70 p-6 transition-colors hover:border-accent/40 hover:shadow-[0_0_40px_-12px_rgba(142,162,255,.35)] sm:p-8 ${big ? 'lg:p-10' : ''}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className={`font-semibold text-white ${big ? 'text-3xl' : 'text-xl'}`}>{p.name}</h3>
          {'featured' in p && p.featured && <p className="mt-1 text-sm text-accent">Featured project</p>}
        </div>
        <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.name} on GitHub`}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm text-zinc-300 transition group-hover:border-accent/50 group-hover:text-white">
          <Github size={16} /> Code
        </a>
      </div>
      <p className="mt-4 text-zinc-300">{p.summary}</p>
      <p className="mt-3 text-sm text-zinc-500"><span className="text-zinc-400">Problem:</span> {p.problem}</p>
      <ul className={`mt-5 space-y-2 text-sm text-zinc-400 ${big ? 'lg:grid lg:grid-cols-1' : ''}`}>
        {p.features.map((f) => <li key={f} className="flex gap-3"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{f}</li>)}
      </ul>
      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {p.tech.map((t) => <span key={t} className="transition-transform duration-200 group-hover:-translate-y-0.5"><Badge>{t}</Badge></span>)}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [main, ...rest] = projects
  return (
    <Section id="projects">
      <SectionHeading title="Projects" sub="Three projects built end to end. Each links to its source on GitHub." />
      <div className="space-y-5">
        <Reveal><Card p={main} big /></Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          {rest.map((p) => <Reveal key={p.name}><Card p={p} /></Reveal>)}
        </div>
      </div>
    </Section>
  )
}
