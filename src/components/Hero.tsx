import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react'
import { profile } from '../data/content'
import { Magnetic } from './ui'

const lines: { t: 'cmd' | 'out'; v: string }[] = [
  { t: 'cmd', v: 'whoami' },
  { t: 'out', v: 'Ritheesh Reddy Kura, Software Engineer' },
  { t: 'cmd', v: 'cat focus.txt' },
  { t: 'out', v: '→ Backend systems and REST APIs' },
  { t: 'out', v: '→ AI agents and RAG applications' },
  { t: 'out', v: '→ Full-stack products with React' },
  { t: 'cmd', v: 'stack --primary' },
  { t: 'out', v: 'Node.js  FastAPI  PostgreSQL  React  LangGraph' },
  { t: 'cmd', v: 'status' },
  { t: 'out', v: '● Open to opportunities' },
]

const socials = [
  { href: profile.github, label: 'GitHub', Icon: Github },
  { href: profile.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: `mailto:${profile.email}`, label: 'Email', Icon: Mail },
]

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid min-h-screen w-full max-w-6xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
      <div>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl">
          Hi, I'm {profile.name}.
          <span className="mt-2 block text-zinc-400">I build backends and AI products.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
          Software engineer with internship experience building B2B order and inventory APIs in Node.js, plus projects in multi-agent analytics, RAG and invoice automation.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap items-center gap-3">
          <Magnetic><a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110">View projects <ArrowDown size={15} /></a></Magnetic>
          <Magnetic><a href={profile.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"><Download size={15} /> View resume</a></Magnetic>
          <Magnetic><a href="#contact" className="inline-flex rounded-lg px-5 py-3 text-sm font-medium text-zinc-300 transition hover:text-white">Contact me</a></Magnetic>
        </motion.div>
        <div className="mt-8 flex gap-2">
          {socials.map(({ href, label, Icon }) => (
            <a key={label} href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
              className="rounded-lg border border-white/10 p-2.5 text-zinc-400 transition hover:border-accent/50 hover:text-white"><Icon size={18} /></a>
          ))}
        </div>
      </div>

      <div className="relative" aria-label="Terminal summary of profile">
        <div className="absolute -inset-6 -z-10 rounded-full bg-accent/10 blur-3xl" aria-hidden />
        <div className="overflow-hidden rounded-xl border border-white/10 bg-panel/90 shadow-2xl shadow-black/50 backdrop-blur">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" /><span className="h-2.5 w-2.5 rounded-full bg-white/15" /><span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-3 font-mono text-xs text-zinc-500">~/ritheesh</span>
          </div>
          <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
            {lines.map((l, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.28 }}
                className={l.t === 'cmd' ? 'pt-2 text-white' : l.v.startsWith('●') ? 'text-emerald-400' : 'text-zinc-400'}>
                {l.t === 'cmd' && <span className="mr-2 text-accent">$</span>}{l.v}
              </motion.div>
            ))}
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ delay: 3.4, repeat: Infinity, duration: 1.1 }} className="inline-block h-4 w-2 translate-y-0.5 bg-accent" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  )
}
