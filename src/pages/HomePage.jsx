import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown, Check } from 'lucide-react';
import { heroSlides, projects, services, stats } from '../data/site';
import Reveal from '../components/Reveal';
import ProjectCard from '../components/ProjectCard';
import Lightbox from '../components/Lightbox';
import CtaBand from '../components/CtaBand';

const SLIDE_MS = 7000;

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setCurrent((c) => (c + 1) % heroSlides.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [current]);

  return (
    <section className="relative min-h-[100svh] flex flex-col bg-ink text-white overflow-hidden">
      {heroSlides.map((s, i) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={i !== current}
        >
          <img
            src={s.image}
            alt=""
            fetchPriority={i === 0 ? 'high' : 'auto'}
            className={`w-full h-full object-cover ${i === current ? 'animate-kenburns' : ''}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/40" />

      {/* pt-[120px] : réserve toujours l'espace du menu fixe, le contenu ne passe jamais dessous */}
      <div className="container-x relative w-full flex-1 flex flex-col justify-end pt-[120px] pb-10 sm:pb-14">
        <div className="max-w-4xl">
          <p className="eyebrow text-white/80 mb-5 lg:mb-7">Entreprise BTP · Burkina Faso</p>
          {/* Taille du titre limitée par la hauteur de l'écran (min(vw, vh)) */}
          <h1 className="display-xl text-[clamp(2.4rem,min(11vw,9vh),6.2rem)]">
            Nous bâtissons
            <br />
            des ouvrages <span className="text-pmsRed">qui durent.</span>
          </h1>
          <p className="mt-5 lg:mt-7 text-base sm:text-lg text-white/75 max-w-xl leading-relaxed">
            Prestige Multi Services – BTP Sarl conçoit et réalise bâtiments, forages et aménagements avec une seule
            exigence&nbsp;: la qualité livrée dans les délais.
          </p>
          <div className="mt-7 lg:mt-9 flex flex-col sm:flex-row gap-3">
            <Link to="/realisations" className="btn-primary">
              Voir nos réalisations <ArrowUpRight size={18} />
            </Link>
            <Link to="/contact" className="btn-ghost-light">
              Demander un devis
            </Link>
          </div>
        </div>

        {/* Pied du hero : légende du chantier + progression */}
        <div className="mt-10 lg:mt-14 pt-6 border-t border-white/15 flex items-end justify-between gap-6">
          <div className="flex gap-6 sm:gap-10">
            {heroSlides.map((s, i) => (
              <button
                key={s.image}
                onClick={() => setCurrent(i)}
                className="group text-left w-24 sm:w-44"
                aria-label={`Afficher : ${s.caption}`}
              >
                <span className="block h-[2px] bg-white/20 overflow-hidden mb-3">
                  <span
                    key={i === current ? `on-${current}` : 'off'}
                    className="block h-full bg-white origin-left"
                    style={{
                      transform: i < current ? 'scaleX(1)' : 'scaleX(0)',
                      animation: i === current ? `progress ${SLIDE_MS}ms linear forwards` : 'none',
                    }}
                  />
                </span>
                <span className={`hidden sm:block text-xs font-semibold transition-colors ${i === current ? 'text-white' : 'text-white/45 group-hover:text-white/80'}`}>
                  0{i + 1} — {s.caption}
                </span>
                <span className={`sm:hidden text-xs font-semibold ${i === current ? 'text-white' : 'text-white/45'}`}>0{i + 1}</span>
              </button>
            ))}
          </div>
          <a href="#intro" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white">
            Découvrir <ArrowDown size={14} className="animate-bounce" />
          </a>
        </div>
      </div>
      <style>{`@keyframes progress { from { transform: scaleX(0) } to { transform: scaleX(1) } }`}</style>
    </section>
  );
}

function Intro() {
  return (
    <section id="intro" className="bg-sand-50 py-24 sm:py-32">
      <div className="container-x grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
        <div className="lg:col-span-6 relative">
          <Reveal className="relative">
            <img
              src="/images/realisations/ecole-facade.jpg"
              alt="Façade du complexe éducatif réalisé par PMS"
              loading="lazy"
              className="w-full aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] object-cover"
            />
          </Reveal>
          <Reveal delay={200} className="hidden sm:block absolute -bottom-10 -right-4 lg:-right-10 w-[46%] border-[10px] border-sand-50 shadow-2xl">
            <img src="/images/realisations/villa-escalier.jpg" alt="Escalier hélicoïdal d'une villa réalisée par PMS" loading="lazy" className="w-full aspect-[3/4] object-cover" />
          </Reveal>
          <div className="absolute -top-5 -left-5 w-24 h-24 border-l-[3px] border-t-[3px] border-pmsRed hidden sm:block" />
        </div>

        <div className="lg:col-span-6 lg:pl-12">
          <Reveal>
            <p className="eyebrow text-pmsRed mb-6">Qui sommes-nous</p>
            <h2 className="display-xl text-4xl sm:text-5xl text-ink">
              Une entreprise pluridisciplinaire, un seul interlocuteur.
            </h2>
            <p className="mt-7 text-ink/70 leading-relaxed text-[17px]">
              Du bâtiment scolaire à la villa contemporaine, du forage solaire au portail monumental, PMS réunit
              sous un même toit les compétences du gros œuvre, du second œuvre, de l'hydraulique et de
              l'aménagement. Nos équipes interviennent à chaque étape pour garantir des ouvrages solides et soignés.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm font-semibold text-ink">
              {['Équipe qualifiée sur le terrain', 'Respect strict des délais', 'Matériaux contrôlés', 'Suivi de chantier transparent'].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="w-5 h-5 grid place-items-center bg-pmsBlue text-white shrink-0"><Check size={13} strokeWidth={3} /></span>
                  {t}
                </li>
              ))}
            </ul>
            <Link to="/apropos" className="btn-ghost-dark mt-10">
              Découvrir l'entreprise <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Chiffres clés */}
      <div className="container-x mt-28 sm:mt-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-ink/15">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className={`pt-8 pb-2 pr-6 ${i > 0 ? 'lg:pl-8 lg:border-l border-ink/15' : ''} ${i % 2 === 1 ? 'pl-6 border-l border-ink/15 lg:border-l' : ''}`}>
              <p className="display-xl text-5xl sm:text-6xl text-ink">{s.value}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink/55">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Expertises() {
  const main = services.slice(0, 3);
  const others = services.slice(3);
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-pmsRed mb-6">Nos expertises</p>
            <h2 className="display-xl text-4xl sm:text-5xl lg:text-6xl text-ink">Six métiers, une même exigence.</h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:pl-10">
            <p className="text-ink/65 leading-relaxed">
              Notre polyvalence nous permet de prendre en charge l'ensemble de vos besoins — construction,
              eau, aménagement, maintenance, transport et approvisionnement.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {main.map((s, i) => (
            <Reveal key={s.key} delay={i * 120}>
              <Link to={`/services#${s.key}`} className="group block">
                <div className="relative overflow-hidden aspect-[4/5] bg-ink">
                  <img src={s.image} alt={s.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                  <span className="absolute top-5 left-5 font-display text-white/90 text-sm font-bold">0{i + 1}</span>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-white text-2xl font-bold leading-tight" style={{ fontStretch: '108%' }}>{s.title}</h3>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.short}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white border-b border-pmsRed pb-1">
                      En savoir plus <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid sm:grid-cols-3 border border-ink/10">
          {others.map((s, i) => (
            <Reveal key={s.key} delay={i * 100}>
              <Link
                to={`/services#${s.key}`}
                className={`group flex h-full items-start gap-5 p-7 hover:bg-sand-100 transition-colors ${i > 0 ? 'sm:border-l border-t sm:border-t-0 border-ink/10' : ''}`}
              >
                <span className="font-display text-sm font-bold text-pmsRed pt-1">0{i + 4}</span>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-ink leading-snug">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-ink/60">{s.short}</p>
                </div>
                <ArrowUpRight size={18} className="text-ink/40 group-hover:text-pmsRed group-hover:rotate-45 transition-all shrink-0" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const [open, setOpen] = useState(null);
  const featured = projects.slice(0, 5);
  const [a, b, c, d, e] = featured;

  return (
    <section className="bg-sand-100 py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <Reveal>
            <p className="eyebrow text-pmsRed mb-6">Réalisations</p>
            <h2 className="display-xl text-4xl sm:text-5xl lg:text-6xl text-ink">Nos chantiers parlent pour nous.</h2>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/realisations" className="btn-ghost-dark shrink-0">
              Tous les projets <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <Reveal className="md:col-span-7 md:row-span-2 flex">
            <ProjectCard project={a} tall onOpen={() => setOpen({ p: a, i: 0 })} className="h-full" />
          </Reveal>
          <Reveal delay={100} className="md:col-span-5">
            <ProjectCard project={b} onOpen={() => setOpen({ p: b, i: 0 })} />
          </Reveal>
          <Reveal delay={200} className="md:col-span-5">
            <ProjectCard project={c} onOpen={() => setOpen({ p: c, i: 0 })} />
          </Reveal>
          <Reveal className="md:col-span-6">
            <ProjectCard project={d} onOpen={() => setOpen({ p: d, i: 0 })} />
          </Reveal>
          <Reveal delay={100} className="md:col-span-6">
            <ProjectCard project={e} onOpen={() => setOpen({ p: e, i: 0 })} />
          </Reveal>
        </div>
      </div>

      {open && (
        <Lightbox
          images={open.p.images}
          index={open.i}
          title={open.p.title}
          onClose={() => setOpen(null)}
          onChange={(i) => setOpen({ ...open, i })}
        />
      )}
    </section>
  );
}

function Method() {
  const steps = [
    { t: 'Écoute & visite', d: 'Nous analysons votre besoin, le terrain et vos contraintes de budget et de délai.' },
    { t: 'Étude & devis', d: 'Proposition technique détaillée, planning prévisionnel et devis transparent.' },
    { t: 'Exécution', d: "Chantier piloté par un chef d'équipe dédié, contrôle qualité à chaque étape." },
    { t: 'Livraison', d: 'Réception des travaux, levée des réserves et accompagnement après livraison.' },
  ];
  return (
    <section className="relative bg-ink text-white overflow-hidden grain">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[380px] lg:min-h-full">
          <img src="/images/realisations/mosquee-facade.jpg" alt="Chantier de gros œuvre mené par PMS" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-ink" />
        </div>
        <div className="relative px-5 sm:px-12 lg:px-16 py-20 sm:py-28 max-w-2xl">
          <Reveal>
            <p className="eyebrow text-white/80 mb-6">Notre méthode</p>
            <h2 className="display-xl text-4xl sm:text-5xl">De l'idée à la remise des clés.</h2>
          </Reveal>
          <ol className="mt-12 space-y-0">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.t} delay={i * 110} className="grid grid-cols-[56px_1fr] gap-4 py-6 border-t border-white/10">
                <span className="font-display text-3xl font-extrabold text-pmsRed leading-none">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-xl font-bold">{s.t}</h3>
                  <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function PhotoStrip() {
  const strip = [
    'villa-entree', 'ecole-couloir', 'forage-chateau', 'mosquee-coupole', 'ecole-classe',
    'portail', 'villa-terrasse', 'ecole-jardin', 'hangar-drone', 'ecole-refectoire',
  ].map((n) => `/images/realisations/${n}.jpg`);
  return (
    <section className="bg-white py-16 overflow-hidden" aria-label="Galerie de chantiers">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...strip, ...strip].map((src, i) => (
          <img key={i} src={src} alt="" loading="lazy" className="h-56 sm:h-72 w-auto aspect-[3/2] object-cover mr-4" />
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Intro />
      <Expertises />
      <FeaturedProjects />
      <Method />
      <PhotoStrip />
      <CtaBand />
    </main>
  );
}
