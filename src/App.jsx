
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Cover from "./Components/Cover";
import Journey from "./Components/journey";
import Awards from "./Components/Awards";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
// import SkillsShowcase from "./Components/SkillsShowcase";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/about" element={<About />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/journey" element={<Journey/>}/>
       <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}
