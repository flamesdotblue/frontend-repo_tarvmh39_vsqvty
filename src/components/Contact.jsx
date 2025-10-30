import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  // generate confetti positions once
  const confetti = useMemo(
    () => Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 50,
      s: Math.random() * 8 + 4,
      h: Math.floor(Math.random() * 360),
    })),
    []
  );

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 1800);
  };

  return (
    <section id="contact" className="relative w-full bg-[#0b0d12] px-6 pb-28 pt-24 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold md:text-5xl"
        >
          Let’s Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-xl text-white/70"
        >
          Open to collaborations, freelance projects, or just geeking out about motion and UX.
        </motion.p>

        <form onSubmit={onSubmit} className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
          <input
            required
            type="text"
            placeholder="Your name"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur focus:border-cyan-400/40 sm:col-span-1"
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur focus:border-cyan-400/40 sm:col-span-1"
          />
          <textarea
            required
            rows={4}
            placeholder="Message"
            className="sm:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur focus:border-cyan-400/40"
          />
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="relative w-full overflow-hidden rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#0b0d12] shadow-lg shadow-cyan-500/10 transition hover:scale-[1.01] hover:bg-gradient-to-r hover:from-cyan-400 hover:to-fuchsia-500 hover:text-white"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Confetti micro-interaction */}
        <div className="relative mx-auto mt-6 h-10 w-full max-w-2xl overflow-visible">
          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-none absolute inset-0"
              >
                {confetti.map((c) => (
                  <motion.span
                    key={c.id}
                    initial={{ y: 0, opacity: 1, rotate: 0 }}
                    animate={{ y: 80 + c.y, opacity: 0, rotate: 180 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="absolute block rounded"
                    style={{
                      left: `${c.x}%`,
                      width: c.s,
                      height: c.s,
                      background: `hsl(${c.h} 90% 60%)`,
                    }}
                  />)
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-white/10">
            <Mail size={16} /> Email
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-white/10">
            <Github size={16} /> GitHub
          </a>
          <a target="_blank" rel="noreferrer" href="https://linkedin.com/" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-white/10">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
    </section>
  );
}
