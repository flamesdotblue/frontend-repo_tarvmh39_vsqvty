import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2019',
    title: 'First Lines of Code',
    desc: 'Started exploring the web — built tiny experiments and UI clones.'
  },
  {
    year: '2021',
    title: 'Motion-First Mindset',
    desc: 'Fell in love with micro-interactions, learned Framer Motion and 3D basics.'
  },
  {
    year: '2023',
    title: 'Freelance & Product',
    desc: 'Shipped interactive experiences for brands and startup MVPs.'
  },
  {
    year: 'Today',
    title: 'Pushing the Craft',
    desc: 'Designing smooth, cinematic web experiences with performance at heart.'
  }
];

const skills = [
  { name: 'React', hue: 'from-cyan-400 to-blue-500' },
  { name: 'Framer Motion', hue: 'from-fuchsia-400 to-purple-500' },
  { name: 'Three.js', hue: 'from-emerald-400 to-cyan-500' },
  { name: 'Tailwind', hue: 'from-indigo-400 to-sky-500' },
  { name: 'GSAP', hue: 'from-amber-400 to-rose-500' },
];

export default function Story() {
  return (
    <section id="story" className="relative w-full bg-[#0b0d12] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold md:text-5xl"
        >
          My Story
        </motion.h2>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {/* Timeline */}
          <div className="space-y-6">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/5 to-transparent" />
                <div className="flex items-start justify-between">
                  <span className="text-sm font-mono text-white/60">{item.year}</span>
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
                </div>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Skills hover-reveal */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold"
            >
              Toolkit
            </motion.h3>
            <p className="mt-2 max-w-prose text-white/70">
              Minimal, bold, and interactive. I use modern tools to craft smooth, performant experiences.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {skills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 text-center text-sm font-medium backdrop-blur hover:shadow-[0_0_30px_rgba(255,255,255,0.06)]"
                >
                  <div className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r ${s.hue}`} />
                  <span className="relative z-10">{s.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
