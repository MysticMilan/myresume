"use client";

const skills = [".NET Core", "NodeJS", "SQL", "Web API", "OOP", "Blockchain"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-base-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in text-center">
        <h2 className="text-3xl font-extrabold mb-12 text-center text-primary">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-block bg-base-100 text-primary font-semibold px-6 py-3 rounded-full shadow border border-base-200 text-lg hover:scale-105 transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
