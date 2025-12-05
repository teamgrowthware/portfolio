// import React from "react";

// export default function Projects() {
//   // const sliderImages = [
//   //   "/images/bestsellingmockup.png",
//   //   "/images/cart page mockup.png",
//   //   "/images/checkout mockup.png",
//   //   "/images/home page mockup.png",
//   //   "/images/home screen mockup.png",
//   //   "/images/hotelsearchmockup.png",
//   //   "/images/kid detail mockup.png",
//   //   "/images/product mockup.png",
//   //   "/images/reward screen mockup.png",
//   //   "/images/serviceapp.png",
//   //   "/images/shop page mockup.png",
//   //   "/images/shopagemockup.png",
//   //   "/images/worzo1.jpeg",
//   //   "/images/worzo2 - Copy.jpeg",
//   //   "/images/worzo3 - Copy.jpeg",
//   //   "/images/worzo4 - Copy.jpeg",
//   // ];

//   const projects = [
//     {
//       title: "Kaiteki.ai",
//       date: "2024",
//       category: "Product UI, Ecommerce, UX",
//       desc: "An elegant product view layout with gallery, options, and smooth content hierarchy.",
//       image: "/images/mobile4.png",
//     },
//     {
//       title: "Worzo",
//       date: "2024",
//       category: "Product UI, Ecommerce, UX",
//       desc: "An elegant product view layout with gallery, options, and smooth content hierarchy.",
//       image: "/images/worzo1.jpeg",
//     },
//     {
//       title: "Fasco",
//       date: "2024",
//       category: "Travel App, UI/UX",
//       desc: "“Fasco is an online clothing store designed for effortless browsing, secure checkout, and trendy fashion collections.”",
//       image: "/images/homepagemockup.png",
//     },
//     {
//       title: "Ecommerce Web- FASCO",
//       date: "2024",
//       category: "Product UI, Ecommerce, UX",
//       desc: "An elegant product view layout with gallery, options, and smooth content hierarchy.",
//       image: "/images/shoppagemockup.png",
//     },
//     {
//       title: "Best Selling web",
//       date: "2024",
//       category: "Web UI, Ecommerce, UX",
//       desc: "A high-conversion ecommerce best-selling page design with modern layout and optimized product visibility.",
//       image: "/images/bestsellingmockup.png",
//     },
//     {
//       title: "Service App",
//       date: "2024",
//       category: "Ecommerce, Web UI, UX",
//       desc: "“A smart service platform designed to deliver efficient, reliable, and user-focused solutions.”",
//       image: "/images/home screen.png",
//     },
//     {
//       title: "Simpler Host",
//       date: "2024",
//       category: "Ecommerce Checkout, UI/UX",
//       desc: "“A modern hotel management web platform designed to simplify bookings, streamline operations, and enhance guest experience.”",
//       image: "/images/simplerhosthotel.png",
//     },
//     {
//       title: "Future Tech",
//       date: "2024",
//       category: "Website UI, Branding, UX",
//       desc: " Poadcast app A clean, intuitive podcast app design focused on effortless discovery, immersive listening, and seamless user experience.”.",
//       image: "/images/podacastmockup.png",
//     },
//     {
//       title: "Product Page UI",
//       date: "2024",
//       category: "Product UI, Ecommerce, UX",
//       desc: "An elegant product view layout with gallery, options, and smooth content hierarchy.",
//       image: "/images/product mockup.png",
//     },
//   ];

//   return (
//     // <div className="min-h-screen w-full bg-black px-6 md:px-20 py-10">
//     <div className="min-h-screen w-full 
//                   bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 
//                   px-6 md:px-20 py-10">

//       <h2 className="text-4xl font-bold mb-6 text-white">Projects</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-white p-3 rounded-xl shadow-sm border border-gray-200 
//            hover:shadow-md transition duration-300 
//            max-w-sm mx-auto"

            
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="rounded-xl mb-4 w-full object-cover"
//             />

//             <p className="text-sm text-gray-500 mb-1">{project.date}</p>
//             <h3 className="text-xl font-semibold text-gray-900 mb-1">
//               {project.title}
//             </h3>
//             <p className="text-sm text-purple-500 mb-2">{project.category}</p>
//             <p className="text-gray-600 text-sm">{project.desc}</p>
//           </div>
//         ))}
//       </div>

      
//       {/* SLIDER */}
//       {/* <div className="mt-24 w-full overflow-hidden">
//         <div
//           className="flex gap-6"
//           style={{
//             width: "max-content",
//             animation: "scrollLeft 15s linear infinite",
//           }}
//         >
//           {sliderImages.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               className="h-60 rounded-lg object-cover shadow-md"
//               alt=""
//             />
//           ))}

//           {sliderImages.map((img, i) => (
//             <img
//               key={`copy-${i}`}
//               src={img}
//               className="h-60 rounded-lg object-cover shadow-md"
//               alt=""
//             />
//           ))}
//         </div>
//       </div> */}
//       {/* 
//       <style>{`
//         @keyframes scrollLeft {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//       `}</style> */}



//     </div>
//   );
// }



import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Kaiteki.ai",
      date: "2024",
      category: "Product UI, Ecommerce, UX",
      desc: "An elegant product view layout with gallery, options, and smooth content hierarchy.",
      image: "/images/mobile4.png",
    },
    {
      title: "Worzo",
      date: "2024",
      category: "Product UI, Ecommerce, UX",
      desc: "An elegant product view layout with gallery, options, and smooth content hierarchy.",
      image: "/images/worzo1.jpeg",
    },
    {
      title: "Fasco",
      date: "2024",
      category: "Fashion Ecommerce, UI/UX",
      desc: "Online clothing store with effortless browsing and smooth checkout flow.",
      image: "/images/homepagemockup.png",
    },
    {
      title: "Ecommerce Web – FASCO",
      date: "2024",
      category: "Product UI, Ecommerce, UX",
      desc: "Clean ecommerce interface with structured product hierarchy.",
      image: "/images/shoppagemockup.png",
    },
    {
      title: "Best Selling Web",
      date: "2024",
      category: "Web UI, Ecommerce, UX",
      desc: "High-conversion best-selling page with optimized product visibility.",
      image: "/images/bestsellingmockup.png",
    },
    {
      title: "Service App",
      date: "2024",
      category: "Service Platform, UX",
      desc: "Smart service platform with clean UX and functionality.",
      image: "/images/home screen.png",
    },
    {
      title: "Simpler Host",
      date: "2024",
      category: "Hotel Management, Web UI",
      desc: "Hotel management platform for seamless booking experiences.",
      image: "/images/simplerhosthotel.png",
    },
    {
      title: "Future Tech Podcast",
      date: "2024",
      category: "Podcast App, UI/UX",
      desc: "Intuitive podcast app interface for immersive listening.",
      image: "/images/podacastmockup.png",
    },
    {
      title: "Product Page UI",
      date: "2024",
      category: "Product UI, Ecommerce",
      desc: "Elegant product detail layout with gallery system.",
      image: "/images/product mockup.png",
    },
  ];

  return (
    // <div className="min-h-screen w-full bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 px-6 md:px-20 py-16">
    <div className="min-h-screen w-full bg-black px-6 md:px-20 py-16">

      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-400 text-center">
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
