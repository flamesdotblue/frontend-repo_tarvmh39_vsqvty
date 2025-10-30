import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#0b0d12] text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for depth without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0d12]/30 via-[#0b0d12]/50 to-[#0b0d12]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-wider text-white/80 backdrop-blur"
        >
          Hi, I’m Ritik
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-4xl font-extrabold leading-tight sm:text-6xl md:text-7xl"
        >
          I turn ideas into
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent"> interactive experiences</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-5 max-w-2xl text-base text-white/70 md:text-lg"
        >
          A smooth, cinematic portfolio with motion-first design, crafted for
          elegance, performance, and delight.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0b0d12] shadow-lg shadow-cyan-500/10 transition hover:scale-[1.02] hover:bg-gradient-to-r hover:from-cyan-400 hover:to-fuchsia-500 hover:text-white"
          >
            View Projects
          </a>
          <a
            href="#story"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            My Story
          </a>
        </motion.div>
      </div>

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
