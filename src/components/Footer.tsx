import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:px-8">
        <p><span className="text-zinc-300">{profile.name}</span> – {profile.role}</p>
        <div className="flex gap-4">
          <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer" className="hover:text-white"><Github size={17} /></a>
          <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin size={17} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-white"><Mail size={17} /></a>
        </div>
        <p>© {new Date().getFullYear()} · Built with React</p>
      </div>
    </footer>
  )
}
