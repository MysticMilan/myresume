"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMedium,
  FaDev,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center min-h-[60vh] pt-16 pb-12 bg-gradient-to-b from-base-100 to-base-200"
    >
      <div className="w-full max-w-2xl mx-auto px-6 py-12 flex flex-col items-center text-center gap-6 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-2 tracking-tight">
          MILAN BISHOWKARMA
        </h1>
        <h2 className="text-2xl md:text-3xl text-base-content/80 mb-4 font-semibold">
          Backend Developer
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto text-base-content/70">
          I am a motivated IT student passionate about software development and
          emerging technologies.
          <br />
          With hands-on experience in backend development using .NET, I enjoy
          staying up-to-date with the latest trends and continuously learning to
          tackle complex problems with innovative solutions.
        </p>
        <div className="text-base-content/70 mt-4">
          <span>Manamaiju, Kathmandu | +977-9741696042 | </span>
          <a
            href="mailto:mysticmilan369@gmail.com"
            className="underline hover:text-primary"
          >
            mysticmilan369@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

// Add Tailwind animation in globals.css or tailwind.config.js:
// .animate-fade-in { animation: fadeIn 1s ease-in-out forwards; }
// @keyframes fadeIn { to { opacity: 1; } }
