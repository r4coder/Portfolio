import { MapPin } from 'lucide-react'
import { experience as e } from '../data/content'
import { Section, SectionHeading, Reveal, Badge } from './ui'

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading title="Experience" />
      <Reveal>
        <article className="relative rounded-xl border border-white/10 bg-panel/60 p-6 sm:p-8">
          <span className="absolute -left-px top-8 h-10 w-px bg-accent" aria-hidden />
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold text-white">{e.role}</h3>
              <p className="text-zinc-300">{e.company}</p>
            </div>
            <div className="text-sm text-zinc-500 sm:text-right">
              <p className="font-mono">{e.period}</p>
              <p className="mt-1 flex items-center gap-1 sm:justify-end"><MapPin size={13} /> {e.location}</p>
            </div>
          </div>
          <ul className="mt-6 space-y-3 text-zinc-400">
            {e.points.map((p) => (
              <li key={p} className="flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />{p}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">{e.tech.map((t) => <Badge key={t} strong>{t}</Badge>)}</div>
        </article>
      </Reveal>
    </Section>
  )
}
