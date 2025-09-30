import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-white py-12 px-4">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">About Me</h2>
      <p className="text-lg mb-4">
        I’m a B.Tech student passionate about building real-world web apps. I’ve worked on projects ranging from recipe-finding websites to crypto trackers, focusing on clean code and user-friendly design.
      </p>
      <ul className="mb-4 list-disc ml-6 text-gray-700">
        <li>3+ years of learning and coding experience</li>
        <li>Core tech: React, Next.js, Node.js, TailwindCSS, Python</li>
        <li>Loves turning ideas into responsive, scalable applications</li>
      </ul>
      <div className="flex items-center gap-4">
        <img src="/profile.jpg" alt="U. Venkata Jagadeesh" width={90} height={90} className="rounded-full" />
        <span className="text-gray-500">Hyderabad, India</span>
      </div>
    </section>
  );
}
