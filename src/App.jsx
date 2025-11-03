import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 antialiased">
      <Navbar />

      {/* Subtle page background grid */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 [background:radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.06),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(20,184,166,0.06),transparent_40%)]" />

      <main>
        <Hero />
        <Work />
        <About />
      </main>

      <footer className="border-t border-zinc-200/60 dark:border-zinc-800/60 py-10">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} Clark Wang. All rights reserved.</p>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Built with care — say hi at <a className="underline decoration-dotted underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-200" href="mailto:hello@clark.wang">hello@clark.wang</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
