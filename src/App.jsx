import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background auras */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-48 -left-40 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-violet-600/20 via-fuchsia-500/15 to-amber-400/10 blur-3xl" />
        <div className="absolute -bottom-48 -right-40 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-amber-400/10 via-fuchsia-500/15 to-violet-600/20 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>

      <footer id="about" className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} AuraAI. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-slate-200">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-slate-200">Terms</a>
            <a href="#" className="text-slate-400 hover:text-slate-200">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
