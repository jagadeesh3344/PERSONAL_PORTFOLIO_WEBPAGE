import React from "react";

const testimonials = [
  {
    quote: "Jagadeesh built our landing page quickly and it worked flawlessly.",
    author: "Classmate, College Project",
  },
  {
    quote: "Great collaboration and communication throughout the project.",
    author: "Mentor, Hackathon",
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-blue-700">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="bg-white p-6 rounded-lg shadow text-gray-800">
            <p className="italic">"{t.quote}"</p>
            <footer className="mt-2 text-sm text-gray-500">— {t.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
