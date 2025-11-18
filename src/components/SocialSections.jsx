import { Youtube, Instagram, Music } from "lucide-react";

const SocialCard = ({ icon: Icon, title, link, items }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
    <div className="flex items-center gap-3">
      <Icon className="w-6 h-6" />
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <a href={link} target="_blank" rel="noreferrer" className="ml-auto text-pink-400 hover:text-pink-300 text-sm">Open</a>
    </div>
    <div className="mt-4 space-y-3">
      {items.map((v, i) => (
        <a key={i} href={v.url} target="_blank" rel="noreferrer" className="block group">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-black/20 border border-white/10 group-hover:border-pink-500/40">
            <div className="flex-1">
              <p className="text-white/90 font-medium">{v.title}</p>
              <p className="text-white/50 text-xs truncate">{v.url}</p>
            </div>
            <span className="text-white/50 text-xs">Watch</span>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default function SocialSections({ data }) {
  return (
    <section id="socials" className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
      <SocialCard icon={Youtube} title="YouTube" link="https://youtube.com/@bebahan" items={data.youtube || []} />
      <SocialCard icon={Instagram} title="Instagram" link="https://instagram.com/bebahan" items={data.instagram || []} />
      <SocialCard icon={Music} title="TikTok" link="https://tiktok.com/@bebahan" items={data.tiktok || []} />
    </section>
  );
}
