import React from 'react';
import { Button } from '../ui/Button';

export interface NavItem {
  id: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'Tentang' },
  { id: 'projects', label: 'Proyek' },
  { id: 'skills', label: 'Skill' },
  { id: 'contact', label: 'Kontak' },
];

export interface SectionNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenAppraisal?: () => void;
}

export const SectionNav: React.FC<SectionNavProps> = ({
  activeSection,
  onNavigate,
  onOpenAppraisal,
}) => {
  return (
    <nav
      className="sticky top-0 z-40 bg-[#16405a] border-4 border-ink p-2 md:p-3 mb-10 flex flex-wrap gap-2 md:gap-4 justify-center items-center shadow-[0_4px_0_#1a0f08]"
      aria-label="Navigasi bagian halaman"
    >
      {NAV_ITEMS.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <Button
            key={item.id}
            selected={isActive}
            onClick={() => onNavigate(item.id)}
            aria-current={isActive ? 'page' : undefined}
            className="text-xs md:text-sm tracking-wider"
          >
            {item.label}
          </Button>
        );
      })}

      {/* Button to Appraisal Page (Uniform style, tracks active state) */}
      <Button
        type="button"
        selected={activeSection === 'appraisal'}
        aria-current={activeSection === 'appraisal' ? 'page' : undefined}
        onClick={onOpenAppraisal || (() => onNavigate('appraisal'))}
        className="text-xs md:text-sm tracking-wider"
      >
        Cek Resume
      </Button>
    </nav>
  );
};
