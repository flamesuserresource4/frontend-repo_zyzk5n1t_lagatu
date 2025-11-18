export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_50%_20%,rgba(59,130,246,0.15),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12 backdrop-blur">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-semibold text-white">Spin up your first voice agent today</h3>
            <p className="mt-3 text-slate-300">No credit card required. Get a full sandbox with sample flows and web widgets.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3">
              <input type="email" required placeholder="Work email" className="flex-1 rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400/40" />
              <button type="submit" className="rounded-xl px-5 py-3 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 text-slate-900 font-medium">
                Get started free
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-400">By continuing, you agree to our Terms and Privacy Policy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
