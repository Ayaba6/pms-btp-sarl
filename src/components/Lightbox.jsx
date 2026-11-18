import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Visionneuse plein écran : flèches, clavier (← → Échap) et miniatures.
export default function Lightbox({ images, index, title, onClose, onChange }) {
  const prev = useCallback(() => onChange((index - 1 + images.length) % images.length), [index, images.length, onChange]);
  const next = useCallback(() => onChange((index + 1) % images.length), [index, images.length, onChange]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  return (
    <div className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm flex flex-col" role="dialog" aria-modal="true" aria-label={title}>
      <div className="flex items-center justify-between px-5 sm:px-8 h-16 text-white shrink-0">
        <p className="text-sm font-semibold truncate pr-4">
          {title} <span className="text-white/40 font-normal ml-2">{index + 1} / {images.length}</span>
        </p>
        <button onClick={onClose} className="p-2 -mr-2 hover:text-pmsRed transition-colors" aria-label="Fermer">
          <X size={26} />
        </button>
      </div>

      <div className="relative flex-1 min-h-0 flex items-center justify-center px-4 sm:px-20" onClick={onClose}>
        <img
          key={images[index]}
          src={images[index]}
          alt={`${title} — photo ${index + 1}`}
          className="max-h-full max-w-full object-contain shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 grid place-items-center bg-white/10 hover:bg-pmsRed text-white transition-colors"
              aria-label="Photo précédente"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 grid place-items-center bg-white/10 hover:bg-pmsRed text-white transition-colors"
              aria-label="Photo suivante"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="shrink-0 flex gap-2 overflow-x-auto px-5 sm:px-8 py-4 justify-start sm:justify-center">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => onChange(i)}
              className={`shrink-0 w-20 h-14 overflow-hidden transition-all ${
                i === index ? 'ring-2 ring-pmsRed opacity-100' : 'opacity-40 hover:opacity-80'
              }`}
              aria-label={`Voir la photo ${i + 1}`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
