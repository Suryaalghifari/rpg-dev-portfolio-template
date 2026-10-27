import React, { useEffect, useCallback } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Shot } from '../../types/portfolio';
import { Button } from '../ui/Button';

export interface LightboxProps {
  open: boolean;
  shots: Shot[];
  currentIndex: number;
  projectTitle: string;
  onClose: () => void;
  onIndexChange: (newIndex: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  open,
  shots,
  currentIndex,
  projectTitle,
  onClose,
  onIndexChange,
}) => {
  const currentShot = shots[currentIndex] || shots[0];

  const handlePrev = useCallback(() => {
    if (shots.length <= 1) return;
    onIndexChange((currentIndex - 1 + shots.length) % shots.length);
  }, [currentIndex, shots.length, onIndexChange]);

  const handleNext = useCallback(() => {
    if (shots.length <= 1) return;
    onIndexChange((currentIndex + 1) % shots.length);
  }, [currentIndex, shots.length, onIndexChange]);

  // Arrow key navigation
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, handlePrev, handleNext]);

  if (!currentShot) return null;

  return (
    <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-ink/90 z-50 backdrop-blur-none" />
        <Dialog.Content
          className="fixed inset-4 md:inset-10 z-50 flex flex-col items-center justify-center outline-none select-none"
          aria-describedby="lightbox-caption"
        >
          {/* Header Bar */}
          <div className="w-full max-w-4xl flex items-center justify-between bg-wood border-4 border-ink p-3 mb-2 shadow-[inset_0_0_0_2px_#4a2e1b]">
            <Dialog.Title className="font-head text-sm text-gold uppercase truncate pr-4">
              {projectTitle} — Tangkapan Layar ({currentIndex + 1}/{shots.length})
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button className="h-8 py-0 px-3 text-xs">
                TUTUP (ESC)
              </Button>
            </Dialog.Close>
          </div>

          {/* Main Image Frame */}
          <div className="relative max-w-4xl w-full flex-1 flex items-center justify-center bg-ink border-4 border-wood-3 overflow-hidden p-2">
            <img
              src={currentShot.src}
              alt={currentShot.alt}
              className="max-h-[65vh] w-auto max-w-full object-contain"
            />

            {/* Prev / Next Buttons */}
            {shots.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Tangkapan layar sebelumnya"
                  className="absolute left-4 top-1/2 -translate-y-1/2 btn h-12 w-12 text-lg font-head"
                >
                  ◀
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Tangkapan layar berikutnya"
                  className="absolute right-4 top-1/2 -translate-y-1/2 btn h-12 w-12 text-lg font-head"
                >
                  ▶
                </button>
              </>
            )}
          </div>

          {/* Caption */}
          <div
            id="lightbox-caption"
            className="w-full max-w-4xl bg-wood border-4 border-ink p-3 mt-2 text-center font-body text-[22px] text-cream shadow-[inset_0_0_0_2px_#4a2e1b]"
          >
            {currentShot.caption || currentShot.alt}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
