import { Check, Crown, Star, Gem } from "lucide-react";

const plans = [
  {
    id: "bronze",
    name: "Bronze",
    price: 4.99,
    color: "from-amber-500 to-orange-600",
    icon: Star,
    perks: ["Support the stream", "Member badge", "Discord role"],
  },
  {
    id: "silver",
    name: "Silver",
    price: 9.99,
    color: "from-fuchsia-500 to-pink-600",
    icon: Crown,
    perks: ["Everything in Bronze", "Behind-the-scenes posts", "Early access"],
  },
  {
    id: "gold",
    name: "Gold",
    price: 24.99,
    color: "from-violet-500 to-indigo-600",
    icon: Gem,
    perks: ["Everything in Silver", "Exclusive videos", "Monthly hangout"],
  },
];

export default function Pricing({ onSelect }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white">Choose your membership</h2>
      <p className="text-center text-white/70 mt-2">Billed monthly in USD via Stripe</p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div key={p.id} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-pink-500/40 transition">
            <div className={`absolute inset-x-0 -top-0.5 h-1 rounded-t-2xl bg-gradient-to-r ${p.color}`} />
            <div className="flex items-center gap-3">
              <p.icon className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white">{p.name}</h3>
              <span className="ml-auto text-white/80">${p.price}/mo</span>
            </div>
            <ul className="mt-4 space-y-2">
              {p.perks.map((perk, i) => (
                <li key={i} className="flex items-center gap-2 text-white/80">
                  <Check className="w-4 h-4 text-emerald-400" /> {perk}
                </li>
              ))}
            </ul>
            <button onClick={() => onSelect(p.id)} className="mt-6 w-full py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-medium shadow-lg shadow-pink-600/30 transition">
              Join {p.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
