import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Projects() {
  const projectsList = [
    {
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18f154d?q=80&w=800&auto=format&fit=crop",
      title: "Construction de route",
      category: "Voirie urbaine – 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop",
      title: "Bâtiment administratif",
      category: "Génie civil – 2023"
    },
    {
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800&auto=format&fit=crop",
      title: "Terrassement de terrain",
      category: "Aménagement – 2023"
    },
    {
      image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=800&auto=format&fit=crop",
      title: "Réseau d'assainissement",
      category: "VRD – 2022"
    }
  ];

  return (
    <section id="realisations" className="py-20 bg-white text-slate-900 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* En-tête avec bouton "Voir toutes nos réalisations" à droite */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-slate-100 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-pmsRed font-semibold uppercase tracking-wider text-xs">
              <span className="w-8 h-0.5 bg-pmsRed"></span> Nos Réalisations
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Quelques-uns de nos projets
            </h2>
          </div>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-pmsBlue hover:text-blue-700 font-semibold text-sm border border-blue-200 hover:border-pmsBlue px-5 py-2.5 rounded-full transition"
          >
            Voir toutes nos réalisations <ArrowRight size={16} />
          </a>
        </div>

        {/* Grille des 4 projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsList.map((proj, idx) => (
            <div key={idx} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition duration-300">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5 space-y-1">
                <h3 className="font-bold text-slate-900 text-base">{proj.title}</h3>
                <p className="text-slate-500 text-xs font-medium">{proj.category}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}