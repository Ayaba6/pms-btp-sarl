import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Users, Leaf, ArrowUpRight } from 'lucide-react';
import { stats } from '../data/site';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';

const values = [
  { icon: ShieldCheck, t: 'Qualité des travaux', d: 'Respect des normes, matériaux contrôlés et finitions soignées sur chaque ouvrage.' },
  { icon: Clock, t: 'Respect des délais', d: 'Un planning réaliste, tenu et partagé avec vous tout au long du chantier.' },
  { icon: Users, t: 'Écoute & proximité', d: 'Un interlocuteur dédié, disponible et transparent du devis à la livraison.' },
  { icon: Leaf, t: 'Ouvrages durables', d: 'Solutions solaires, gestion de l’eau et constructions pensées pour durer.' },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        crumb="À propos"
        eyebrow="À propos de PMS"
        title="Votre partenaire de confiance dans le BTP."
        intro="Prestige Multi Services – BTP Sarl est une entreprise pluridisciplinaire spécialisée dans le bâtiment, les travaux publics, les forages et les services industriels."
        image="/images/realisations/ecole-drone-front.jpg"
      />

      <section className="bg-sand-50 py-24 sm:py-32">
        <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-pmsRed mb-6">Notre histoire</p>
            <h2 className="display-xl text-4xl sm:text-5xl text-ink">Bâtir mieux, pour un meilleur cadre de vie.</h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7 space-y-6 text-[17px] text-ink/70 leading-relaxed">
            <p>
              Née de la volonté de proposer un service complet et fiable, <strong className="text-ink">PMS</strong> accompagne
              ses clients publics et privés dans la réalisation de leurs projets de construction, d'aménagement et
              d'approvisionnement.
            </p>
            <p>
              Établissements d'enseignement, résidences, édifices cultuels, forages équipés de pompage solaire,
              clôtures et portails : chaque réalisation témoigne du même engagement — un travail rigoureux,
              exécuté par une équipe qualifiée et livré dans les délais convenus.
            </p>
            <p>
              Notre ambition : contribuer au développement de notre pays par des infrastructures solides,
              utiles et durables.
            </p>
          </Reveal>
        </div>

        {/* Mosaïque photo */}
        <div className="container-x mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Reveal className="col-span-2 row-span-2">
            <img src="/images/realisations/ecole-entree.jpg" alt="Entrée du complexe éducatif" loading="lazy" className="w-full h-full object-cover aspect-square" />
          </Reveal>
          <Reveal delay={80}>
            <img src="/images/realisations/villa-plafond.jpg" alt="Faux plafond décoratif" loading="lazy" className="w-full aspect-square object-cover" />
          </Reveal>
          <Reveal delay={160}>
            <img src="/images/realisations/mosquee-coupole.jpg" alt="Coupole en construction" loading="lazy" className="w-full aspect-square object-cover" />
          </Reveal>
          <Reveal delay={240}>
            <img src="/images/realisations/ecole-dortoir.jpg" alt="Dortoir équipé" loading="lazy" className="w-full aspect-square object-cover" />
          </Reveal>
          <Reveal delay={320}>
            <img src="/images/realisations/forage-borne.jpg" alt="Borne fontaine" loading="lazy" className="w-full aspect-square object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-white py-24 sm:py-32 relative grain overflow-hidden">
        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow text-white/80 mb-6">Nos engagements</p>
            <h2 className="display-xl text-4xl sm:text-5xl max-w-3xl">Notre engagement, votre satisfaction.</h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {values.map(({ icon: Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 100} className="bg-ink p-8">
                <Icon size={30} className="text-pmsRed" strokeWidth={1.6} />
                <h3 className="mt-8 font-display text-xl font-bold">{t}</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">{d}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="display-xl text-5xl">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50 font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
          <Link to="/realisations" className="btn-ghost-light mt-16">
            Voir nos réalisations <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
