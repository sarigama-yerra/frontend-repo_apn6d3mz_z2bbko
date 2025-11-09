import { Award, Target, Trophy } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Trophy,
      title: "Championships",
      desc: "International LAN champion across Tier-1 events with clutch MVP performances.",
    },
    {
      icon: Target,
      title: "Role & Playstyle",
      desc: "Primary duelist and IGL. Precision aim, adaptive utility usage, and macro shot-calling.",
    },
    {
      icon: Award,
      title: "Partnerships",
      desc: "Collaborations with leading brands in peripherals, energy, and performance gear.",
    },
  ];

  return (
    <section id="about" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About</h2>
        <p className="mt-3 max-w-3xl text-white/70">
          I'm Razor, a professional esports athlete specializing in tactical FPS.
          I stream scrims, VOD reviews, and ranked shenanigans while mentoring
          upcoming players on discipline, team play, and mindset.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <Icon className="h-6 w-6 text-fuchsia-400" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
