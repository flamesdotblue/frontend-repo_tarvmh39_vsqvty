import { useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Hero from './components/Hero';
import Story from './components/Story';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const header = document.querySelector('header');

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (id.length <= 1) return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      const headerOffset = header ? header.offsetHeight : 0;
      const rect = el.getBoundingClientRect();
      const offsetTop = window.pageYOffset + rect.top - headerOffset - 8;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0b0d12] text-white antialiased">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-400"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Top nav */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0b0d12]/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-[10px] font-extrabold">R</span>
            <span className="text-sm font-semibold tracking-widest text-white/90">RITIK</span>
          </a>
          <nav className="flex items-center gap-1 text-xs text-white/70">
            <a href="#story" className="rounded-full px-3 py-1 transition hover:text-white">Story</a>
            <a href="#projects" className="rounded-full px-3 py-1 transition hover:text-white">Projects</a>
            <a href="#contact" className="rounded-full px-3 py-1 transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main className="w-full">
        <Hero />
        <SectionDivider />
        <Story />
        <SectionDivider flip />
        <Projects />
        <SectionDivider />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-[#0b0d12] py-8 text-center text-xs text-white/50">
        <p>© {new Date().getFullYear()} Ritik — Motion-crafted web experiences.</p>
      </footer>
    </div>
  );
}

function SectionDivider({ flip = false }) {
  return (
    <div className="relative h-16 w-full overflow-hidden">
      <div
        className={`pointer-events-none absolute inset-0 ${flip ? '-skew-y-2' : 'skew-y-2'} bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-orange-500/10`}>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </div>
  );
}
