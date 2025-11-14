import { HeartPulse, PiggyBank, FileCheck2, Clock, UserCheck, Shield } from "lucide-react";

const features = [
  {
    icon: HeartPulse,
    title: "Life Coverage",
    desc: "Financial protection for your loved ones when it matters most.",
  },
  {
    icon: PiggyBank,
    title: "Tax-smart Plans",
    desc: "Grow savings with options designed for long-term benefits.",
  },
  {
    icon: FileCheck2,
    title: "Transparent Terms",
    desc: "Clear, jargon-free policies with no hidden surprises.",
  },
  {
    icon: Clock,
    title: "Fast Claims",
    desc: "Simple, guided claims with updates at every step.",
  },
  {
    icon: UserCheck,
    title: "Tailored Quotes",
    desc: "Personalized premiums based on your goals and lifestyle.",
  },
  {
    icon: Shield,
    title: "Trusted Support",
    desc: "Licensed advisors available whenever you need help.",
  },
];

export default function Benefits() {
  return (
    <section id="why" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold">Why families choose BlueLife</h2>
          <p className="mt-3 text-zinc-300">Smart coverage, fair pricing, and a team that truly cares.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/20 text-emerald-400 grid place-items-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
