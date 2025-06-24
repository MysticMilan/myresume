"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";

export default function Navbar() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "skills", "contact"];
      let active = "about";
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop) {
          active = id;
        }
      }
      document.querySelectorAll(".nav-link").forEach((el) => {
        el.classList.remove("active");
        if ((el as HTMLAnchorElement).getAttribute("href") === `#${active}`) {
          el.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-base-100/80 backdrop-blur-md z-50 border-b border-base-200 shadow-md transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-primary"
        >
          MysticMilan369
        </Link>
        <ul className="hidden md:flex gap-6 text-base font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`hover:text-primary transition nav-link`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/MysticMilan369"
            className="btn btn-ghost btn-circle"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/MysticMilan369"
            className="btn btn-ghost btn-circle"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </Link>
          <Link href="#contact" className="btn btn-primary ml-2">
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}

// Add this to your global CSS (e.g., globals.css):
// .nav-link.active { color: var(--tw-prose-invert); background: var(--tw-prose-bold); border-radius: 0.5rem; padding: 0.25rem 0.75rem; }
// .nav-link { position: relative; }
// .nav-link.active::after { content: ""; position: absolute; left: 0; right: 0; bottom: -2px; height: 2px; background: theme('colors.primary'); border-radius: 2px; }
