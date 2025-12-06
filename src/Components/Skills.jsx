import React from 'react';
import SkillsShowcase from './SkillsShowcase';

export default function ExpertiseShowcase() {
  const expertiseItems = [
    { id: 'ก1', title: 'APPLICATION DEVELOPER' },
    { id: 'ก2', title: 'WEB DEVELOPER' },
    { id: 'ก3', title: 'DIGITAL MARKETING' },
    { id: 'ก4', title: 'UI/UX' },
    { id: 'ก5', title: 'GRAPHIC DESIGNING' },
    { id: 'ก6', title: 'ETHICAL HACKING'},
    { id: 'ก7', title: 'WORDPRESS' },
    { id: 'ก8', title: 'SHOPIFY' },
    { id: 'ก9', title: 'BUSINESS DEVELOPMENT EXECUTIVE'}
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
       <div className="w-full bg-black px-6 md:px-20 pt-16 pb-1">
  <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12 text-blue-400 text-center">
    My Expertise
  </h2>



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
