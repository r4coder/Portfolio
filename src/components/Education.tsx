import { GraduationCap } from 'lucide-react'
import { education as e } from '../data/content'
import { Section, SectionHeading, Reveal } from './ui'

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading title="Education" />
      <Reveal>
        <div className="flex gap-4 rounded-xl border border-white/10 bg-panel/60 p-6">
          <GraduationCap className="mt-1 shrink-0 text-accent" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">{e.degree}</h3>
            <p className="text-zinc-300">{e.school}, {e.place}</p>
            <p className="mt-1 font-mono text-sm text-zinc-500">{e.period}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
