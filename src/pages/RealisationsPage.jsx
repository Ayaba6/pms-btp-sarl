import React, { useState } from 'react';
import { Building2, Droplets, Wrench, CheckCircle2, ArrowRight, ShieldCheck, Clock, Users, Send, Phone, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RealisationsPage() {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const projects = [
    {
      title: "Construction de Bâtiments Administratifs",
      category: "Bâtiment & Travaux Publics",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18f154d?q=80&w=800&auto=format&fit=crop",
      description: "Réalisation complète de complexes de bureaux modernes respectant les normes de sécurité et d'efficacité énergétique."
    },
    {
      title: "Campagne de Forage Hydraulique",
      category: "Forage Minier & Hydraulique",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop",
      description: "Implantation et réalisation de forages d'eau pour l'approvisionnement des communautés et des sites industriels."
    },
    {
      title: "Maintenance d'Équipements Industriels",
      category: "Équipements Industriels",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800&auto=format&fit=crop",
      description: "Interventions techniques préventives et curatives sur des parcs de machines lourdes et lignes de production."
    },
    {
      title: "Aménagement et Voiries Diverses",
      category: "Bâtiment & Travaux Publics",
      image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=800&auto=format&fit=crop",
      description: "Travaux d'assainissement, de pavage et de voiries pour faciliter l'accès aux zones d'activités."
    },
    {
      title: "Approvisionnement en Matériel Technique",
      category: "Commerce Général & Fournitures",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
      description: "Fourniture à grande échelle d'équipements de bureau, consommables et outillages industriels certifiés."
    },
    {
      title: "Maintenance préventive minière",
      category: "Équipements Industriels",
      image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=800&auto=format&fit=crop",
      description: "Suivi technique spécialisé et maintenance d'engins lourds pour le compte d'acteurs miniers de la sous-région."
    }
  ];

  const categories = ['Tous', 'Bâtiment & Travaux Publics', 'Forage Minier & Hydraulique', 'Équipements Industriels', 'Commerce Général & Fournitures'];

  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="bg-slate-50 min-h-screen space-y-16 pb-16">
      
      {/* 1. Grand bandeau d'en-tête (Hero) */}
      <div className="relative bg-slate-900 text-white overflow-hidden py-20 px-4 sm:px-8">
        <div className="absolute inset-0 opacity-45">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Prestige Multi Services - BTP Sarl" 
            className="w-full h-full object-cover"
            onError={(e)=>{e.target.src='https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop'}}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-pmsRed font-semibold uppercase tracking-wider text-xs">
            <span className="w-8 h-0.5 bg-pmsRed"></span> Nos Réalisations <span className="w-8 h-0.5 bg-pmsRed"></span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            L'excellence sur <span className="text-pmsBlue">le terrain</span>
          </h1>
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg leading-relaxed">
            Découvrez un aperçu de nos chantiers, infrastructures et prestations menés à bien avec rigueur et professionnalisme pour nos différents partenaires.
          </p>
          <div className="pt-2">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-pmsRed hover:bg-red-800 text-white font-semibold py-3.5 px-8 rounded-xl shadow-lg transition-all text-sm"
            >
              Discuter de votre projet
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* 2. Filtres par catégorie interactifs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm ${
                activeFilter === category 
                  ? 'bg-pmsBlue text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 3. Grille des projets filtrés */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group">
              
              <div className="relative h-56 overflow-hidden bg-slate-200">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {project.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-xl text-slate-900">{project.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{project.description}</p>
                </div>
                
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-pmsBlue">
                  <span className="inline-flex items-center gap-1.5 text-emerald-600">
                    <CheckCircle2 size={16} /> Projet achevé avec succès
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-base">Aucun projet ne correspond à cette catégorie pour le moment.</p>
          </div>
        )}

        {/* ========================================================== */}
        {/* 4. BANDE DE STATISTIQUES (Identique à la page d'accueil)    */}
        {/* ========================================================== */}
        <div className="bg-pmsBlue text-white rounded-3xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            
            <div className="space-y-1 pt-2 md:pt-0">
              <Building2 size={28} className="mx-auto text-pmsRed mb-2" />
              <p className="text-2xl sm:text-3xl font-extrabold">+20</p>
              <p className="text-xs sm:text-sm text-slate-200">Projets réalisés</p>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <Users size={28} className="mx-auto text-pmsRed mb-2" />
              <p className="text-2xl sm:text-3xl font-extrabold">+10</p>
              <p className="text-xs sm:text-sm text-slate-200">Clients satisfaits</p>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <ShieldCheck size={28} className="mx-auto text-pmsRed mb-2" />
              <p className="text-2xl sm:text-3xl font-extrabold">100%</p>
              <p className="text-xs sm:text-sm text-slate-200">Qualité garantie</p>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <Clock size={28} className="mx-auto text-pmsRed mb-2" />
              <p className="text-2xl sm:text-3xl font-extrabold">Respect</p>
              <p className="text-xs sm:text-sm text-slate-200">des délais</p>
            </div>

          </div>
        </div>

        {/* ========================================================== */}
        {/* 5. BLOC "PARLONS-EN !" (Avec le casque de chantier)       */}
        {/* ========================================================== */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm overflow-hidden relative">
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
                  className="inline-flex items-center gap-2 bg-pmsRed hover:bg-red-800 text-white font-semibold py-3.5 px-6 rounded-xl shadow-md transition-all text-sm"
                >
                  <Send size={16} /> Nous contacter
                </Link>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-1 justify-self-center h-28 w-px bg-slate-200"></div>

            <div className="lg:col-span-3 space-y-6 text-slate-800">
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

            {/* Colonne droite : Slogan manuscrit avec image du casque de chantier */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center text-center lg:text-right space-y-3 pt-6 lg:pt-0 border-t lg:border-t-0 border-slate-100 lg:border-l lg:border-slate-100 lg:pl-8">
              <div className="w-full h-36 rounded-2xl overflow-hidden relative shadow-inner bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb18f154d?q=80&w=600&auto=format&fit=crop" 
                  alt="Chantier PMS" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent flex items-end p-4">
                  <p className="italic font-serif text-white font-bold text-lg leading-tight">
                    Ensemble, construisons l'avenir !
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}