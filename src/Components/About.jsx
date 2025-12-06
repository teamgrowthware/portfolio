import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("freelance");

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* ===== BACKGROUND GLOWS ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-16 -right-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* BIG BACK TEXT */}
      <h1 className="absolute inset-0 flex items-center justify-center text-[22vw] font-extrabold text-white/5 tracking-widest select-none">
        SELFMADE
      </h1>

      <div className="relative z-10 container mx-auto px-6 py-16">

        {/* ================================= HERO ================================= */}
        <div className="flex flex-col lg:flex-row items-center gap-14 mb-24">

          {/* LEFT */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
                CREACTIVE
              </span>
              <span className="block bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
               TECHNOLOGIST
              </span>
            </h1>

            <div className="flex justify-center lg:justify-start items-center gap-4">
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
              <span className="text-gray-400 uppercase tracking-widest text-sm">
                Creative Visionary
              </span>
            </div>

            <p className="text-gray-300 text-lg max-w-md mx-auto lg:mx-0">
              Transforming ideas into premium digital experiences through
              modern UI/UX & strategy.
            </p>
          </div>

          {/* CENTER IMAGE */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 blur-2xl opacity-30 rounded-full group-hover:opacity-50 transition" />
           
            <img
  src="/images/pratyaksh.jpg"
  alt="Pratyaksh Lutare"
  className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full object-cover 
             border-4 border-blue-500/20 shadow-2xl 
             group-hover:scale-105 transition"
/>

            <span className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              5+ Years
            </span>
          </div>

          {/* RIGHT */}
          <div className="flex-1 text-center lg:text-right space-y-4">
            <h3 className="text-4xl sm:text-5xl font-black">
              BUILD A BETTER <br />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                FUTURE
              </span>
            </h3>
            <p className="text-gray-300 text-lg max-w-md mx-auto lg:mx-0">
              Seamless UI/UX designs that convert users and grow brands.
            </p>
          </div>
        </div>

        {/* ================================= STATS ================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {[
            { value: "145+", label: "Projects Delivered" },
            { value: "5+", label: "Years Experience" },
            { value: "13+", label: "Awards Won" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-blue-500/10 backdrop-blur-xl border border-blue-500/20 hover:shadow-blue-500/30 hover:shadow-2xl transition"
            >
              <h3 className="text-6xl font-black bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                {item.value}
              </h3>
              <p className="mt-2 text-gray-300 font-semibold">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* ============================= JOURNEY ============================= */}
        
        {/* ============================= CTA ============================= */}
        <div className="text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-black">
            Let’s Build Something{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Amazing crafted with code, creativity, and purpose.
            </span>
          </h2>

          
        </div>
      </div>
    </section>
  );
}

/* ===== TIMELINE COMPONENT ===== */
function Timeline({ year, title, desc }) {
  return (
    <div className="flex gap-6 group">
      <div className="w-28 text-right text-3xl font-black bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
        {year}
      </div>
      <div className="flex flex-col items-center">
        <span className="w-5 h-5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-md group-hover:scale-125 transition" />
        <span className="w-1 flex-1 bg-gradient-to-b from-blue-500 to-indigo-600" />
      </div>
      <div className="flex-1 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 backdrop-blur-xl">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-400 mt-1">{desc}</p>
      </div>
    </div>
  );
}
