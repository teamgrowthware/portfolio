
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Cover from "./Components/Cover";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Journey from "./Components/Journey";
import Projects from "./Components/Projects";
import Awards from "./Components/Awards";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Cover />} />

        {/* Individual Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>
    </>
  );
}
