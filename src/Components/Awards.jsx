import React from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Star, Medal, Sparkles } from "lucide-react";

export default function Awards() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">

        {/* PAGE TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">
            <span className="text-blue-400">Awards</span>{" "}
            <span className="text-white">&</span>{" "}
            <span className="text-blue-400">Achievements</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            A showcase of awards, professional achievements,
            certifications, and recognitions.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ================= LEFT : AWARDS ================= */}
          <div className="relative border-l border-blue-500/30 space-y-12">
            <h2 className="text-3xl font-bold text-blue-400 mb-8">
              Awards & Achievements
            </h2>

            {awardsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-14"
              >
                {/* ICON */}
                <span className="absolute -left-6 top-2 p-3 rounded-full bg-blue-500/20 text-blue-400">
                  {item.icon}
                </span>

                {/* CARD */}
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/20 transition">
                  <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-2">
                    {item.description}
                  </p>
                  <span className="text-sm text-blue-400">
                    {item.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

         
          
{/* ================= RIGHT : CERTIFICATES ================= */}
<div className="relative border-l border-blue-500/30 space-y-12">
  <h2 className="text-3xl font-bold text-blue-400 mb-8">
    Certifications & Recognition
  </h2>

  {certificatesData.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-14"
    >
      {/* ICON */}
      <span className="absolute -left-6 top-2 p-3 rounded-full bg-blue-500/20 text-blue-400">
        {item.icon}
      </span>

      {/* CARD */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/20 transition">
        <h3 className="text-xl font-semibold mb-2">
          {item.title}
        </h3>
        <p className="text-gray-300 mb-2">
          {item.description}
        </p>
        <span className="text-sm text-blue-400">
          {item.year}
        </span>
      </div>
    </motion.div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
}

/* ================= DATA ================= */

const awardsData = [
  {
    title: "145+ Projects Successfully Delivered",
    description:
      "Delivered over 145 projects with an 89% client retention rate.",
    year: "Professional Milestone",
    icon: <Sparkles size={20} />,
  },
  {
    title: "Worked with VC-funded Startups",
    description:
      "Collaborated with startups backed by leading venture capital firms.",
    year: "Startup Ecosystem",
    icon: <Trophy size={20} />,
  },
  {
    title: "Top Emerging Entrepreneur – 2024",
    description:
      "Recognized by Startup Connect India as a top emerging entrepreneur.",
    year: "2024",
    icon: <Award size={20} />,
  },
  {
    title: "Young Innovator Award Nominee",
    description:
      "Nominated under IT & Digital Services category.",
    year: "Innovation Recognition",
    icon: <Medal size={20} />,
  },

  // {
  //   title: "Best Innovation-Driven Startup Award",
  //   description:
  //     "Awarded for excellence in innovation and execution.",
  //   year: "2024",
  //   icon: <Award size={20} />,
  // },
];

const certificatesData = [
  {
    title: "Certified UI/UX Expert",
    description:
      "Industry-recognized professional certification in UI/UX design.",
    year: "Professional Certification",
    icon: <Medal size={20} />,
  },
  {
    title: "Ethical Hacking Certification",
    description:
      "Certified by Gujarat University in Ethical Hacking.",
    year: "2024",
    icon: <Medal size={20} />,
  },
  
  {
    title: "Guest Speaker – Tech & Entrepreneurship",
    description:
      "Invited speaker at Sage University.",
    year: "Speaking Engagement",
    icon: <Sparkles size={20} />,
  },
  {
    title: "Featured as Young Tech Professional",
    description:
      "Featured in a local business magazine.",
    year: "Media Feature",
    icon: <Star size={20} />,
  },
];



