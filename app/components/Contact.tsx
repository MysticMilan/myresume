"use client";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMedium,
  FaDev,
  FaHackerrank,
  FaDiscord,
  FaUserGraduate,
  FaEnvelope,
} from "react-icons/fa";
import { SiLeetcode, SiTryhackme, SiHackerone } from "react-icons/si";

const iconMap = {
  GitHub: <FaGithub className="w-6 h-6 text-gray-700 dark:text-white" />,
  LinkedIn: <FaLinkedin className="w-6 h-6 text-blue-700" />,
  Twitter: <FaTwitter className="w-6 h-6 text-blue-400" />,
  Medium: <FaMedium className="w-6 h-6 text-black" />,
  "DEV.to": <FaDev className="w-6 h-6 text-gray-800" />,
  HackerRank: <FaHackerrank className="w-6 h-6 text-green-600" />,
  LeetCode: <SiLeetcode className="w-6 h-6 text-yellow-500" />,
  TryHackMe: <SiTryhackme className="w-6 h-6 text-green-700" />,
  HackerOne: <SiHackerone className="w-6 h-6 text-orange-500" />,
  Email: <FaEnvelope className="w-8 h-8 text-red-500" />,
};

const socialLinks = [
  {
    platform: "GitHub",
    username: "MysticMilan369",
    url: "https://github.com/MysticMilan369",
    category: "Development",
  },
  {
    platform: "LinkedIn",
    username: "MysticMilan369",
    url: "https://linkedin.com/in/MysticMilan369",
    category: "Professional",
  },
  {
    platform: "Twitter",
    username: "MysticMilan369",
    url: "https://twitter.com/MysticMilan369",
    category: "Social",
  },
  {
    platform: "Medium",
    username: "MysticMilan369",
    url: "https://medium.com/@MysticMilan369",
    category: "Blog",
  },
  {
    platform: "DEV.to",
    username: "mysticmilan369",
    url: "https://dev.to/mysticmilan369",
    category: "Blog",
  },
  {
    platform: "HackerRank",
    username: "MysticMilan369",
    url: "https://www.hackerrank.com/MysticMilan369",
    category: "Coding",
  },
  {
    platform: "LeetCode",
    username: "MysticMilan369",
    url: "https://leetcode.com/MysticMilan369",
    category: "Coding",
  },
  {
    platform: "TryHackMe",
    username: "MysticMilan369",
    url: "https://tryhackme.com/p/MysticMilan369",
    category: "Security",
  },
  {
    platform: "HackerOne",
    username: "MysticMilan369",
    url: "https://hackerone.com/MysticMilan369",
    category: "Security",
  },
];

function ContactCard({
  icon,
  title,
  description,
  actionLabel,
  actionHref,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
  onClick?: () => void;
}) {
  return (
    <div className="card bg-white dark:bg-base-100 shadow-xl border border-base-200 rounded-xl flex flex-col items-center p-8 text-center hover:shadow-2xl transition-all min-w-[300px] min-h-[220px] w-full max-w-sm">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
      <p className="mb-4 text-base-content/80">{description}</p>
      {onClick ? (
        <button
          className="btn btn-primary w-full rounded-full text-base font-semibold py-2 px-4 mt-auto shadow-md hover:shadow-lg transition"
          onClick={onClick}
          type="button"
        >
          {actionLabel}
        </button>
      ) : (
        <a
          href={actionHref}
          className="btn btn-primary w-full rounded-full text-base font-semibold py-2 px-4 mt-auto shadow-md hover:shadow-lg transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          {actionLabel}
        </a>
      )}
    </div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-t from-base-200 to-base-100"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in text-center">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-primary tracking-tight drop-shadow-lg">
          Let&apos;s Connect
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <ContactCard
            icon={
              <FaGithub className="w-8 h-8 text-gray-700 dark:text-white" />
            }
            title="GitHub"
            description="MysticMilan369"
            actionLabel="View Profile"
            actionHref="https://github.com/MysticMilan369"
          />
          <ContactCard
            icon={<FaLinkedin className="w-8 h-8 text-blue-700" />}
            title="LinkedIn"
            description="MysticMilan369"
            actionLabel="Connect"
            actionHref="https://linkedin.com/in/MysticMilan369"
          />
          <ContactCard
            icon={<FaDiscord className="w-8 h-8 text-indigo-500" />}
            title="Discord"
            description="MysticMilan369"
            actionLabel="Copy Name"
            actionHref="#"
            onClick={() => navigator.clipboard.writeText("MysticMilan369")}
          />
          <ContactCard
            icon={<FaEnvelope className="w-8 h-8 text-red-500" />}
            title="Email"
            description="mysticmilan369@gmail.com"
            actionLabel="Send Email"
            actionHref="mailto:mysticmilan369@gmail.com"
          />
        </div>
        <h3 className="text-2xl font-bold text-center text-primary mb-6 mt-12">
          Social Presence
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.platform as keyof typeof iconMap] || (
              <FaUserGraduate className="w-6 h-6" />
            );
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white dark:bg-base-100 shadow border border-base-200 hover:scale-105 transition-all text-base font-medium justify-center"
              >
                {Icon} {link.platform}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
