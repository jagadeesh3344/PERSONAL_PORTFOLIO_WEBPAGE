import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-white shadow">
      <div className="flex items-center gap-2">
        <span className="bg-primary text-white font-bold text-2xl rounded-full px-3 py-1">VJ</span>
        <span className="text-lg font-semibold">Jagadeesh</span>
      </div>
      <div className="flex gap-6">
        <a href="#about" className="hover:text-blue-700">About</a>
        <a href="#projects" className="hover:text-blue-700">Projects</a>
        <a href="#skills" className="hover:text-blue-700">Skills</a>
        <a href="#resume" className="hover:text-blue-700">Resume</a>
        <a href="#contact" className="hover:text-blue-700">Contact</a>
      </div>
    </nav>
  );
}
