import React from 'react';

export default function Partners() {
  // Liste des entreprises partenaires (Tu pourras remplacer les noms ou ajouter de vraies images de logos)
  const partners = [
    { name: "Entreprise A", logoText: "BTP AFRIQUE" },
    { name: "Entreprise B", logoText: "MINES & CO" },
    { name: "Entreprise C", logoText: "SAHARA ENERGIE" },
    { name: "Entreprise D", logoText: "GROUPE 3N" },
    { name: "Entreprise E", logoText: "BATIMEX INTERNATIONAL" },
    { name: "Entreprise F", logoText: "BURKINA INFRA" },
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 text-pmsRed font-semibold uppercase tracking-wider text-xs">
          <span className="w-8 h-0.5 bg-pmsRed"></span> Partenaires & Références <span className="w-8 h-0.5 bg-pmsRed"></span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Ils nous font confiance
        </h2>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Découvrez quelques-unes des structures publiques et privées qui accompagnent notre croissance et collaborent avec nous.
        </p>
      </div>

      {/* Conteneur du défilement infini */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex w-max animate-marquee gap-12 items-center py-4">
          
          {/* On duplique la liste pour assurer un effet de boucle fluide infini */}
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[180px] h-20 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md transition-all px-6 py-4 group"
            >
              <span className="font-extrabold text-slate-400 group-hover:text-pmsBlue tracking-wider text-sm sm:text-base uppercase transition-colors">
                {partner.logoText}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}