import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18f154d?q=80&w=1920&auto=format&fit=crop",
      slogan: "Construire aujourd'hui, les infrastructures de demain"
    },
    {
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1920&auto=format&fit=crop",
      slogan: "Expertise, robustesse et durabilité des ouvrages"
    },
    {
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1920&auto=format&fit=crop",
      slogan: "Des solutions techniques adaptées à vos ambitions"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="accueil" className="relative bg-slate-900 text-white py-12 lg:py-16 px-4 sm:px-8 overflow-hidden">
      
      {/* Slider d'arrière-plan avec fondu */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-40 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transition: 'opacity 1s ease-in-out, transform 6s ease-out'
            }}
          />
        ))}
        {/* Dégradé latéral gauche vers la droite */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/40 z-10"></div>
      </div>

      {/* Ligne de séparation géométrique oblique rouge */}
      <div className="absolute top-0 bottom-0 left-[52%] w-2 bg-pmsRed z-20 hidden lg:block transform skew-x-12 shadow-2xl"></div>

      <div className="max-w-7xl mx-auto relative z-30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Contenu textuel optimisé en hauteur et en lisibilité typographique */}
        <div className="lg:col-span-7 space-y-4 lg:space-y-5">
          
          <div className="inline-block bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10">
            <p className="text-slate-100 italic text-xs sm:text-sm font-medium tracking-wide">
              {slides[currentSlide].slogan}
            </p>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15]">
            <span className="text-slate-400 font-semibold text-lg sm:text-xl uppercase tracking-widest block mb-1">Entreprise BTP</span>
            PMS <span className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl">Prestige Multi Services</span> <span className="text-pmsRed">Sarl</span>
          </h1>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal text-slate-200">
            Nous mettons notre expertise et notre savoir-faire au service de vos projets de construction, d'aménagement et de génie civil. Des infrastructures durables pour un meilleur cadre de vie.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a 
              href="#services" 
              className="inline-flex justify-center items-center gap-2 bg-pmsRed hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all text-sm tracking-wide"
            >
              Découvrir nos services <ArrowRight size={16} />
            </a>
            <a 
              href="#contact" 
              className="inline-flex justify-center items-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl border border-white/40 transition-all text-sm tracking-wide"
            >
              Nous contacter
            </a>
          </div>

          {/* Indicateurs du slider */}
          <div className="flex gap-2 pt-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'w-6 bg-pmsRed' : 'w-2 bg-white/40'
                }`}
                aria-label={`Diapositive ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Espace droit réservé pour laisser respirer l'image */}
        <div className="lg:col-span-5 hidden lg:block"></div>

      </div>
    </section>
  );
}