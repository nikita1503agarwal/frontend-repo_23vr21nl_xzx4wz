import { Youtube, Instagram, Ticket, Crown } from "lucide-react";

export default function Hero({ onJoin }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,0,128,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.25),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        <img src="https://images.unsplash.com/photo-1615843423179-bea071facf96?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCZWJhaGFuJTIwYXZhdGFyfGVufDB8MHx8fDE3NjM0MzYxOTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Bebahan avatar" className="mx-auto w-28 h-28 rounded-full ring-4 ring-pink-500/40 shadow-xl" />
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">Bebahan Club</h1>
        <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">Join the official membership for exclusive content, behind-the-scenes, and community perks. Choose your vibe and support the stream!</p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#socials" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur text-white transition">
            <Youtube className="w-5 h-5 text-red-500" /> Socials
          </a>
          <button onClick={onJoin} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-medium shadow-lg shadow-pink-600/30 transition">
            <Crown className="w-5 h-5" /> Become a Member
          </button>
        </div>
      </div>
    </section>
  );
}
