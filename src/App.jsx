import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import SocialSections from "./components/SocialSections";
import Pricing from "./components/Pricing";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

export default function App() {
  const [socials, setSocials] = useState({ youtube: [], instagram: [], tiktok: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${BACKEND_URL}/api/socials`);
        const data = await res.json();
        setSocials(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const startCheckout = async (tier) => {
    const email = prompt("Enter your email for membership");
    if (!email) return;
    try {
      const res = await fetch(`${BACKEND_URL}/api/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, tier }),
      });
      const data = await res.json();
      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        alert("Unable to start checkout.");
      }
    } catch (e) {
      alert("Error creating checkout session");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Hero onJoin={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })} />
      {loading ? (
        <div className="max-w-6xl mx-auto px-6 py-12 text-white/70">Loading socials…</div>
      ) : (
        <SocialSections data={socials} />
      )}
      <Pricing onSelect={startCheckout} />
      <footer className="py-10 text-center text-white/50">© {new Date().getFullYear()} Bebahan</footer>
    </div>
  );
}
