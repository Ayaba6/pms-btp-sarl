import React from 'react';
import { Wrench, Droplets, Briefcase, Building2, Truck, ShoppingCart, ArrowRight, ShieldCheck, Clock, Users, Leaf, Send, Phone, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const fullServicesList = [
    {
      image: "/images/services/maintenance-industrielle.jpg",
      icon: <Wrench size={22} className="text-white" />,
      title: "Maintenance & Fournitures Industrielles",
      description: "Maintenance technique préventive ou corrective et fourniture d'équipements industriels de qualité."
    },
    {
      image: "/images/services/forage.jpg",
      icon: <Droplets size={22} className="text-white" />,
      title: "Forage Minier & Hydraulique",
      description: "Prestations spécialisées de forage pour l'accès à l'eau potable, l'irrigation et les activités minières."
    },
    {
      image: "/images/services/fournitures-bureau.jpg",
      icon: <Briefcase size={22} className="text-white" />,
      title: "Fournitures de Bureaux",
      description: "Approvisionnement complet des entreprises et structures publiques en consommables et matériel bureautique."
    },
    {
      image: "/images/services/btp.jpg",
      icon: <Building2 size={22} className="text-white" />,
      title: "Constructions, Bâtiment & Travaux Publics",
      description: "Construction de bâtiments résidentiels, commerciaux, industriels, voiries et réseaux divers."
    },
    {
      image: "/images/services/transport.jpg",
      icon: <Truck size={22} className="text-white" />,
      title: "Transport",
      description: "Solutions logistiques fiables pour le transport sécurisé de vos matériaux, marchandises et équipements."
    },
    {
      image: "/images/services/commerce-general.jpg",
      icon: <ShoppingCart size={22} className="text-white" />,
      title: "Commerce Général",
      description: "Activités de négoce variées et d'import-export pour répondre aux commandes institutionnelles et privées."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen space-y-16 pb-16">
      
      {/* 1. Grand bandeau d'en-tête (Hero) */}
      <div className="relative bg-slate-900 text-white overflow-hidden py-20 px-4 sm:px-8">
        <div className="absolute inset-0 opacity-45">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Prestige Multi Services - BTP Sarl" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-pmsRed font-semibold uppercase tracking-wider text-xs">
            <span className="w-8 h-0.5 bg-pmsRed"></span> Nos Domaines d'Expertise <span className="w-8 h-0.5 bg-pmsRed"></span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Des services adaptés à <span className="text-pmsRed">vos exigences</span>
          </h1>
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg leading-relaxed">
            Prestige Multi Services - BTP Sarl met son professionnalisme et sa polyvalence au service de vos projets institutionnels, industriels et particuliers.
          </p>
          <div className="pt-2">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-pmsRed hover:bg-red-800 text-white font-semibold py-3.5 px-8 rounded-xl shadow-lg transition-all text-sm"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* 2. En-tête de section des services */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-pmsRed font-semibold uppercase tracking-wider text-xs">
            <span className="w-8 h-0.5 bg-pmsRed"></span> NOS PRESTATIONS <span className="w-8 h-0.5 bg-pmsRed"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Une offre globale et <span className="text-pmsBlue">multiservice</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Retrouvez l'ensemble de nos domaines d'intervention officiels garantissant rigueur, qualité et respect des délais.
          </p>
        </div>

        {/* 3. Grille détaillée des 6 services officiels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fullServicesList.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col justify-between group">
              
              {/* Conteneur Image avec Badge Icône Circulaire superposé */}
              <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                
                {/* Icône ronde bleue en bas à gauche de l'image */}
                <div className="absolute -bottom-5 left-6 w-12 h-12 rounded-full bg-pmsBlue flex items-center justify-center shadow-md border-4 border-white">
                  {service.icon}
                </div>
              </div>

              {/* Contenu textuel */}
              <div className="p-6 pt-8 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-bold text-xl text-slate-900">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                </div>
                
                <div className="pt-4 border-t border-slate-100">
                  <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-bold text-pmsBlue hover:text-blue-700 transition-colors">
                    Demander un devis <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ========================================================== */}
        {/* SECTION INFÉRIEURE : Image à gauche / Texte à droite */}
        {/* ========================================================== */}
        <div className="space-y-6">
          
          {/* Bloc Bleu Supérieur : Pourquoi nous choisir ? */}
          <div className="relative bg-[#0d2b6b] text-white rounded-3xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* Colonne Gauche : Image depuis le dossier public avec son biseau rouge */}
              <div className="lg:col-span-5 relative h-full min-h-[360px] lg:min-h-[480px] overflow-hidden">
                <div className="absolute inset-y-0 right-0 w-24 bg-pmsRed z-10 transform -skew-x-12 hidden lg:block -mr-12"></div>
                <img 
                  src="/batiment.png" 
                  alt="Ingénieurs PMS" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent lg:hidden"></div>
              </div>

              {/* Colonne Droite : Texte et pastilles d'avantages */}
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-10 z-10">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-pmsRed font-semibold uppercase tracking-wider text-xs">
                    <span className="w-8 h-0.5 bg-pmsRed"></span> POURQUOI NOUS CHOISIR ?
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    Notre engagement,<br />
                    <span className="text-pmsBlue">votre satisfaction</span>
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                    Chez PMS Sarl, nous nous engageons à fournir des prestations de qualité, à respecter nos engagements et à bâtir des infrastructures durables pour le développement de notre pays.
                  </p>
                </div>

                {/* 4 pastilles d'avantages */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2">
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
                    <div className="w-14 h-14 rounded-full bg-pmsBlue flex items-center justify-center text-white shadow-md border-2 border-white/20">
                      <ShieldCheck size={26} />
                    </div>
                    <span className="text-sm font-semibold text-slate-100 leading-tight">Qualité<br />des travaux</span>
                  </div>

                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
                    <div className="w-14 h-14 rounded-full bg-pmsBlue flex items-center justify-center text-white shadow-md border-2 border-white/20">
                      <Clock size={26} />
                    </div>
                    <span className="text-sm font-semibold text-slate-100 leading-tight">Respect<br />des délais</span>
                  </div>

                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
                    <div className="w-14 h-14 rounded-full bg-pmsBlue flex items-center justify-center text-white shadow-md border-2 border-white/20">
                      <Users size={26} />
                    </div>
                    <span className="text-sm font-semibold text-slate-100 leading-tight">Équipe<br />qualifiée</span>
                  </div>

                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
                    <div className="w-14 h-14 rounded-full bg-pmsBlue flex items-center justify-center text-white shadow-md border-2 border-white/20">
                      <Leaf size={26} />
                    </div>
                    <span className="text-sm font-semibold text-slate-100 leading-tight">Développement<br />durable</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bloc Clair Inférieur : Parlons-en ! */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-pmsRed font-semibold uppercase tracking-wider text-xs">
                  <span className="w-8 h-0.5 bg-pmsRed"></span> Vous avez un projet ?
                </div>
                <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight">Parlons-en !</h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Notre équipe est à votre écoute pour étudier votre projet et vous proposer la meilleure solution.
                </p>
                <div className="pt-1">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 bg-pmsBlue hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-md transition-all text-sm"
                  >
                    <Send size={16} /> Nous contacter
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block lg:col-span-1 justify-self-center h-28 w-px bg-slate-200"></div>

              <div className="lg:col-span-3 space-y-6 text-slate-800 pl-2">
                <div className="flex items-start gap-4">
                  <Phone size={22} className="text-pmsBlue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[11px] text-slate-500 uppercase font-bold tracking-wide">Appelez-nous</p>
                    <p className="text-base font-semibold">+226 70 12 97 97 / 76 21 72 71</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin size={22} className="text-pmsBlue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[11px] text-slate-500 uppercase font-bold tracking-wide">Notre adresse</p>
                    <p className="text-base font-semibold">Ouagadougou, Burkina Faso</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={22} className="text-pmsBlue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[11px] text-slate-500 uppercase font-bold tracking-wide">Email</p>
                    <p className="text-base font-semibold">esfsalgo@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Colonne droite : Slogan manuscrit stylisé */}
              <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center text-center lg:text-right space-y-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100 lg:border-l lg:border-slate-100 lg:pl-8">
                <p className="italic font-serif text-3xl sm:text-4xl text-pmsBlue font-bold tracking-wide transform -rotate-2 leading-tight">
                  Ensemble,<br />construisons<br />l'avenir !
                </p>
                <div className="w-32 h-1.5 bg-pmsRed rounded-full mt-3"></div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}