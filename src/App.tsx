import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CommandPalette from './components/CommandPalette'

export default function App() {
  const [palette, setPalette] = useState(false)
  const [egg, setEgg] = useState(false)
  const clicks = useRef(0)

  useEffect(() => {
    console.log('%c$ git commit -m "hire ritheesh"', 'color:#8ea2ff;font-family:monospace;font-size:13px')
  }, [])

  // Easter egg: click the logo five times
  const onLogo = () => {
    clicks.current += 1
    if (clicks.current >= 5) { clicks.current = 0; setEgg(true); setTimeout(() => setEgg(false), 3500) }
  }

  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-black">Skip to content</a>
      <ScrollProgress />
      <Navbar onLogo={onLogo} onPalette={() => setPalette(true)} />
      <main>
        <Hero /><About /><Experience /><Projects /><Skills /><Education /><Contact />
      </main>
      <Footer />
      <CommandPalette open={palette} setOpen={setPalette} />
      <AnimatePresence>
        {egg && (
          <motion.div role="status" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
            className="fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 rounded-lg border border-accent/40 bg-panel px-4 py-3 font-mono text-sm text-white shadow-xl">
            <span className="text-accent">$</span> git commit -m "hire ritheesh" <span className="text-emerald-400">[main ✓]</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
