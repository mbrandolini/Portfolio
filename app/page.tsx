import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const techLogos = [
  {
    name: "WordPress",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MySQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Next.js",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
  {
    name: "Photoshop",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  },
  {
    name: "Vite",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
  },
  {
    name: "PHP",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-8 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-6 py-2 text-sm font-medium text-black bg-zinc-100 rounded-md shadow-md transition duration-300 hover:bg-zinc-200 hover:bg-opacity-90 hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-full h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={200}
      />
      <h1 className="flex items-center gap-3 py-3 px-4 z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-6xl bg-clip-text">
        Mariano Brandolini <span className="text-2xl sm:text-3xl md:text-4xl">💻</span>
      </h1>

      <div className="hidden w-full h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-8 text-center animate-fade-in px-4">
        <h2 className="text-md text-zinc-500">
          I'm a web developer with over 10 years of experience in software,
          marketing, and design.
        </h2>
        <h2 className="text-md text-zinc-500">
          I specialize in creating high-performance websites that enhance
          visibility, user engagement, and overall project impact.
        </h2>
      </div>

      {/* Logo Section */}
      <div className="w-full mt-12 animate-fade-in bg-zinc-100/30 rounded-lg py-6 px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {techLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex justify-center items-center transition-transform duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="w-16 h-16 md:w-12 md:h-12 lg:w-16 lg:h-16 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
