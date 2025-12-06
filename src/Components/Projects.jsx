import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Kaiteki.ai",
      date: "2024",
      category: "Product UI, Ecommerce, UX",
      desc: "App helps users track daily activity, steps, calories, and fitness progress.visual goals, progress rings, and simple daily insights.",
      image: "/images/mobile4.png",
    },
    {
      title: "Worzo",
      date: "2024",
      category: "Product UI, Ecommerce, UX",
      desc: "This website showcases Worzo electric scooters, highlighting models, features, and ICAT-approved safety standards, financing options, and dealer locations",
      image: "/images/worzo1.jpeg",
    },
    {
      title: "Fasco",
      date: "2024",
      category: "Fashion Ecommerce, UI/UX",
      desc: "This fashion e-commerce website presents a clean, modern shopping experience with highlighted collections and brand-focused layouts.",
      image: "/images/homepagemockup.png",
    },
    {
      title: "Ecommerce Web – FASCO",
      date: "2024",
      category: "Product UI, Ecommerce, UX",
      desc: "It helps users browse premium apparel, discover offers, and shop effortlessly.Clean ecommerce interface with structured product hierarchy.",
      image: "/images/shoppagemockup.png",
    },
    {
      title: "Best Selling Web",
      date: "2024",
      category: "Web UI, Ecommerce, UX",
      desc: "This best-selling product page highlights top-rated items with pricing, ratings, and quick add-to-cart options.",
      image: "/images/bestsellingmockup.png",
    },
    {
      title: "Service App",
      date: "2024",
      category: "Service Platform, UX",
      desc: "This app provides a smooth food discovery and ordering experience, helping users explore nearby restaurants and popular dishes..",
      image: "/images/home screen.png",
    },
    {
      title: "Simpler Host",
      date: "2024",
      category: "Hotel Management, Web UI",
      desc: "This Hotel management system helps manage room bookings, guests, and operations efficiently from one place platform for seamless booking experiences.",
      image: "/images/simplerhosthotel.png",
    },
    {
      title: "Future Tech Podcast",
      date: "2024",
      category: "Podcast App, UI/UX",
      desc: "It allows users to discover, stream, and enjoy podcasts effortlessly through an intuitive dark-themed interface.episodes and smart recommendations.",
      image: "/images/podacastmockup.png",
    },
    {
      title: "Product Page UI",
      date: "2024",
      category: "Product UI, Ecommerce",
      desc: "This product detail page presents items with high-quality visuals, pricing, and variant selection in a clean layout.",
      image: "/images/product mockup.png",
    },
  ];

  return (
   
    <div className="w-full bg-black px-6 md:px-20 pt-16 pb-1">
  <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12 text-blue-400 text-center">
    My Projects
  </h2>


      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            // className="bg-white/10 backdrop-blur-xl border border-white/20 
            //            rounded-2xl shadow-lg overflow-hidden 
            //            hover:scale-[1.03] hover:shadow-2xl hover:border-blue-400
            //            transition-all duration-300 cursor-pointer"
            className="bg-blue-900/30 backdrop-blur-xl border border-blue-500/20 
             rounded-2xl shadow-lg overflow-hidden 
             hover:scale-[1.03] hover:shadow-2xl hover:border-blue-400
             transition-all duration-300 cursor-pointer"
          >
            {/* IMAGE → Perfect for mockups */}
            <div className="w-full h-56 bg-white/10 backdrop-blur flex items-center justify-center overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain p-3 transition-all duration-300 hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 text-white">
              
              {/* DATE */}
              <p className="text-xs text-blue-200 mb-1">{project.date}</p>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

              {/* CATEGORY → UPDATED HERE */}
              <p className="text-xs text-blue-400 font-medium mb-3">
                {project.category}
              </p>

              {/* DESCRIPTION */}
              <p className="text-sm text-blue-100 leading-relaxed border-t border-white/20 pt-3">
                {project.desc}
              </p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
