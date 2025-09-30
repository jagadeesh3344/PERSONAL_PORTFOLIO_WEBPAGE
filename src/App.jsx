import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import Certifications from "./components/Certifications";
import GitHubActivity from "./components/GitHubActivity";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Testimonials />
      <Certifications />
      <GitHubActivity />
      <Contact />
    </div>
  );
}
