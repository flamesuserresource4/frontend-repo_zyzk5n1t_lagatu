import { ShieldCheck, Mic, Zap, Globe2 } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Natural Conversations",
    desc: "Human-like dialogue with intent understanding and context memory.",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    desc: "Ultra-low latency responses optimized for live voice calls.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "SOC2-ready, encrypted by default, with granular roles and audit logs.",
  },
  {
    icon: Globe2,
    title: "Multi-channel",
    desc: "Deploy across web, mobile, IVR, and messaging in one click.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,rgba(99,102,241,0.18),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">What makes AuraAI different</h2>
          <p className="mt-3 text-slate-300">Purpose-built for voice agents with a focus on reliability and control.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400 p-[2px]">
                <div className="h-full w-full rounded-[10px] bg-slate-900 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-violet-200" />
                </div>
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
