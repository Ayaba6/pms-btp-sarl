import { Link } from 'react-router-dom';

// Bandeau d'en-tête des pages intérieures, avec photo de chantier en fond.
export default function PageHeader({ eyebrow, title, intro, image, crumb }) {
  return (
    <section className="relative bg-ink text-white overflow-hidden grain">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/70 to-transparent" />
      <div className="container-x relative pt-40 pb-20 sm:pt-48 sm:pb-24">
        <nav className="text-xs text-white/50 mb-8 tracking-wide" aria-label="Fil d'Ariane">
          <Link to="/" className="hover:text-white">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-white/80">{crumb}</span>
        </nav>
        <p className="eyebrow text-white/80 mb-6">{eyebrow}</p>
        <h1 className="display-xl text-4xl sm:text-6xl lg:text-7xl max-w-4xl">{title}</h1>
        {intro && <p className="mt-7 text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">{intro}</p>}
      </div>
    </section>
  );
}
