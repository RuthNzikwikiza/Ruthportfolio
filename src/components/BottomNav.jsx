import React from "react";
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa";

export default function BottomNav() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bottom-nav">
      <FaHome onClick={() => scrollToSection("home")} title="Home" />
      <FaUser onClick={() => scrollToSection("about")} title="About" />
      <FaProjectDiagram onClick={() => scrollToSection("projects")} title="Projects" />
      <FaTools onClick={() => scrollToSection("skills")} title="Skills" />
      <FaEnvelope onClick={() => scrollToSection("contact")} title="Contact" />
    </div>
  );
}
