import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Importation du Footer

// Import des composants de la page d'accueil
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Projects from './components/Projects';
import Partners from './components/Partners';

// Import des autres pages
import ServicesPage from './pages/ServicesPage';
import RealisationsPage from './pages/RealisationsPage';
import ContactPage from './pages/ContactPage';

// Page d'accueil combinant tous les composants principaux
function Home() {
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

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col">
        <TopBar />
        <Navbar />
        
        {/* Corps dynamique selon la route active */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apropos" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/realisations" element={<RealisationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

        {/* Le Footer s'affichera désormais en bas de toutes les pages */}
        <Footer />
      </div>
    </Router>
  );
}