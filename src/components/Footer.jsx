import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import logoPms from '../assets/logo-pms.png';
import { contact, services } from '../data/site';

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white/70 grain overflow-hidden">
      <div className="container-x pt-20 pb-10 relative">
        {/* Grande accroche */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-white/10">
          <h2 className="display-xl text-white text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
            Un projet en tête&nbsp;? <span className="text-white/40">Construisons-le ensemble.</span>
          </h2>
          <Link to="/contact" className="btn-primary shrink-0">
            Parlons de votre projet <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-14">
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white rounded-md px-3 py-2 w-fit">
              <img src={logoPms} alt="PMS — Prestige Multi Services BTP Sarl" className="h-9 w-auto" />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Prestige Multi Services – BTP Sarl : bâtiment, travaux publics, forages et services industriels.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-5">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['/', 'Accueil'],
                ['/apropos', 'À propos'],
                ['/services', 'Expertises'],
                ['/realisations', 'Réalisations'],
                ['/contact', 'Contact'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-5">Expertises</h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.key}>
                  <Link to={`/services#${s.key}`} className="hover:text-white transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone size={16} className="text-pmsRed shrink-0 mt-0.5" />
                <span>
                  {contact.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block hover:text-white">{p}</a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-pmsRed shrink-0 mt-0.5" />
                <a href={`mailto:${contact.email}`} className="hover:text-white break-all">{contact.email}</a>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="text-pmsRed shrink-0 mt-0.5" />
                <span>{contact.postal}<br />{contact.city}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} PMS — Prestige Multi Services BTP Sarl. Tous droits réservés.</p>
          <p>Bâtir avec rigueur, livrer avec fierté.</p>
        </div>
      </div>
    </footer>
  );
}
