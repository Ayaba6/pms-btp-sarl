import React from 'react';
import { ShieldCheck, Handshake, Headphones, Leaf } from 'lucide-react';

export default function WhyUs() {
  const points = [
    { icon: <ShieldCheck size={28} className="text-white" />, title: "Qualité des travaux", desc: "Respect strict des normes en vigueur." },
    { icon: <Handshake size={28} className="text-white" />, title: "Respect des délais", desc: "Livraison de chantier planifiée et rigoureuse." },
    { icon: <Headphones size={28} className="text-white" />, title: "Écoute et proximité", desc: "Un interlocuteur dédié à votre écoute." },
    { icon: <Leaf size={28} className="text-white" />, title: "Développement durable", desc: "Approche éco-responsable et durable." }
  ];

  return (
    <section className="relative py-20 bg-slate-950 text-white px-4 sm:px-8 overflow-hidden">
      {/* Fond d'image route avec superposition sombre */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 z-0"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d0fbb18f154d?q=80&w=1920&auto=format&fit=crop')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80 z-10"></div>

      <div className="max-w-7xl mx-auto relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Accroche principale */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-pmsRed font-semibold uppercase tracking-wider text-xs">Pourquoi nous choisir ?</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Notre engagement, <span className="text-pmsBlue">votre satisfaction</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Chez PMS Sarl, nous nous engageons à fournir des prestations de qualité, à respecter nos engagements et à bâtir des infrastructures durables pour le développement de notre pays.
          </p>
        </div>

        {/* Grille des 4 engagements */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {points.map((p, idx) => (
            <div key={idx} className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm flex items-start gap-4">
              <div className="p-3 bg-pmsBlue rounded-xl shrink-0 shadow-lg">
                {p.icon}
              </div>
              <div>
                <h3 className="font-bold text-white text-base mb-1">{p.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}