import React from "react";

const projects = [
  {
    name: 'Recipe Finder',
    problem: 'Users wanted to find recipes by ingredients easily.',
    solution: 'Built a recipe finder app with multi-language support.',
    stack: 'React, TailwindCSS, API integration',
    role: 'Developed frontend, handled API calls, and designed UI.',
    challenge: 'Implemented caching for faster API calls.',
    demo: 'https://recipe-finder-demo.vercel.app',
    github: 'https://github.com/jagadeesh3344/Recipe_Finding_mini_pro',
    image: '/projects/recipe-finder.png',
  },
  {
    name: 'Crypto Tracker',
    problem: 'People wanted to track crypto prices in real time.',
    solution: 'Built a real-time crypto tracker with charts.',
    stack: 'React, Chart.js, API integration',
    role: 'Built all features, designed UI/UX, integrated API.',
    challenge: 'Handled API rate limits and optimized updates.',
    demo: 'https://cryptotracker.vercel.app',
    github: 'https://github.com/jagadeesh3344/cryptotrackers',
    image: '/projects/crypto-tracker.png',
  },
  // Add more projects as needed...
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 bg-gray-50 px-4">
      <h2 className="text-3xl font-bold mb-8 text-blue-700">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <div key={proj.name} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition group">
            <img src={proj.image} alt={proj.name} className="mb-4 rounded-lg border" />
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition">{proj.name}</h3>
            <p><b>Problem:</b> {proj.problem}</p>
            <p><b>Solution:</b> {proj.solution}</p>
            <p><b>Tech Stack:</b> {proj.stack}</p>
            <p><b>My Role:</b> {proj.role}</p>
            <p className="text-sm italic mb-2 text-gray-500">{proj.challenge}</p>
            <div className="flex gap-4 mt-2">
              <a href={proj.demo} target="_blank" rel="noopener" className="text-blue-600 underline">Live Demo</a>
              <a href={proj.github} target="_blank" rel="noopener" className="text-gray-700 underline">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
