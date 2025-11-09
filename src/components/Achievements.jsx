import { Medal, Crown, Star } from "lucide-react";

const achievements = [
  {
    year: "2025",
    title: "Champions Global – MVP",
    org: "Arena League",
    desc: "Led the roster to a 3-0 grand final with a 1.32 rating across playoffs.",
  },
  {
    year: "2024",
    title: "International Split Winner",
    org: "Pro Circuit",
    desc: "Back-to-back titles with top ADR and clutch success rate.",
  },
  {
    year: "2023",
    title: "Rookie of the Year",
    org: "Esports Awards",
    desc: "Breakout season highlighted by leadership and consistency.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-gradient-to-b from-black to-gray-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3">
          <Crown className="h-6 w-6 text-indigo-400" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Achievements</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => (
            <div key={a.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/60">{a.year}</span>
                <Medal className="h-5 w-5 text-fuchsia-400" />
              </div>
              <h3 className="mt-3 text-lg font-semibold">{a.title}</h3>
              <p className="text-sm text-white/60">{a.org}</p>
              <p className="mt-2 text-sm text-white/70">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
