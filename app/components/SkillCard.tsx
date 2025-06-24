import React from "react";

interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-base-100 rounded-xl shadow-md p-6 flex flex-col items-center border border-base-200 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-4 text-primary text-center">
        {title}
      </h3>
      <ul className="flex flex-wrap gap-2 justify-center">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-base-200 dark:bg-base-300 text-base-content px-3 py-1 rounded-full text-sm font-medium border border-base-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
