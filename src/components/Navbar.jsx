import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400 p-[2px] shadow-[0_0_24px_rgba(168,85,247,0.35)]">
            <div className="h-full w-full rounded-[10px] bg-slate-900 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-violet-300 group-hover:text-violet-200 transition-colors" />
            </div>
          </div>
          <span className="text-white font-semibold tracking-tight text-lg">AuraAI</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-slate-300 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-slate-300 hover:text-white transition-colors">Sign in</a>
          <a href="#cta" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl border border-white/10 backdrop-blur-md transition-colors">Get started</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/10 border border-white/10 text-white">
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-4 space-y-3">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="block text-slate-200">
              {l.label}
            </a>
          ))}
          <div className="pt-2 flex gap-2">
            <a href="#" className="flex-1 text-center rounded-xl px-3 py-2 bg-white/5 text-white border border-white/10">Sign in</a>
            <a href="#cta" className="flex-1 text-center rounded-xl px-3 py-2 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 text-slate-900 font-medium">Get started</a>
          </div>
        </div>
      )}
    </header>
  );
}
