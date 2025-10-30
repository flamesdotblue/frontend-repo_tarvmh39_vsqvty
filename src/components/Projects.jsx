import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Kinetic Dashboard',
    desc: 'A motion-first analytics surface with scroll-synced charts and magnetic filters.',
  },
  {
    title: '3D Product Explorer',
    desc: 'Interactive Spline-driven viewer with variant states and guided narration.',
  },
  {
    title: 'Narrative Site',
    desc: 'Scene-based story website with parallax chapters and dynamic lighting.',
  },
  {
    title: 'Realtime Canvas',
    desc: 'WebSockets-powered canvas with multiplayer cursors and gestures.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-black py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Selected Projects</h2>
            <p className="mt-3 max-w-xl text-white/75">A sample of recent experiments and polished builds.</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 backdrop-blur-sm"
              style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
              whileHover={{ rotateX: -6, rotateY: 6, z: 10 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <div className="absolute -inset-px rounded-2xl opacity-0 transition-opacity group-hover:opacity-100" style={{
                background:
                  'radial-gradient(40rem 20rem at 0% 0%, rgba(59,130,246,0.15), transparent 60%), radial-gradient(30rem 16rem at 100% 100%, rgba(34,211,238,0.15), transparent 60%)'
              }} />
              <div className="relative">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <motion.div
                  className="mt-6 h-36 w-full rounded-xl bg-gradient-to-tr from-cyan-400/15 via-blue-500/10 to-indigo-500/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
