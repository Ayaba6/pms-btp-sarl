import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import logoPms from '../assets/logo-pms.png';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-4 sm:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Colonne 1 : Identité avec Logo */}
        <div className="space-y-4">
          <div className="bg-white/90 p-2.5 rounded-xl w-fit shadow-sm">
            <img 
              src={logoPms} 
              alt="PMS - Prestige Multi Services BTP Sarl" 
              className="h-10 w-auto object-contain" 
            />
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Votre partenaire de confiance pour le BTP, le forage, la maintenance industrielle, les fournitures et le commerce général.
          </p>
        </div>

        {/* Colonne 2 : Liens rapides */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 border-l-2 border-pmsBlue pl-3">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="#accueil" className="hover:text-pmsBlue transition-colors flex items-center gap-2">
                <ArrowRight size={14} className="text-pmsBlue" /> Accueil
              </a>
            </li>
            <li>
              <a href="#apropos" className="hover:text-pmsBlue transition-colors flex items-center gap-2">
                <ArrowRight size={14} className="text-pmsBlue" /> À propos
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-pmsBlue transition-colors flex items-center gap-2">
                <ArrowRight size={14} className="text-pmsBlue" /> Nos Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-pmsBlue transition-colors flex items-center gap-2">
                <ArrowRight size={14} className="text-pmsBlue" /> Contactez-nous
              </a>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Domaines d'activités */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 border-l-2 border-pmsBlue pl-3">
            Nos Activités
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>• BTP & Constructions</li>
            <li>• Forage Minier & Hydraulique</li>
            <li>• Maintenance & Équipements Industriels</li>
            <li>• Fournitures de Bureaux</li>
            <li>• Transport & Logistique</li>
            <li>• Commerce Général</li>
          </ul>
        </div>

        {/* Colonne 4 : Coordonnées */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 border-l-2 border-pmsBlue pl-3">
            Coordonnées
          </h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="text-pmsBlue shrink-0 mt-1" />
              <span>+226 70 12 97 97 / 76 21 72 71</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-pmsBlue shrink-0" />
              <span>esfsalgo@gmail.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bas de page / Copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 text-center sm:text-left">
        <p>&copy; {new Date().getFullYear()} PMS - Prestige Multi Services BTP Sarl. Tous droits réservés.</p>
        <p>Conçu pour des performances et une visibilité professionnelle optimales.</p>
      </div>
    </footer>
  );
}