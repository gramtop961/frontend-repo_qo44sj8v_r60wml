import { motion } from "framer-motion";

const skills = [
  "Design Systems",
  "Rapid Prototyping",
  "React",
  "TypeScript",
  "Framer Motion",
  "Three.js",
  "Figma",
  "Accessibility",
  "Performance",
];

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">About</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            I design and build end‑to‑end product experiences. My background spans consumer apps,
            creative tools, and scalable design systems. I care about clarity, momentum, and work
            that feels calm yet ambitious.
          </p>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Outside of work, you’ll find me exploring new interaction patterns, tinkering with
            motion, and contributing to open‑source.
          </p>

          <div id="contact" className="mt-8 rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 p-6 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-900/40">
            <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Let’s chat</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              I’m open to collaborations and new opportunities. Reach out and say hello.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="mailto:hello@clark.wang" className="inline-flex items-center px-4 py-2 rounded-md bg-zinc-900 text-white text-sm hover:bg-zinc-800 transition">Email me</a>
              <a href="https://cal.com/" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 text-sm text-zinc-800 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition">Schedule a call</a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium tracking-wide text-zinc-500 uppercase">Focus</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((s) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="inline-flex items-center rounded-full bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100 px-3 py-1 text-xs"
              >
                {s}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 rounded-xl overflow-hidden border border-zinc-200/70 dark:border-zinc-800/70">
            <div className="h-56 w-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
