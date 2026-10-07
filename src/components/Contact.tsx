import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/content'
import { Section, Reveal, Magnetic } from './ui'

export default function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-panel/70 p-8 sm:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" aria-hidden />
          <h2 className="relative max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">Let's build something meaningful.</h2>
          <p className="relative mt-4 max-w-xl text-zinc-400">I'm looking for software engineering roles where I can work on backend systems and AI-powered products. The fastest way to reach me is email.</p>
          <div className="relative mt-8 flex flex-wrap gap-3">
            <Magnetic><a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110"><Mail size={16} /> {profile.email}</a></Magnetic>
            <Magnetic><a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm text-white transition hover:bg-white/5"><Linkedin size={16} /> LinkedIn</a></Magnetic>
            <Magnetic><a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm text-white transition hover:bg-white/5"><Github size={16} /> GitHub</a></Magnetic>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
