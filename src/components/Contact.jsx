import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">Let’s work together 🚀</h2>
      <p className="mb-4">
        Got an idea or project? I’d love to collaborate and bring it to life.
        Contact me via the form, email, or LinkedIn.
      </p>
      <ul className="mb-4">
        <li>📍 Hyderabad, India</li>
        <li>💬 Usually reply within 24 hours.</li>
      </ul>
      <form className="max-w-md mx-auto grid gap-4">
        {/* Hook up to backend/email API e.g. Formspree, EmailJS */}
        <input type="text" name="name" required placeholder="Your Name" className="border rounded px-3 py-2" />
        <input type="email" name="email" required placeholder="Your Email" className="border rounded px-3 py-2" />
        <textarea name="message" required placeholder="Your Message" className="border rounded px-3 py-2" rows={5}></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Send Message</button>
      </form>
      <div className="mt-6 flex gap-4 justify-center">
        <a href="mailto:your.email@example.com" className="text-blue-600 underline">Email</a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener" className="text-blue-600 underline">LinkedIn</a>
      </div>
    </section>
  );
}
