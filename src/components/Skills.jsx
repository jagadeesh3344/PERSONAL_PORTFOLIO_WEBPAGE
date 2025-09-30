import React from "react";

const skills = {
  Frontend: [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 90, note: 'Built 5+ projects including Recipe Finder & Crypto Tracker' },
    { name: 'Next.js', level: 80 },
    { name: 'TailwindCSS', level: 90 }
  ],
  Backend: [
    { name: 'Node.js', level: 75 },
    { name: 'Express', level: 70 }
  ],
  Tools: [
    { name: 'Git', level: 80 },
    { name: 'GitHub', level: 80 },
    { name: 'Netlify', level: 70 },
    { name: 'Vercel', level: 80 }
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-12 bg-gray-50 px-4">
      <h2 className="text-3xl font-bold mb-8 text-blue-700">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <ul>
              {items.map((skill) => (
                <li key={skill.name} className="mb-2">
                  <span className="font-medium">{skill.name}</span>
                  {skill.note && <span className="text-xs text-gray-500 ml-2">{skill.note}</span>}
                  <div className="w-full bg-gray-200 rounded h-2 mt-1">
                    <div className="bg-blue-500 h-2 rounded" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
