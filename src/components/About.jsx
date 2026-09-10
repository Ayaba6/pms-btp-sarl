import React from 'react';
import { Award, Users, Clock, ShieldCheck } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: <Award className="text-pmsBlue" size={24} />, text: "Expertise et savoir-faire" },
    { icon: <Users className="text-pmsBlue" size={24} />, text: "Équipe qualifiée" },
    { icon: <Clock className="text-pmsBlue" size={24} />, text: "Respect des délais" },
    { icon: <ShieldCheck className="text-pmsBlue" size={24} />, text: "Qualité garantie" }
  ];

  return (
    <section id="apropos" className="py-20 bg-white text-slate-900 px-4 sm:px-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Image locale depuis le dossier public */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="/batiment.png" // Remplace par le nom de ton fichier dans public
              alt="Prestige Multi Services BTP Sarl - Chantier" 
              className="w-full h-[380px] object-cover"
            />
          </div>
          {/* Élement décoratif rouge en coin */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pmsRed/10 rounded-2xl -z-10"></div>
        </div>

        {/* Texte explicatif et points forts à droite */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 text-pmsRed font-semibold uppercase tracking-wider text-xs">
            <span className="w-8 h-0.5 bg-pmsRed"></span> À propos de nous
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            PMS Sarl, <span className="text-pmsBlue">votre partenaire de confiance</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            <strong>Prestige Multi Services - BTP Sarl</strong> est une entreprise pluridisciplinaire spécialisée dans le bâtiment, les travaux publics, les forages miniers & hydrauliques, la maintenance industrielle, le transport et le commerce général. Nous mettons à disposition notre expertise et une équipe qualifiée pour répondre aux exigences techniques de vos projets.
          </p>

          {/* Les 4 badges d'atouts en bas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
                <div className="p-2.5 bg-blue-50 rounded-xl">
                  {item.icon}
                </div>
                <span className="text-xs font-bold text-slate-800">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}