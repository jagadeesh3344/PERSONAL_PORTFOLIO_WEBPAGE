import React from "react";

const certificates = [
  { name: "freeCodeCamp Responsive Web Design", url: "https://www.freecodecamp.org/certification/fcc_username/responsive-web-design" },
  { name: "Coursera: Web Development", url: "https://coursera.org/verify/course_id" },
  // Add your certificates...
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">Certifications</h2>
      <ul>
        {certificates.map(cert => (
          <li key={cert.name}>
            <a href={cert.url} className="text-blue-600 underline" target="_blank" rel="noopener">{cert.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
