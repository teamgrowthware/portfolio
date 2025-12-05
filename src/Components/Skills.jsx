// import React from 'react';
// import SkillsShowcase from './SkillsShowcase';

// export default function ExpertiseShowcase() {
//   const expertiseItems = [
//     { id: 'ก1', title: 'APPLICATION DEVELOPER' },
//     { id: 'ก2', title: 'WEB DEVELOPER' },
//     { id: 'ก3', title: 'DIGITAL MARKETING' },
//     { id: 'ก4', title: 'UI/UX' },
//     { id: 'ก5', title: 'GRAPHIX DESIGNING' },
//     { id: 'ก6', title: 'ETHICAL HACKING'}
//   ];

//   return (
//    <div className="min-h-screen bg-black relative overflow-hidden 
//                 flex flex-col
//                 p-4 md:p-8 pt-28">

//       {/* Geometric pattern background */}
//       <div className="absolute inset-0 opacity-5">
//         {[...Array(80)].map((_, i) => {
//           const shapes = ['rounded-none', 'rounded-lg', 'rounded-full', 'rounded-2xl'];
//           const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
//           return (
//             <div
//               key={i}
//               className={`absolute border border-gray-700 ${randomShape}`}
//               style={{
//                 width: `${Math.random() * 100 + 30}px`,
//                 height: `${Math.random() * 100 + 30}px`,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 transform: `rotate(${Math.random() * 360}deg)`,
//               }}
//             />
//           );
//         })}
//       </div>
      

//     <div className="relative z-10 max-w-7xl w-full">
//         {/* Title */}
//         <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-12 md:mb-20" 
//             style={{ color: '#1E40AF' }}>
//           My Expertise
//         </h1>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-16 md:gap-y-16">
//           {expertiseItems.map((item, index) => (
//             <div
//               key={item.id}
//               className="text-center"
//             >
//               {/* Number */}
//               <div className="text-8xl md:text-9xl lg:text-[180px] font-black text-white leading-none mb-2 md:mb-4"
//                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
//                 {item.id}
//               </div>
              
//               {/* Title */}
//               <div className="text-xl md:text-2xl lg:text-3xl font-bold whitespace-pre-line tracking-wide"
//                    style={{ color: '#1E40AF' }}>
//                 {item.title}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <SkillsShowcase />
//     </div>
//   );
// }

import React from 'react';
import SkillsShowcase from './SkillsShowcase';

export default function ExpertiseShowcase() {
  const expertiseItems = [
    { id: 'ก1', title: 'APPLICATION DEVELOPER' },
    { id: 'ก2', title: 'WEB DEVELOPER' },
    { id: 'ก3', title: 'DIGITAL MARKETING' },
    { id: 'ก4', title: 'UI/UX' },
    { id: 'ก5', title: 'GRAPHIX DESIGNING' },
    { id: 'ก6', title: 'ETHICAL HACKING'}
  ];

  return (
   <div className="min-h-screen bg-black relative overflow-hidden 
                flex flex-col
                p-4 md:p-8 pt-28">

      {/* Geometric pattern background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(80)].map((_, i) => {
          const shapes = ['rounded-none', 'rounded-lg', 'rounded-full', 'rounded-2xl'];
          const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
          return (
            <div
              key={i}
              className={`absolute border border-gray-700 ${randomShape}`}
              style={{
                width: `${Math.random() * 100 + 30}px`,
                height: `${Math.random() * 100 + 30}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          );
        })}
      </div>

      {/* ⭐ FIXED ALIGNMENT — added mx-auto */}
      <div className="relative z-10 max-w-7xl w-full mx-auto">
        {/* Title */}
    
{/* <h1
  className="mt-12 md:mt-24 text-xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-20"

  style={{ color: "#60A5FA" }}
>
My Expertise
</h1> */}

<h1
  className="mt-4 md:mt-10 text-xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-20"
  style={{ color: "#60A5FA" }}
>
  My Expertise
</h1>



        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-16 md:gap-y-16">
          {expertiseItems.map((item) => (
            <div key={item.id} className="text-center">
              
              {/* Number */}
              <div
                className="text-8xl md:text-9xl lg:text-[180px] font-black text-white leading-none mb-2 md:mb-4"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {item.id}
              </div>

              {/* Title */}
              <div
                className="text-xl md:text-2xl lg:text-3xl font-bold whitespace-pre-line tracking-wide"
                style={{ color:"#60A5FA" }}
              >
                {item.title}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Bottom Skills Section — now also aligned */}
      <SkillsShowcase />

    </div>
  );
}
