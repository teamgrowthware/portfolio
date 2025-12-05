import React, { useState } from "react";

export default function SkillsShowcaseSlider() {
  const skills = [
    { icon: "⚛️", title: "React.js", desc: "Building dynamic UI", level: 90 },
    { icon: "📱", title: "React Native", desc: "Mobile apps", level: 85 },
    { icon: "🎨", title: "Figma", desc: "UI / UX Design", level: 80 },
    { icon: "📷", title: "Photoshop", desc: "Graphic design", level: 75 },
    { icon: "🌐", title: ".NET", desc: "Backend development", level: 70 },
    { icon: "🔍", title: "SEO", desc: "Search optimization", level: 85 },
    { icon: "🛡️", title: "Ethical Hacking", desc: "Security testing", level: 65 },
  ];

  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? skills.length - 1 : prev - 1));

  const next = () =>
    setIndex((prev) => (prev === skills.length - 1 ? 0 : prev + 1));

  const getSkill = (offset) =>
    skills[(index + offset + skills.length) % skills.length];

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-24">
      
      {/* Title */}
      <h1 className="text-blue-400 text-4xl md:text-5xl font-bold mb-16">
        My Skills
      </h1>

      <div className="relative flex items-center justify-center w-full max-w-6xl gap-6">

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="text-blue-400 text-4xl hover:scale-110 transition"
        >
          ‹
        </button>

        {/* LEFT (SMALL) */}
        <SkillCard skill={getSkill(-1)} scale="scale-90 opacity-60" />

        {/* CENTER (ACTIVE) */}
        <SkillCard skill={getSkill(0)} active />

        {/* RIGHT (SMALL) */}
        <SkillCard skill={getSkill(1)} scale="scale-90 opacity-60" />

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="text-blue-400 text-4xl hover:scale-110 transition"
        >
          ›
        </button>

      </div>
    </section>
  );
}

/* CARD */
function SkillCard({ skill, active, scale }) {
  return (
    <div
      className={`
        bg-gradient-to-br from-blue-500 to-blue-700
        rounded-3xl p-8 text-center w-72
        transition-all duration-500
        ${active ? "scale-110 shadow-blue-500/50 shadow-2xl" : scale}
      `}
    >
      <div className="text-4xl mb-4">{skill.icon}</div>
      <h2 className="text-white text-xl font-bold mb-2">{skill.title}</h2>
      <p className="text-blue-100 text-sm mb-4">{skill.desc}</p>

      <div className="text-blue-200 text-sm mb-2">
        Proficiency: {skill.level}%
      </div>

      <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-400"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}
