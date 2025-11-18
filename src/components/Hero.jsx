import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(168,85,247,0.18),transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-violet-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-amber-300 animate-pulse" />
            Introducing AuraAI — your voice-first AI agent platform
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl font-semibold leading-tight tracking-tight text-white">
            Build voice-driven AI agents with a clean, modern stack
          </h1>
          <p className="mt-5 text-lg text-slate-300">
            Design, deploy, and scale AI voice agents in minutes. Secure, blazing fast, and built for teams.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 text-slate-900 font-medium shadow-[0_10px_40px_-10px_rgba(168,85,247,0.6)]">
              Start free
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-white/10 border border-white/10 text-white backdrop-blur hover:bg-white/15">
              See features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
