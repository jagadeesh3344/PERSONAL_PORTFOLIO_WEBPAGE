import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">Resume</h2>
      <ul className="mb-4">
        <li>📌 B.Tech Student @ Sreyas Institute of Engineering & Technology</li>
        <li>💻 Full-stack projects in React, Node.js, and TailwindCSS</li>
      </ul>
      <a href="/resume.pdf" download className="bg-yellow-400 text-gray-900 px-6 py-2 rounded hover:bg-yellow-500 transition">
        Download Resume
      </a>
    </section>
  );
}
