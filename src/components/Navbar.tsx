import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "presentation", label: "Présentation" },
    { id: "competences", label: "Compétences" },
    { id: "formation", label: "Formation" },
    { id: "projets", label: "Projets" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="border-b border-white/10 fixed w-full z-50 bg-accent backdrop-blur shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* CLiquable pour scroll en haut */}
        <h1
          onClick={scrollToTop}
          className="text-2xl font-bold text-primary font-mono cursor-pointer hover:underline underline-offset-4"
        >
          Développeur Fullstack
        </h1>

        {/* Hamburger menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 focus:outline-none text-2xl font-mono"
          >
            ☰
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-gray-200 font-medium font-mono">
          {sections.map(({ id, label }) => (
            <li
              key={id}
              className="cursor-pointer hover:underline underline-offset-4 transition-colors duration-200"
              onClick={() => scrollTo(id)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-darkpanel text-gray-200 shadow-md py-4 font-mono">
          {sections.map(({ id, label }) => (
            <li
              key={id}
              className="py-2 hover:text-primary"
              onClick={() => scrollTo(id)}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
