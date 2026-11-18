import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import logoPms from '../assets/logo-pms.png';
import { contact } from '../data/site';

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/apropos', label: 'À propos' },
  { to: '/services', label: 'Expertises' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ferme le menu mobile lors d'un changement de page
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(13,21,34,0.08)]' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex items-center justify-between h-[76px]">
        <Link
          to="/"
          className={`flex items-center rounded-md transition-all duration-500 ${
            solid ? '' : 'bg-white px-3 py-2 shadow-lg shadow-black/10'
          }`}
          aria-label="PMS BTP Sarl — Accueil"
        >
          <img src={logoPms} alt="PMS — Prestige Multi Services BTP Sarl" className="h-9 sm:h-10 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.slice(0, 4).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `relative px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                  solid ? 'text-ink/70 hover:text-ink' : 'text-white/80 hover:text-white'
                } ${isActive ? (solid ? '!text-ink' : '!text-white') : ''}
                after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-[2px] after:bg-pmsRed after:transition-transform after:origin-left ${
                  isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href={contact.phoneHref}
            className={`hidden xl:flex items-center gap-2 text-sm font-semibold transition-colors ${
              solid ? 'text-ink' : 'text-white'
            }`}
          >
            <Phone size={15} className="text-pmsRed" />
            {contact.phones[0]}
          </a>
          <Link to="/contact" className="btn-primary !py-3 !px-5">
            Demander un devis <ArrowUpRight size={16} />
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 -mr-2 ${solid ? 'text-ink' : 'text-white'}`}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menu mobile plein écran */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[76px] bottom-0 bg-white transition-all duration-500 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container-x pt-8 pb-10 flex flex-col h-full">
          <ul className="space-y-1">
            {links.map((l, i) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `flex items-baseline gap-4 py-3 border-b border-ink/10 font-display text-3xl font-bold tracking-tight ${
                      isActive ? 'text-pmsRed' : 'text-ink'
                    }`
                  }
                  style={{ fontStretch: '110%' }}
                >
                  <span className="text-xs font-sans text-ink/40">0{i + 1}</span>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-3 text-sm">
            <a href={contact.phoneHref} className="flex items-center gap-2 font-semibold">
              <Phone size={16} className="text-pmsRed" /> {contact.phones.join(' / ')}
            </a>
            <a href={`mailto:${contact.email}`} className="block text-ink/60">{contact.email}</a>
          </div>
        </div>
      </div>
    </header>
  );
}
