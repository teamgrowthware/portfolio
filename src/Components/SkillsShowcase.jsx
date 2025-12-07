


import React, { useState } from "react";
import {
  Atom,
  Smartphone,
  Figma,
  Palette,
  Server,
  Search,
  ShoppingBag,
  Globe,
} from "lucide-react";

export default function SkillsShowcaseSlider() {
  const skills = [
    {
      icon: Atom,
      title: "React.js",
      desc: "Building dynamic UI",
      level: 90,
    },
    {
      icon: Smartphone,
      title: "React Native",
      desc: "Mobile apps",
      level: 85,
    },
    {
      icon: Figma,
      title: "Figma",
      desc: "UI / UX Design",
      level: 80,
    },
    {
      icon: Palette,
      title: "Photoshop",
      desc: "Graphic design",
      level: 75,
    },
    {
      icon: Server,
      title: ".NET",
      desc: "Backend development",
      level: 70,
    },
    {
      icon: Search,
      title: "SEO",
      desc: "Search optimization",
      level: 85,
    },
    {
      icon: ShoppingBag,
      title: "Shopify",
      desc: "Store Setup & Customization",
      level: 80,
    },
    {
      icon: Globe,
      title: "WordPress",
      desc: "Theme Customization, Plugins, SEO",
      level: 70,
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? skills.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === skills.length - 1 ? 0 : i + 1));

  const getSkill = (offset) =>
    skills[(index + offset + skills.length) % skills.length];

  return (
    
    <section className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-4 py-20">
  <h1 className="text-[#60A5FA] text-4xl md:text-5xl font-bold mb-12">
    My Skills
  </h1>

  <div className="relative flex items-center justify-center w-full max-w-6xl gap-3 md:gap-6">
    {/* LEFT ARROW */}
    <button
      onClick={prev}
      className="text-[#60A5FA] text-3xl md:text-4xl hover:scale-110 transition"
    >
      ‹
    </button>

    {/* Cards Container */}
    <div className="flex items-center justify-center gap-3 md:gap-6 overflow-hidden">
      {/* LEFT (hidden on mobile) */}
      <div className="hidden sm:block">
        <SkillCard skill={getSkill(-1)} />
      </div>

      {/* CENTER */}
      <SkillCard skill={getSkill(0)} active />

      {/* RIGHT (hidden on mobile) */}
      <div className="hidden sm:block">
        <SkillCard skill={getSkill(1)} />
      </div>
    </div>

    {/* RIGHT ARROW */}
    <button
      onClick={next}
      className="text-[#60A5FA] text-3xl md:text-4xl hover:scale-110 transition"
    >
      ›
    </button>
  </div>
</section>

  );
}

/* ================= CARD COMPONENT ================= */

function SkillCard({ skill, active }) {
  const Icon = skill.icon;

  return (
    <div
      className={`
        bg-[#020617]
        border border-blue-500/20
        rounded-3xl p-8 text-center w-72
        transition-all duration-500
        ${
          active
            ? "scale-110 shadow-2xl shadow-blue-500/40"
            : "scale-90 opacity-60"
        }
      `}
    >
      {/* ICON */}
      <Icon className="w-14 h-14 mx-auto mb-4 text-blue-400" />

      <h2 className="text-white text-xl font-bold mb-2">
        {skill.title}
      </h2>

      <p className="text-gray-400 text-sm mb-4">
        {skill.desc}
      </p>

      <div className="text-blue-300 text-sm mb-2">
        Proficiency: {skill.level}%
      </div>

      {/* PROGRESS BAR */}
      <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
         <div
          className="h-full bg-blue-400"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
   
  );
}
