import { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Richer motion: eased progress + depth parallax for layers
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.6 });
  const titleY = useTransform(p, [0, 1], [0, -120]);
  const titleScale = useTransform(p, [0, 1], [1, 0.9]);
  const tagY = useTransform(p, [0, 1], [0, -60]);
  const tagOpacity = useTransform(p, [0, 0.35, 1], [1, 1, 0]);

  // Pointer reactive magnetic effect for CTA
  const [hovered, setHovered] = useState(false);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EaQv24wazlheTQrd/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Ambient gradients (non-blocking) */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-400/20 via-blue-500/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[40rem] w-[40rem] translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-tr from-indigo-500/20 via-blue-400/10 to-transparent blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-24 text-center">
        <motion.h1
          style={{ y: titleY, scale: titleScale }}
          className="font-extrabold tracking-tight [text-wrap:balance] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Crafting Futuristic Interfaces
          <span className="block bg-gradient-to-r from-sky-300 via-cyan-200 to-indigo-200 bg-clip-text text-transparent">
            with Motion, 3D, and Precision
          </span>
        </motion.h1>

        <motion.p
          style={{ y: tagY, opacity: tagOpacity }}
          className="mt-6 max-w-2xl text-base/7 text-white/80 sm:text-lg/8"
        >
          A story-driven portfolio exploring modern interaction, smooth scroll choreography, and a living 3D canvas.
        </motion.p>

        <motion.div
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          className="mt-10 flex items-center gap-4"
          initial={false}
        >
          <motion.a
            href="#projects"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-white/10 px-6 py-3 text-sm font-medium backdrop-blur-md ring-1 ring-white/20 transition-colors hover:bg-white/15"
          >
            Explore Projects
          </motion.a>
          <motion.a
            href="#contact"
            animate={{
              boxShadow: hovered
                ? ['0 0 0 0 rgba(56,189,248,0.0)', '0 0 60px 0 rgba(56,189,248,0.25)']
                : '0 0 0 0 rgba(56,189,248,0.0)'
            }}
            transition={{ duration: 0.6 }}
            className="rounded-full bg-cyan-400/20 px-6 py-3 text-sm font-medium backdrop-blur-md ring-1 ring-cyan-300/30 transition-colors hover:bg-cyan-400/30"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Floating tags with depth stagger */}
        <div className="pointer-events-none relative mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {['Framer Motion', 'Spline 3D', 'Tailwind', 'Parallax', 'Futuristic UI', 'React'].map((label, i) => (
            <motion.span
              key={label}
              style={{ y: useTransform(p, [0, 1], [0, -(20 + i * 6)]) }}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-md"
            >
              {label}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
