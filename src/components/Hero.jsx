import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[60rem] rounded-full bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300/60 dark:via-zinc-700/60 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          Clark Wang
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl"
        >
          Design engineer crafting thoughtful products and delightful interfaces. I blend systems
          thinking, rapid prototyping, and code to ship beautiful, resilient experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a href="#work" className="inline-flex items-center gap-2 rounded-md bg-zinc-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-zinc-800 active:scale-[.99] transition">
            View work <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-800 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition">
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
