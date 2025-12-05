// import React from "react";

// export default function Cover() {
//   return (
//     <section className="relative min-h-screen bg-black text-white overflow-hidden">
//       {/* BACKGROUND TEXTURE */}
//       <div
//         className="absolute inset-0 opacity-40"
//         style={{
//           backgroundImage: "radial-gradient(#2a2a2a 1px, transparent 1px)",
//           backgroundSize: "22px 22px",
//         }}
//       />

//       {/* ================= MAIN CONTENT ================= */}
//       <div className="relative z-10 flex flex-col items-center justify-start text-center px-4 pt-24">
//         {/* CREATIVE TEXT */}
//         <h2 className="text-blue-400 text-4xl md:text-5xl font-[cursive] mb-3">
//           Creative
//         </h2>

//         {/* PORTFOLIO TITLE */}
//         <h1 className="font-extrabold leading-none tracking-widest text-[18vw] md:text-[14vw]">
//           PORTFOLIO
//         </h1>

//         {/* LEFT BADGE */}
//         <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2">
//           <span className="px-6 py-3 border border-blue-400 text-blue-300 rounded-full text-sm backdrop-blur-md bg-blue-500/10">
//             Graphic Design
//           </span>
//         </div>

//         {/* RIGHT BADGE */}
//         <div className="absolute right-4 md:right-12 top-[40%]">
//           <span className="px-6 py-3 border border-blue-400 text-blue-300 rounded-full text-sm backdrop-blur-md bg-blue-500/10">
//             UI / UX Design
//           </span>
//         </div>
//       </div>

//       {/* ================= INTRO ================= */}
//       <div className="absolute bottom-20 left-1/2 -translate-x-1/2 max-w-3xl text-center px-6 z-10">
//         <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
//           I’m{" "}
//           <span className="text-blue-400 font-semibold">Pratyaksh Lutare</span>,
//           Director at{" "}
//           <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent font-semibold">
//             VortexCubes
//           </span>
//           , with <span className="text-blue-400 font-semibold">5+ years</span>{" "}
//           in the IT industry and{" "}
//           <span className="text-blue-400 font-semibold">145+</span> successfully
//           delivered projects. <br />
//           I specialize in creating{" "}
//           <span className="text-blue-300 font-medium">
//             innovative, high-quality digital solutions
//           </span>{" "}
//           that drive{" "}
//           <span className="text-blue-400 font-semibold">
//             real business growth
//           </span>
//           .
//         </p>
//       </div>

//       {/* ================= PRESENTED BY ================= */}
//       <p className="absolute bottom-16 right-12 text-sm text-gray-400 z-10">
//         Presented By :{" "}
//         <span className="text-blue-400 font-semibold">Pratyaksh Lutare</span>
//       </p>

//       <p className="absolute bottom-12 right-12 text-sm text-gray-400 z-10">
//         Founder of :{" "}
//         <span className="text-blue-400 font-semibold">Vortexcubes</span>
//       </p>

//       {/* ⭐ NEW: CONTACT NUMBER */}
//       <p className="absolute bottom-8 right-12 text-sm text-gray-400 z-10">
//         Contact :{" "}
//         <span className="text-blue-400 font-semibold">+91 7049820057</span>
//       </p>

//       {/* SOCIAL ICONS */}
//       <div className="absolute left-6 bottom-10 flex gap-4 text-blue-400 text-xl z-10">
//         <i className="ri-instagram-line cursor-pointer hover:scale-110 transition" />
//         <i className="ri-facebook-line cursor-pointer hover:scale-110 transition" />
//         <i className="ri-linkedin-line cursor-pointer hover:scale-110 transition" />
//       </div>
//     </section>
//   );
// }

import React from "react";

export default function Cover() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* BACKGROUND TEXTURE */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#2a2a2a 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 flex flex-col items-center justify-start text-center px-4 pt-24">
        {/* CREATIVE TEXT */}
        <h2 className="text-blue-400 text-4xl md:text-5xl font-[cursive] mb-3">
          Creative
        </h2>

        {/* PORTFOLIO TITLE */}
        <h1 className="font-extrabold leading-none tracking-widest text-[18vw] md:text-[14vw]">
          PORTFOLIO
        </h1>

        {/* LEFT BADGE */}
        <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2">
          <span className="px-6 py-3 border border-blue-400 text-blue-300 rounded-full text-sm backdrop-blur-md bg-blue-500/10">
            Graphic Design
          </span>
        </div>

        {/* RIGHT BADGE */}
        <div className="absolute right-4 md:right-12 top-[40%]">
          <span className="px-6 py-3 border border-blue-400 text-blue-300 rounded-full text-sm backdrop-blur-md bg-blue-500/10">
            UI / UX Design
          </span>
        </div>
      </div>

      {/* ================= INTRO (UPPER + CLEAN 2-LINES) ================= */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 max-w-2xl md:max-w-3xl text-center px-6 z-10">
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          I’m{" "}
          <span className="text-blue-400 font-semibold">Pratyaksh Lutare</span>,{" "}
          Director at{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent font-semibold">
            VortexCubes
          </span>{" "}
          with <span className="text-blue-400 font-semibold">5+ years</span> in the IT
          industry & <span className="text-blue-400 font-semibold">145+</span> delivered
          projects.I specialize in building{" "}innovative, high-quality digital solutions that drive{" "} real business growth
        </p>

        {/* <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mt-4">
          
          <span className="text-blue-300 font-medium">
            innovative, high-quality digital solutions
          </span>{" "}
          that drive{" "}
          <span className="text-blue-400 font-semibold">real business growth</span>.
        </p> */}
      </div>

      {/* ================= BOTTOM DETAILS ================= */}
      <p className="absolute bottom-16 right-12 text-sm text-gray-400 z-10">
        Presented By :{" "}
        <span className="text-blue-400 font-semibold">Pratyaksh Lutare</span>
      </p>

      <p className="absolute bottom-12 right-12 text-sm text-gray-400 z-10">
        Founder of :{" "}
        <span className="text-blue-400 font-semibold">Vortexcubes</span>
      </p>

      {/* CONTACT NUMBER */}
      <p className="absolute bottom-8 right-12 text-sm text-gray-400 z-10">
        Contact :{" "}
        <span className="text-blue-400 font-semibold">+91 7049820057</span>
      </p>

      {/* SOCIAL ICONS */}
      <div className="absolute left-6 bottom-10 flex gap-4 text-blue-400 text-xl z-10">
        <i className="ri-instagram-line cursor-pointer hover:scale-110 transition" />
        <i className="ri-facebook-line cursor-pointer hover:scale-110 transition" />
        <i className="ri-linkedin-line cursor-pointer hover:scale-110 transition" />
      </div>
    </section>
  );
}
