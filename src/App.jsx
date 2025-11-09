import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function Navbar() {
  const links = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#" className="text-lg font-bold tracking-wider">
          <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">RAZOR</span>
        </a>
        <nav className="hidden gap-6 sm:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-white/70 hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-lg bg-white/10 px-3 py-2 text-xs font-medium text-white hover:bg-white/20"
        >
          Book me
        </a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Contact />
    </div>
  );
}
