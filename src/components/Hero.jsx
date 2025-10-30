import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#0b0d12] text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Ambient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(24,26,38,0.2)_0%,rgba(11,13,18,0.8)_60%,#0b0d12_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0d12]/40 to-[#0b0d12]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-fuchsia-500/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-wider text-white/80 backdrop-blur"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
          Tech · Interactive · Playful · Modern
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="text-4xl font-extrabold leading-tight sm:text-6xl md:text-7xl"
        >
          A story-driven portfolio for the
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-400 bg-clip-text text-transparent"> curious & creative</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-5 max-w-2xl text-base text-white/70 md:text-lg"
        >
          Motion-first design. Playful 3D interactions. Thoughtful details that feel alive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0b0d12] shadow-lg shadow-cyan-500/10 transition hover:scale-[1.03] hover:bg-gradient-to-r hover:from-cyan-400 hover:to-fuchsia-500 hover:text-white"
          >
            Explore Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Orbital callouts for uniqueness */}
      <FloatingTag className="left-10 top-24" text="Framer Motion" hue="from-fuchsia-400 to-purple-500" />
      <FloatingTag className="right-10 top-36" text="Spline 3D" hue="from-cyan-400 to-emerald-400" />
      <FloatingTag className="left-14 bottom-24" text="Tailwind" hue="from-indigo-400 to-sky-500" />

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.2 }}
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-center"
      >
        <div className="mx-auto h-10 w-[2px] overflow-hidden rounded-full bg-white/20">
          <motion.span
            initial={{ y: -20 }}
            animate={{ y: 40 }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="block h-3 w-[2px] rounded-full bg-white"
          />
        </div>
        <p className="mt-2 text-xs text-white/60">Scroll</p>
      </motion.div>
    </section>
  );
}

function FloatingTag({ className = '', text, hue }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className={`pointer-events-none absolute ${className}`}
    >
      <div className="relative">
        <div className={`absolute -inset-1 rounded-full bg-gradient-to-r ${hue} opacity-30 blur-xl`} />
        <span className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur">
          <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${hue}`} />
          {text}
        </span>
      </div>
    </motion.div>
  );
}
