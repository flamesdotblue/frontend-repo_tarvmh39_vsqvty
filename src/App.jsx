import { useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Hero from './components/Hero';
import Story from './components/Story';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const { scrollYProgress } = useScroll();

  // Smooth in-page anchor scrolling via delegation
  useEffect(() => {
    const handler = (e) => {
      const el = e.target.closest('a[href^="#"]');
      if (!el) return;
      const id = el.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 12;
      window.scrollTo({ top: y, behavior: 'smooth' });
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Simple header */}
      <header className="fixed inset-x-0 top-0 z-40 mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#hero" className="font-semibold tracking-tight">Flames Studio</a>
        <nav className="flex items-center gap-4 text-sm text-white/80">
          <a href="#story" className="hover:text-white">Story</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      <main className="space-y-0">
        <Hero />
        <Story />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-[#07090f] py-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Flames Studio — Built with React, Motion, and Spline
      </footer>
    </div>
  );
}
