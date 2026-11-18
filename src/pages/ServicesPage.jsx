import { useEffect, useState } from 'react';
import Lightbox from '../components/Lightbox';
import { useLocation, Link } from 'react-router-dom';
import { ArrowUpRight, Check, Truck, ShoppingCart } from 'lucide-react';
import { services } from '../data/site';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';

const fallbackIcon = { transport: Truck, commerce: ShoppingCart };

export default function ServicesPage() {
  const { hash } = useLocation();
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  }, [hash]);

  const withImage = services.filter((s) => s.image);
  const withoutImage = services.filter((s) => !s.image);

  return (
    <main>
      <PageHeader
        crumb="Expertises"
        eyebrow="Nos domaines d'expertise"
        title="Des métiers complémentaires au service de vos projets."
        intro="Prestige Multi Services – BTP Sarl met son professionnalisme et sa polyvalence au service des institutions, des industriels et des particuliers."
        image="/images/realisations/villa-rue.jpg"
      />

      <section className="bg-sand-50 py-20 sm:py-28">
        <div className="container-x space-y-24 sm:space-y-32">
          {withImage.map((s, idx) => (
            <article id={s.key} key={s.key} className="scroll-mt-28 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <Reveal className={`lg:col-span-6 relative ${idx % 2 ? 'lg:order-2' : ''}`}>
                <button onClick={() => setOpen({ s, i: 0 })} className="block w-full" aria-label={`Agrandir : ${s.title}`}>
                  <img src={s.image} alt={s.title} loading="lazy" className="w-full aspect-[4/3] object-cover" />
                </button>
                <span className={`absolute top-0 -translate-y-1/2 ${idx % 2 ? '-left-2 sm:-left-6' : '-right-2 sm:-right-6'} bg-pmsRed text-white font-display font-extrabold text-4xl sm:text-5xl px-5 py-3`}>
                  0{idx + 1}
                </span>
                {s.gallery && (
                  <div className="mt-3 grid grid-cols-4 gap-3">
                    {s.gallery.map((src, i) => (
                      <button
                        key={src}
                        onClick={() => setOpen({ s, i: i + 1 })}
                        className="group relative aspect-square overflow-hidden bg-ink"
                        aria-label={`Agrandir la photo ${i + 2} : ${s.title}`}
                      >
                        <img src={src} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      </button>
                    ))}
                  </div>
                )}
              </Reveal>
              <Reveal delay={120} className={`lg:col-span-6 ${idx % 2 ? 'lg:order-1' : ''}`}>
                <h2 className="display-xl text-3xl sm:text-5xl text-ink">{s.title}</h2>
                <p className="mt-6 text-ink/65 leading-relaxed text-[17px]">{s.long}</p>
                <ul className="mt-8 border-t border-ink/10">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-3 py-3.5 border-b border-ink/10 text-sm font-semibold text-ink">
                      <Check size={16} className="text-pmsRed" strokeWidth={3} /> {pt}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-blue mt-9">
                  Demander un devis <ArrowUpRight size={16} />
                </Link>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-pmsRed mb-6">Services complémentaires</p>
            <h2 className="display-xl text-3xl sm:text-5xl text-ink max-w-3xl">Approvisionnement et négoce, pour aller plus loin.</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {withoutImage.map((s, i) => {
              const Icon = fallbackIcon[s.key] || Truck;
              return (
                <Reveal key={s.key} delay={i * 120}>
                  <article id={s.key} className="scroll-mt-28 h-full bg-sand-100 p-8 sm:p-10">
                    <div className="flex items-start justify-between">
                      <span className="w-14 h-14 grid place-items-center bg-ink text-white"><Icon size={24} /></span>
                      <span className="font-display text-4xl font-extrabold text-ink/10">0{withImage.length + i + 1}</span>
                    </div>
                    <h3 className="mt-8 font-display text-2xl font-bold text-ink">{s.title}</h3>
                    <p className="mt-3 text-ink/65 leading-relaxed">{s.long}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {s.points.map((pt) => (
                        <span key={pt} className="text-xs font-semibold px-3 py-1.5 bg-white text-ink/80">{pt}</span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand image="/images/realisations/forage-chateau-drone.jpg" />

      {open && (
        <Lightbox
          images={[open.s.image, ...(open.s.gallery || [])]}
          index={open.i}
          title={open.s.title}
          onClose={() => setOpen(null)}
          onChange={(i) => setOpen({ ...open, i })}
        />
      )}
    </main>
  );
}
