import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setMenuOpen(false); // close menu after click
    }
  };

  // Update active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      sections.forEach((sec) => {
        const element = document.getElementById(sec);
        if (element) {
          const top = element.offsetTop - 80;
          const bottom = top + element.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(sec);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">RUTH NZIKWIKIZA</div>
      <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
        {["home", "about", "projects", "skills", "contact"].map((link) => (
          <li
            key={link}
            className={active === link ? "active" : ""}
            onClick={() => scrollToSection(link)}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
}
