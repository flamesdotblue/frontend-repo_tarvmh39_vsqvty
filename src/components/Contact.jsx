import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-black to-[#05070c] py-28 text-white">
      {/* Decorative ring */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10 [mask-image:radial-gradient(closest-side,black,transparent)]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ type: 'spring', stiffness: 140, damping: 18 }}
          className="text-3xl font-bold sm:text-4xl md:text-5xl"
        >
          Let’s Build Something Together
        </motion.h2>

        <motion.p
          initial={{ y: 16, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.06, type: 'spring', stiffness: 140, damping: 18 }}
          className="mt-4 max-w-2xl text-white/75"
        >
          Questions, ideas, or opportunities—drop a message and I’ll get back soon.
        </motion.p>

        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          initial={{ y: 24, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.12, type: 'spring', stiffness: 160, damping: 20 }}
          className="mt-10 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
        >
          <label className="grid gap-2">
            <span className="text-sm text-white/80">Name</span>
            <input
              type="text"
              required
              className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              placeholder="Jane Doe"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm text-white/80">Email</span>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
              <input
                type="email"
                required
                className="w-full rounded-md border border-white/10 bg-black/30 px-9 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                placeholder="jane@domain.com"
              />
            </div>
          </label>
          <label className="grid gap-2">
            <span className="text-sm text-white/80">Message</span>
            <textarea
              rows="5"
              required
              className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              placeholder="Tell me about your idea..."
            />
          </label>

          <div className="mt-2 flex items-center justify-between gap-4">
            <motion.button
              type="submit"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-md bg-cyan-400/20 px-5 py-2.5 font-medium text-cyan-100 ring-1 ring-cyan-300/30 transition-colors hover:bg-cyan-400/30"
            >
              <Send className="h-4 w-4" /> Send message
            </motion.button>

            {sent && (
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-sm text-emerald-300"
              >
                Thanks! Your message was captured.
              </motion.span>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
