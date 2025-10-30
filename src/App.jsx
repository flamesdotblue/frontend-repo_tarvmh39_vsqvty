import Hero from './components/Hero';
import Story from './components/Story';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0d12] antialiased">
      {/* Top nav */}
      <header className="fixed left-0 top-0 z-40 w-full border-b border-white/10 bg-[#0b0d12]/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
          <a href="#home" className="text-sm font-bold tracking-wide">RITIK</a>
          <nav className="flex items-center gap-4 text-xs text-white/70">
            <a href="#story" className="rounded-full px-3 py-1 hover:text-white">Story</a>
            <a href="#projects" className="rounded-full px-3 py-1 hover:text-white">Projects</a>
            <a href="#contact" className="rounded-full px-3 py-1 hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main className="w-full">
        <Hero />
        <Story />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-[#0b0d12] py-8 text-center text-xs text-white/50">
        <p>© {new Date().getFullYear()} Ritik — Built with motion & care.</p>
      </footer>
    </div>
  );
}
