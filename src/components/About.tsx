import { GraduationCap, Briefcase, Target, Code2 } from 'lucide-react'
import { Section, SectionHeading, Reveal } from './ui'

const facts = [
  { Icon: GraduationCap, k: 'Education', v: 'B.Tech CSE, Vellore Institute of Technology (2022–2026)' },
  { Icon: Briefcase, k: 'Experience', v: 'Software Engineer Intern, Synycs Enterprises (Mar–Aug 2026)' },
  { Icon: Target, k: 'Focus', v: 'Backend APIs, AI agents and RAG applications' },
  { Icon: Code2, k: 'Languages', v: 'C++, Python, JavaScript, TypeScript, SQL' },
]

export default function About() {
  return (
    <Section id="about">
      <SectionHeading title="About" />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="space-y-4 text-lg leading-relaxed text-zinc-400">
          <p>I'm a computer science graduate from VIT who likes building systems that do real work: APIs that keep inventory consistent, pipelines that process invoices, and agents that answer questions about data.</p>
          <p>At Synycs Enterprises I built the order and inventory module of a B2B e-commerce platform in Node.js and Express. Outside work, I build AI-powered products in Python and TypeScript, with an emphasis on grounded, verifiable answers: citations in AskYourDocs and a validation agent in Analytica.</p>
        </Reveal>
        <Reveal>
          <dl className="divide-y divide-white/10 rounded-xl border border-white/10 bg-panel/60">
            {facts.map(({ Icon, k, v }) => (
              <div key={k} className="flex gap-4 p-4">
                <Icon size={18} className="mt-0.5 shrink-0 text-accent" />
                <div><dt className="text-sm text-zinc-500">{k}</dt><dd className="text-zinc-200">{v}</dd></div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
