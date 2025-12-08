import About from "./About";
import Skills from "./Skills";
import Journey from "./Journey";
import Projects from "./Projects";
import Awards from "./Awards";
import Footer from "./Footer";


import { Instagram,Mail, Linkedin, MessageCircle } from "lucide-react";


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">

      {/* Blue Glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* ✅ HERO SECTION (ONLY section with min-h-screen) */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pb-8">

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="mt-14 text-7xl sm:text-8xl md:text-9xl xl:text-[12rem] font-serif text-blue-500 leading-none">
            Portfolio
          </h1>
        </div>

        {/* Intro */}
        <div className="max-w-4xl mx-auto -mt-2 space-y-5 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            I'm Pratyaksh Lutare,
          </h2>

          <p className="text-lg text-blue-400 font-semibold">
            Director at 'VortexCubes', specializing in{" "}
            <span className="text-white">
              innovative, high-quality digital solutions
            </span>{" "}
            with <span className="text-white">5+ years</span> experience and{" "}
            <span className="text-white">145+</span> successful projects.
            Expertise in web development, UI/UX, e-commerce, AI & cloud systems.
          </p>

          {/* Social Icons + Contact */}
          <div className="w-full flex flex-col items-center md:items-end gap-3 pt-3">
            <div className="flex gap-4">
              <a href="https://www.instagram.com/_pratyakshhhh_/" target="_blank" rel="noreferrer">
                <Instagram className="w-6 h-6 text-blue-400 hover:text-white transition" />
              </a>

              <a href="https://www.linkedin.com/in/pratyaksh-lutare-3620a2235" target="_blank" rel="noreferrer">
                <Linkedin className="w-6 h-6 text-blue-400 hover:text-white transition" />
              </a>

              <a href="https://wa.me/917049820057" target="_blank" rel="noreferrer">
                <MessageCircle className="w-6 h-6 text-blue-400 hover:text-white transition" />
              </a>
            </div>

            <p className="text-sm text-gray-400">
              Contact :{" "}
              <a href="tel:+917049820057" className="text-blue-400 font-semibold hover:underline">
                +91 7049820057
              </a>
            </p>

<p className="text-sm text-gray-400 flex items-center gap-2">
  <Mail className="w-4 h-4 text-blue-400" />
  <a
    href="mailto:pratyaksh@vortexcubes.com"
    className="hover:text-blue-400 transition font-medium"
  >
    pratyaksh311@gmail.com
  </a>
</p>





          </div>
        </div>
      </div>

      {/* ✅ ALL OTHER SECTIONS (GAP FIXED HERE ✅) */}
   

      <div className="-space-y-14">
  <About />
  <Skills />
  <Journey />
  <Projects />
  <Awards />
  <Footer/>
  
</div>


      {/* Bottom Scroll Text */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm py-4">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="mx-8 text-blue-400 font-semibold">
              get to know me
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>

     
    </div>
  );
}
