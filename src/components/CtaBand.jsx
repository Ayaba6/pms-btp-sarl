import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone } from 'lucide-react';
import { contact } from '../data/site';
import Reveal from './Reveal';

export default function CtaBand({ image = '/images/realisations/ecole-drone-ensemble.jpg' }) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <img src={image} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-br from-pmsBlue/80 via-ink/80 to-ink" />
      <div className="container-x relative py-24 sm:py-32 grid lg:grid-cols-12 gap-10 items-end">
        <Reveal className="lg:col-span-8">
          <p className="eyebrow text-white/80 mb-6">Vous avez un projet&nbsp;?</p>
          <h2 className="display-xl text-4xl sm:text-6xl">
            Étude, devis et suivi&nbsp;: une seule équipe, de la fondation à la livraison.
          </h2>
        </Reveal>
        <Reveal delay={150} className="lg:col-span-4 flex flex-col gap-3">
          <Link to="/contact" className="btn-primary">
            Demander un devis gratuit <ArrowUpRight size={18} />
          </Link>
          <a href={contact.phoneHref} className="btn-ghost-light">
            <Phone size={16} /> {contact.phones[0]}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
