import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Journey", path: "/journey" },
    { name: "Projects", path: "/projects" },
    { name: "Awards", path: "/awards" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black px-6 py-5 text-sm uppercase tracking-widest text-gray-300">
      
      <div className="flex justify-between items-center">
        {/* LOGO / NAME */}
        <div className="text-white font-semibold tracking-wider">
         PRATYAKSH LUTARE
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8">
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-6 flex flex-col gap-6 text-center">
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
