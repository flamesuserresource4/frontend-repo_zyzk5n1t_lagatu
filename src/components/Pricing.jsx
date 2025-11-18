export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_80%_10%,rgba(236,72,153,0.15),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Simple, usage-based pricing</h2>
          <p className="mt-3 text-slate-300">Start free. Scale as you grow. Cancel anytime.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { name: 'Starter', price: 'Free', features: ['100 minutes/mo', '1 project', 'Community support'] },
            { name: 'Pro', price: '$49', features: ['5,000 minutes/mo', 'Unlimited projects', 'Priority support'], highlight: true },
            { name: 'Enterprise', price: 'Custom', features: ['SLA + SSO', 'Dedicated region', 'Onboarding & training'] },
          ].map((p) => (
            <div key={p.name} className={`rounded-2xl border border-white/10 p-6 backdrop-blur bg-white/5 ${p.highlight ? 'ring-1 ring-violet-400/40 bg-gradient-to-b from-white/10 to-white/5' : ''}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-white font-medium">{p.name}</h3>
                <span className="text-slate-300">{p.price}{p.price !== 'Custom' && <span className="text-slate-500 text-sm">/mo</span>}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-violet-300">•</span> {f}</li>
                ))}
              </ul>
              <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 bg-white/10 border border-white/10 text-white hover:bg-white/15">Choose {p.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
