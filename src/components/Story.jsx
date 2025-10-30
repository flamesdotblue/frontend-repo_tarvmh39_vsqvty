import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function Story() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const p = useSpring(scrollYProgress, { stiffness: 100, damping: 24 });

  const bgY = useTransform(p, [0, 1], ['0%', '-25%']);
  const glow = useTransform(p, [0, 0.5, 1], [0.2, 0.5, 0.2]);

  return (
    <section id="story" ref={ref} className="relative w-full overflow-hidden bg-gradient-to-b from-black via-[#05070c] to-black py-28 text-white">
      {/* Parallax background accent */}
      <motion.div
        style={{ y: bgY, opacity: glow }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_20%_20%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(50rem_30rem_at_80%_60%,rgba(34,211,238,0.12),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <motion.h2
            className="text-3xl font-bold sm:text-4xl md:text-5xl"
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            A Narrative of Curiosity and Craft
          </motion.h2>
          <motion.p
            className="mt-5 text-white/80"
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.08, type: 'spring', stiffness: 120, damping: 20 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Design is more than visuals—it's choreography. Each interaction, transition, and micro-motion is part of a
            larger story. This portfolio explores that narrative through tactile motion, parallax, and responsive 3D.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {[
            { title: 'Foundations', text: 'Built strong fundamentals in React, animation, and visual language.' },
            { title: 'Exploration', text: 'Experimented with 3D canvases and scroll storytelling.' },
            { title: 'Synthesis', text: 'Fused motion, 3D, and craft into immersive experiences.' }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              initial={{ y: 20, opacity: 0, rotateX: -6 }}
              whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ delay: i * 0.05, type: 'spring', stiffness: 140, damping: 18 }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ perspective: 1000 }}
            >
              <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-400/10" />
              <div className="relative">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-white/75">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
