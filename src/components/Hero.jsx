import { Gamepad2, Mail, PlayCircle, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-wide backdrop-blur">
            <Gamepad2 className="h-4 w-4 text-fuchsia-400" />
            <span className="text-white/70">Professional Gamer • Esports Athlete</span>
          </div>

          <h1 className="font-extrabold tracking-tight text-4xl sm:text-6xl md:text-7xl">
            <span className="bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
              RAZOR
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/70">
            FPS specialist. IGL and clutch anchor. Streaming high-level ranked
            gameplay and breaking down competitive strategy.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-fuchsia-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-600/30 transition hover:bg-fuchsia-500"
            >
              <Mail className="h-4 w-4" /> Book for events
            </a>
            <a
              href="https://drive.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              <PlayCircle className="h-5 w-5" /> Media kit
            </a>
          </div>

          <div className="mt-12 grid w-full max-w-3xl grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <StatItem label="Followers" value="380k+" />
            <StatItem label="Avg. Viewers" value="12.4k" />
            <StatItem label="LAN Trophies" value="7" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ label, value }) {
  return (
    <div className="px-6 py-5 text-center">
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{label}</div>
    </div>
  );
}
