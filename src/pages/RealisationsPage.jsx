import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { categories, projects } from '../data/site';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Lightbox from '../components/Lightbox';
import CtaBand from '../components/CtaBand';

export default function RealisationsPage() {
  const [filter, setFilter] = useState('Tous');
  const [open, setOpen] = useState(null);

  const list = filter === 'Tous' ? projects : projects.filter((p) => p.category === filter);

  return (
    <main>
      <PageHeader
        crumb="Réalisations"
        eyebrow="Nos réalisations"
        title="L'excellence se mesure sur le terrain."
        intro="Bâtiments, ouvrages hydrauliques et aménagements : un aperçu des chantiers menés par nos équipes, en images réelles."
        image="/images/realisations/ecole-drone-ensemble.jpg"
      />

      <section className="bg-sand-50 py-20 sm:py-24">
        <div className="container-x">
          {/* Filtres */}
          <div className="flex flex-wrap gap-2 mb-14" role="tablist" aria-label="Filtrer par catégorie">
            {categories.map((c) => {
              const count = c === 'Tous' ? projects.length : projects.filter((p) => p.category === c).length;
              const active = filter === c;
              return (
                <button
                  key={c}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(c)}
                  className={`px-5 py-2.5 text-sm font-semibold border transition-all ${
                    active ? 'bg-ink text-white border-ink' : 'bg-transparent text-ink/70 border-ink/15 hover:border-ink hover:text-ink'
                  }`}
                >
                  {c} <sup className={`ml-0.5 ${active ? 'text-white/60' : 'text-ink/40'}`}>{count}</sup>
                </button>
              );
            })}
          </div>

          {/* Projets en lignes éditoriales alternées */}
          <div className="space-y-20 sm:space-y-28">
            {list.map((p, idx) => (
              <article key={p.slug} className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <Reveal className={`lg:col-span-7 ${idx % 2 ? 'lg:order-2' : ''}`}>
                  <div className="grid grid-cols-3 grid-rows-2 gap-3 aspect-[4/3] sm:aspect-[16/10]">
                    {p.images.slice(0, 3).map((src, i) => (
                      <button
                        key={src}
                        onClick={() => setOpen({ p, i })}
                        className={`group relative overflow-hidden bg-ink ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
                        aria-label={`Agrandir la photo ${i + 1} : ${p.title}`}
                      >
                        <img src={src} alt={`${p.title} — photo ${i + 1}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        {i === 2 && p.images.length > 3 && (
                          <span className="absolute inset-0 grid place-items-center bg-ink/60 text-white font-display font-bold text-xl">
                            +{p.images.length - 3}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={120} className={`lg:col-span-5 ${idx % 2 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-display text-sm font-bold text-ink/40">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="h-px w-8 bg-ink/20" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/60">{p.category}</span>
                    <span className={`ml-auto text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 ${p.status === 'Livré' ? 'bg-pmsBlue/10 text-pmsBlue' : 'bg-pmsRed/10 text-pmsRed'}`}>
                      {p.status}
                    </span>
                  </div>
                  <h2 className="display-xl text-3xl sm:text-4xl text-ink">{p.title}</h2>
                  <p className="mt-5 text-ink/65 leading-relaxed">{p.summary}</p>
                  <ul className="mt-7 grid grid-cols-2 gap-x-4 gap-y-2.5">
                    {p.facts.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm font-semibold text-ink">
                        <Check size={15} className="text-pmsRed shrink-0" strokeWidth={3} /> {f}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => setOpen({ p, i: 0 })} className="btn-ghost-dark mt-9">
                    Voir les {p.images.length} photos <ArrowUpRight size={16} />
                  </button>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand image="/images/realisations/villa-drone-2.jpg" />

      {open && (
        <Lightbox
          images={open.p.images}
          index={open.i}
          title={open.p.title}
          onClose={() => setOpen(null)}
          onChange={(i) => setOpen({ ...open, i })}
        />
      )}
    </main>
  );
}
