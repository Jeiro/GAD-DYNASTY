import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Showcase from './components/Showcase.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

//  ----  Add this inside /src/App.jsx  ----
import { useEffect } from "react";

function useRevealAnimations() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.05 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
export default function App() {
  useRevealAnimations();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Showcase />
        {/* Contact MUST be here and id="contact" inside the component */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
