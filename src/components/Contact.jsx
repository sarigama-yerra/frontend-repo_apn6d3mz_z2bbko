import { Mail, Twitch, Twitter, Youtube, Instagram } from "lucide-react";

export default function Contact() {
  const socials = [
    { name: "Twitch", Icon: Twitch, href: "https://twitch.tv" },
    { name: "YouTube", Icon: Youtube, href: "https://youtube.com" },
    { name: "Twitter", Icon: Twitter, href: "https://twitter.com" },
    { name: "Instagram", Icon: Instagram, href: "https://instagram.com" },
  ];

  return (
    <section id="contact" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact & Socials</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            For scrims, sponsorships, and media inquiries, reach out via email or
            any social channel below.
          </p>

          <a
            href="mailto:razor@ggmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500"
          >
            <Mail className="h-4 w-4" /> razor@ggmail.com
          </a>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {socials.map(({ name, Icon, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10"
              >
                <Icon className="h-5 w-5" />
                <span>{name}</span>
              </a>
            ))}
          </div>

          <p className="mt-12 text-xs text-white/50">
            © {new Date().getFullYear()} RAZOR. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
