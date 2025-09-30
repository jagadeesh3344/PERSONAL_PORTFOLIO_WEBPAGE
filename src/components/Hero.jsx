import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-blue-500 to-yellow-200 text-center py-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
        I build <span className="text-blue-700">fast</span>, <span className="text-yellow-500">responsive</span> &amp; <span className="text-blue-700">modern</span> websites using React &amp; Next.js.
      </h1>
      <p className="text-lg max-w-xl mb-6 text-gray-700">
        Specialized in React, TailwindCSS, and building clean, performant UIs.
      </p>
      <div className="flex gap-4 mb-4">
        <a href="#projects" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">🚀 View My Work</a>
        <a href="/resume.pdf" download className="bg-yellow-400 text-gray-900 px-6 py-2 rounded hover:bg-yellow-500 transition">
          📄 Download Resume
        </a>
      </div>
      <div className="mt-6">
        <img src="/img/IMG_20231023_201545_209.jpg" alt="U. Venkata Jagadeesh" width={120} height={120} className="rounded-full border-4 border-blue-300 shadow-lg mx-auto" />
      </div>
    </section>
  );
}
