import React, { useState } from "react";
import {
  Linkedin,
  Mail,
  Heart,
  ArrowUp,
  Code,
  Briefcase,
  Award,
  Instagram,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing! 🎉");
    setEmail("");
  };

  return (
    <footer className="bg-black text-white relative">
      {/* Decorative gradient line */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Pratyaksh
              </span>
              <br />
              <span className="text-white text-2xl">Lutare</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer crafting innovative digital solutions with
              passion and precision.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              {/* <div className="flex items-center text-blue-400">
                <Code className="w-5 h-5 mr-2" />
                <span className="text-sm text-gray-300">Clean Code</span>
              </div> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              What I Do
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Web Development
              </li>
              <li className="text-gray-400 text-sm flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                UI/UX Design
              </li>
              <li className="text-gray-400 text-sm flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Mobile Apps
              </li>
              <li className="text-gray-400 text-sm flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                API Development
              </li>
            </ul>
          </div>

          {/* Connect */}
       
          <div className="w-full flex flex-col items-center md:items-end gap-3 pt-3">
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/_pratyakshhhh_/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="w-6 h-6 text-blue-400 hover:text-white transition" />
              </a>

              <a
                href="https://www.linkedin.com/in/pratyaksh-lutare-3620a2235"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="w-6 h-6 text-blue-400 hover:text-white transition" />
              </a>

              <a
                href="https://wa.me/917049820057"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="w-6 h-6 text-blue-400 hover:text-white transition" />
              </a>
            </div>

            <p className="text-sm text-gray-400">
              Contact :{" "}
              <a
                href="tel:+917049820057"
                className="text-blue-400 font-semibold hover:underline"
              >
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

      {/* Stats Section */}
      <div className="border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-400">145+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-400">30+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-400">5+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-400">100%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

  

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear}{" "}
              <span className="text-blue-400 font-semibold">
                Pratyaksh Lutare
              </span>
              . All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Crafted with</span>
              <Heart className="w-4 h-4 text-blue-500 fill-blue-500 animate-pulse" />
              <span>& lots of</span>
              <Code className="w-4 h-4 text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
