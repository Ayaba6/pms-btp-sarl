import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoPms from '../assets/logo-pms.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src={logoPms} 
            alt="PMS - Prestige Multi Services BTP Sarl" 
            className="h-12 sm:h-14 w-auto object-contain" 
          />
        </Link>

        {/* Liens pour grand écran */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-700">
          <Link to="/" className="hover:text-pmsBlue transition-colors">Accueil</Link>
          <Link to="/apropos" className="hover:text-pmsBlue transition-colors">À propos</Link>
          <Link to="/services" className="hover:text-pmsBlue transition-colors">Nos Services</Link>
          <Link to="/realisations" className="hover:text-pmsBlue transition-colors">Nos Réalisations</Link>
          <Link to="/contact" className="bg-pmsBlue text-white px-5 py-2.5 rounded-lg shadow hover:bg-blue-700 transition-all">
            Contactez-nous
          </Link>
        </div>

        {/* Bouton Menu Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-slate-700 focus:outline-none"
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menu Mobile déroulant */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-slate-700 font-medium hover:text-pmsBlue"
          >
            Accueil
          </Link>
          <Link 
            to="/apropos" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-slate-700 font-medium hover:text-pmsBlue"
          >
            À propos
          </Link>
          <Link 
            to="/services" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-slate-700 font-medium hover:text-pmsBlue"
          >
            Nos Services
          </Link>
          <Link 
            to="/realisations" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-slate-700 font-medium hover:text-pmsBlue"
          >
            Nos Réalisations
          </Link>
          <div className="pt-2">
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block text-center bg-pmsBlue text-white py-3 rounded-lg shadow font-medium"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}