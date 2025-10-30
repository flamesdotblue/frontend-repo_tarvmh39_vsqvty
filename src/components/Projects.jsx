import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Cinematic Product Page',
    tags: ['Framer Motion', 'Three.js'],
    color: 'from-cyan-500/30 to-fuchsia-500/30',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1200&auto=format&fit=crop',
    desc: 'An immersive product story with scroll-triggered 3D and motion-driven narrative.'
  },
  {
    id: 2,
    title: 'Interactive Portfolio',
    tags: ['React', 'Tailwind'],
    color: 'from-purple-500/30 to-indigo-500/30',
    img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop',
    desc: 'A fluid, neo-minimalist portfolio with glassmorphism and ambient gradients.'
  },
  {
    id: 3,
    title: 'Micro-interaction Library',
    tags: ['Design', 'Motion'],
    color: 'from-emerald-500/30 to-cyan-500/30',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
    desc: 'A set of reusable patterns for subtle, delightful UI movement.'
  }
];

function Modal({ open, onClose, project }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d12] p-0 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 w-full overflow-hidden">
              <img src={project.img} alt={project.title} className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[#0b0d12]" />
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-bold">{project.title}</h4>
              <p className="mt-2 text-white/70">{project.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={onClose}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="relative w-full bg-[#0b0d12] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold md:text-5xl"
        >
          What I’ve Built
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.button
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -4, rotateX: 2, rotateY: -2, scale: 1.01, transformPerspective: 800 }}
              onClick={() => setActive(p)}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left backdrop-blur outline-none`}
            >
              <div className="relative h-52 w-full overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${p.color}`} />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white/5" />
            </motion.button>
          ))}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} project={active || projects[0]} />

      <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
    </section>
  );
}
