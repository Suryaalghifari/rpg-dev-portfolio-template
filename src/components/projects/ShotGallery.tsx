import React, { useState } from 'react';
import { Shot } from '../../types/portfolio';
import { Lightbox } from './Lightbox';

export interface ShotGalleryProps {
  shots: Shot[];
  projectTitle: string;
}

export const ShotGallery: React.FC<ShotGalleryProps> = ({
  shots,
  projectTitle,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!shots || shots.length === 0) return null;
  const currentShot = shots[currentIndex] || shots[0];

  return (
    <div className="gal flex flex-col gap-2 w-full">
      {/* Main Image Clickable Frame */}
      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        className="shot block relative w-full aspect-[16/9] border-4 border-ink outline outline-4 outline-wood-3 overflow-hidden cursor-pointer group bg-ink text-left p-0"
        aria-label={`Perbesar tangkapan layar ${currentIndex + 1} dari ${shots.length}: ${currentShot.alt}`}
      >
        <img
          src={currentShot.src}
          alt={currentShot.alt}
          className="w-full h-full object-contain group-hover:scale-[1.01] transition-transform duration-100"
          loading="lazy"
        />
        <div className="absolute bottom-2 right-2 bg-ink/90 border-2 border-gold px-2 py-0.5 font-head text-[10px] text-gold uppercase opacity-0 group-hover:opacity-100 transition-opacity">
          Klik perbesar 🔍
        </div>
      </button>

      {/* Thumbnail Buttons */}
      {shots.length > 1 && (
        <div
          role="group"
          aria-label={`Galeri tangkapan layar untuk ${projectTitle}`}
          className="thumbs flex gap-2"
        >
          {shots.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`flex-1 h-9 border-4 font-body text-[20px] transition-colors cursor-pointer ${
                currentIndex === idx
                  ? 'border-gold text-gold bg-wood-2 shadow-[inset_2px_2px_0_#1a0f08]'
                  : 'border-ink text-cream bg-wood-2 hover:border-gold hover:text-gold'
              }`}
              aria-label={`Lihat gambar ${idx + 1}`}
              aria-pressed={currentIndex === idx}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      <Lightbox
        open={lightboxOpen}
        shots={shots}
        currentIndex={currentIndex}
        projectTitle={projectTitle}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setCurrentIndex}
      />
    </div>
  );
};
