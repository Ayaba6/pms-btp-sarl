import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Projects from '../components/Projects';
import Partners from '../components/Partners';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Projects />
      <Partners />
    </main>
  );
}