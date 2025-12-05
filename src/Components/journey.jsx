import { useState } from "react";

export default function Journey() {
  const [activeTab, setActiveTab] = useState("freelance");

  return (
    <section className="min-h-screen bg-black text-white py-24 px-6">
      <h2 className="text-5xl font-black text-center mb-16">
        My{" "}
        <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
          Journey
        </span>
      </h2>

      {/* TABS */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {["freelance", "cofounder"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 rounded-full font-bold transition ${
              activeTab === tab
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl shadow-blue-500/40"
                : "bg-white/10 text-gray-400 hover:bg-white/20"
            }`}
          >
            {tab === "freelance" ? "Freelance Journey" : "Co-Founder Journey"}
          </button>
        ))}
      </div>

      {/* TIMELINE */}
      <div className="max-w-4xl mx-auto space-y-8">
        {activeTab === "freelance" ? (
          <>
            <Timeline year="2020" title="Started Freelancing" desc="Learning & exploring design world" />
            <Timeline year="2021–22" title="Professional Freelancer" desc="43+ clients globally" />
            <Timeline year="2022–25" title="AI Integratorz" desc="Co-founded & scaled to 97 projects" />
          </>
        ) : (
          <>
            <Timeline year="2022" title="Unique Events Company" desc="Launched & handled 52 events" />
            <Timeline year="2024" title="Marshall – CEO" desc="Leading large scale events" />
            <Timeline year="2025" title="VertexCubes" desc="Founded AI-focused startup" />
          </>
        )}
      </div>
    </section>
  );
}

/* TIMELINE COMPONENT */
function Timeline({ year, title, desc }) {
  return (
    <div className="flex gap-6 group">
      <div className="w-28 text-right text-3xl font-black bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
        {year}
      </div>

      <div className="flex flex-col items-center">
        <span className="w-5 h-5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:scale-125 transition" />
        <span className="w-1 flex-1 bg-gradient-to-b from-blue-500 to-indigo-600" />
      </div>

      <div className="flex-1 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-400 mt-1">{desc}</p>
      </div>
    </div>
  );
}
