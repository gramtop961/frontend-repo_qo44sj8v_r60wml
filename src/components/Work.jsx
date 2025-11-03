import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Interface systems",
    desc: "Design tokens, component libraries, and product-wide patterns.",
    href: "#",
    accent: "from-indigo-500/20 to-violet-500/20",
  },
  {
    title: "Prototyping",
    desc: "High-fidelity motion, 3D, and micro-interactions that tell a story.",
    href: "#",
    accent: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "Full‑stack builds",
    desc: "Shipping robust apps across web stacks with performance in mind.",
    href: "#",
    accent: "from-fuchsia-500/20 to-rose-500/20",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Selected work</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl">A snapshot of areas I focus on. Each engagement balances craft with systems thinking and measurable impact.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 overflow-hidden bg-white dark:bg-zinc-900 hover:shadow-lg hover:shadow-zinc-900/5 transition"
            >
              <div className={`absolute inset-x-0 -top-20 h-40 bg-gradient-to-r ${p.accent} blur-2xl`} />
              <div className="relative p-6">
                <div className="h-40 rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700" />
                <h3 className="mt-5 text-lg font-medium text-zinc-900 dark:text-zinc-100">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{p.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-900 dark:text-zinc-100">
                  View details <ExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
