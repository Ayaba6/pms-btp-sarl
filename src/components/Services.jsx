import React from 'react';
import { Building2, Wrench, Droplets, Truck, Briefcase, ShoppingCart, Cog } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <Building2 size={28} className="text-pmsBlue" />,
      title: "Bâtiment & Travaux Publics",
      description: "Construction, voiries, réseaux divers et réalisation d'ouvrages durables."
    },
    {
      icon: <Droplets size={28} className="text-pmsBlue" />,
      title: "Forage Minier & Hydraulique",
      description: "Prestations spécialisées de forage pour l'eau et les activités minières."
    },
    {
      icon: <Wrench size={28} className="text-pmsBlue" />,
      title: "Équipements Industriels",
      description: "Maintenance technique et fourniture d'équipements industriels de pointe."
    },
    {
      icon: <Truck size={28} className="text-pmsBlue" />,
      title: "Transport",
      description: "Solutions logistiques et acheminement sécurisé de vos matériels et matériaux."
    },
    {
      icon: <Briefcase size={28} className="text-pmsBlue" />,
      title: "Fournitures de Bureaux",
      description: "Approvisionnement complet en consommables et matériel bureautique."
    },
    {
      icon: <ShoppingCart size={28} className="text-pmsBlue" />,
      title: "Commerce Général",
      description: "Activités de négoce, d'import-export et prestations diversifiées."
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 text-slate-900 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        
        {/* En-tête de section */}
        <div className="inline-flex items-center gap-2 text-pmsRed font-semibold uppercase tracking-wider text-xs">
          <span className="w-8 h-0.5 bg-pmsRed"></span> Nos Domaines d'Expertise <span className="w-8 h-0.5 bg-pmsRed"></span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Des prestations diversifiées pour <span className="text-pmsBlue">vos besoins</span>
        </h2>
        
        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
          <strong>PMS Sarl</strong> déploie un savoir-faire multiservice rigoureux, alliant qualité technique, réactivité et respect des normes professionnelles.
        </p>

        {/* Grille des 6 services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-start text-left group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-pmsBlue group-hover:text-white transition-colors duration-300 shadow-sm">
                {React.cloneElement(service.icon, { className: "group-hover:text-white transition-colors" })}
              </div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">{service.title}</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}