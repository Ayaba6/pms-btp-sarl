import { ArrowUpRight, Images } from 'lucide-react';

export default function ProjectCard({ project, onOpen, className = '', tall = false }) {
  return (
    <button
      onClick={onOpen}
      className={`group relative block w-full text-left overflow-hidden bg-ink ${className}`}
      aria-label={`Voir les photos : ${project.title}`}
    >
      <div className={`relative w-full ${tall ? 'h-full min-h-[420px]' : 'aspect-[4/3]'}`}>
        <img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <span
            className={`text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1.5 ${
              project.status === 'Livré' ? 'bg-white text-ink' : 'bg-pmsRed text-white'
            }`}
          >
            {project.status}
          </span>
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-white/90 bg-ink/50 backdrop-blur px-2 py-1">
            <Images size={13} /> {project.images.length}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60 mb-2">{project.category}</p>
            <h3 className="font-display text-white text-xl sm:text-2xl font-bold leading-tight" style={{ fontStretch: '108%' }}>
              {project.title}
            </h3>
          </div>
          <span className="shrink-0 w-11 h-11 grid place-items-center bg-white text-ink transition-all duration-300 group-hover:bg-pmsRed group-hover:text-white group-hover:rotate-45">
            <ArrowUpRight size={20} />
          </span>
        </div>
      </div>
    </button>
  );
}
