import { useState, useEffect } from 'react';

export function useScrollSpy(
  sectionIds: string[],
  rootMargin: string = '-20% 0px -50% 0px'
): [string, (id: string) => void] {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] || 'about');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      // When at the very top of page (hero & 3D island), reset to first section
      if (window.scrollY < 250) {
        setActiveId(sectionIds[0] || 'about');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) {
      return () => window.removeEventListener('scroll', handleScroll);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 250) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [sectionIds, rootMargin]);

  return [activeId, setActiveId];
}
