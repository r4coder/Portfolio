import { skills } from '../data/content'
import { Section, SectionHeading, Reveal, Badge } from './ui'

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading title="Skills" />
      <Reveal>
        <div className="divide-y divide-white/10 rounded-xl border border-white/10 bg-panel/60">
          {skills.map((s) => (
            <div key={s.group} className="grid gap-3 p-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <h3 className="font-medium text-white">{s.group}</h3>
              <div className="flex flex-wrap gap-2">{s.items.map((i) => <Badge key={i}>{i}</Badge>)}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
