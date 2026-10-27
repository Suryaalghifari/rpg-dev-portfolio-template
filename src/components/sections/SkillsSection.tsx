import React from 'react';
import { Skill, Project } from '../../types/portfolio';
import { SkillSlot } from '../skills/SkillSlot';
import { SectionHeading } from '../ui/SectionHeading';
import { Panel } from '../ui/Panel';
import { Button } from '../ui/Button';

export interface SkillsSectionProps {
  skills: Skill[];
  projects: Project[];
  selectedSkill: string | null;
  onSelectSkill: (skillId: string) => void;
  onClearSkill: () => void;
}

const RANK_DEFINITIONS: Record<string, string> = {
  Harian: 'Dipakai rutin harian dalam pengembangan proyek aktif.',
  Produksi: 'Pernah dirilis dan berjalan stabil di lingkungan produksi nyata.',
  'Pernah coba': 'Eksplorasi teknis, pembelajaran konsep, dan eksperimen.',
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  skills,
  projects,
  selectedSkill,
  onSelectSkill,
  onClearSkill,
}) => {
  const activeSkill = skills.find((s) => s.id === selectedSkill);
  const matchingProjectsCount = selectedSkill
    ? projects.filter((p) => p.skills.includes(selectedSkill)).length
    : 0;

  return (
    <section id="skills" className="scroll-mt-[84px] mb-14" aria-labelledby="heading-skills">
      <SectionHeading
        id="heading-skills"
        subtitle="Klik slot untuk menyorot proyek yang menggunakan perkakas ini"
      >
        Skill
      </SectionHeading>

      {/* Rank Legends */}
      <div className="flex flex-wrap gap-4 text-xs font-head text-meta mb-4">
        <span><b className="text-mint">HARIAN</b>: Rutin</span>
        <span>•</span>
        <span><b className="text-mint">PRODUKSI</b>: Rilis Nyata</span>
        <span>•</span>
        <span><b className="text-mint">PERNAH COBA</b>: Eksperimen</span>
      </div>

      {/* Inventory Slot Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {skills.map((skill) => (
          <SkillSlot
            key={skill.id}
            skill={skill}
            selected={selectedSkill === skill.id}
            onSelect={(id: string) => {
              if (selectedSkill === id) {
                onClearSkill();
              } else {
                onSelectSkill(id);
              }
            }}
          />
        ))}
      </div>

      {/* Active Skill Filter Box */}
      {activeSkill && (
        <Panel className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-2 border-gold" aria-live="polite">
          <div>
            <div className="font-head text-sm text-gold uppercase mb-1">
              Filter Aktif: {activeSkill.name} ({activeSkill.rank})
            </div>
            <div className="font-body text-[20px] text-cream">
              {RANK_DEFINITIONS[activeSkill.rank]} Terkait dengan{' '}
              <b className="text-gold">{matchingProjectsCount}</b> proyek di bawah.
            </div>
          </div>
          <Button onClick={onClearSkill} className="shrink-0 text-xs">
            LEPAS FILTER
          </Button>
        </Panel>
      )}
    </section>
  );
};
