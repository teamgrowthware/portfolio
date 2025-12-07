
import { useState } from "react";

export default function Journey() {
  const [activeTab, setActiveTab] = useState("freelance");

  return (
    <div

   className="relative z-10 w-screen min-h-screen bg-black px-6 py-20">   
       <h1 className="text-[#60A5FA] text-4xl md:text-5xl font-bold mb-16 text-center">
         My Journey
      </h1>




      {/* TABS */}
      <div className="flex justify-center gap-4 mb-14 flex-wrap">
        {["freelance", "cofounder"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
              activeTab === tab
                ? "bg-gradient-to-r from-[#3B82F6] to-[#4F46E5] text-white shadow-xl shadow-blue-500/40 scale-105"
                : "bg-white/10 text-gray-400 hover:bg-white/20"
            }`}
          >
            {tab === "freelance"
              ? "Freelance Journey"
              : "Co-Founder Journey"}
          </button>
        ))}
      </div>

      {/* TIMELINE */}
      <div className="max-w-4xl mx-auto space-y-10">
        {activeTab === "freelance" ? (
          <>
            <Timeline
              year="2020"
              title="Started Freelancing"
              desc="Learning & exploring design world"
            />
            <Timeline
              year="2021–22"
              title="Professional Freelancer"
              desc="43+ clients globally"
            />
            <Timeline
              year="2022–25"
              title="AI Integratorz"
              desc="Co-founded & scaled to 97 projects"
            />
          </>
        ) : (
          <>
            <Timeline
              year="2022"
              title="Unique Events Company"
              desc="Launched & handled 52 events"
            />
            <Timeline
              year="2024"
              title="Marshall – CEO"
              desc="Leading large scale events"
            />
            <Timeline
              year="2025"
              title="VertexCubes"
              desc="Founded AI-focused startup"
            />
          </>
        )}
      </div>
    </div>
  );
}

/* TIMELINE COMPONENT */
function Timeline({ year, title, desc }) {
  return (
    <div className="flex gap-6 group items-start">
      {/* Year */}
      <div className="w-28 text-right text-3xl font-black bg-gradient-to-r from-[#60A5FA] to-[#6366F1] bg-clip-text text-transparent">
        {year}
      </div>

      {/* Line + Dot */}
      <div className="flex flex-col items-center">
        <span className="w-5 h-5 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] rounded-full group-hover:scale-125 transition" />
        <span className="w-1 flex-1 bg-gradient-to-b from-[#3B82F6] to-[#4F46E5]" />
      </div>

      {/* Card */}
      <div className="flex-1 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/40 transition">
        <h3 className="text-xl font-bold text-white mb-1">
          {title}
        </h3>
        <p className="text-gray-400">{desc}</p>
      </div>
    </div>
  );
}

