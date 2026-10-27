import React from 'react';
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiNextdotjs,
  SiPython,
  SiLinux,
  SiLaravel,
  SiVuedotjs,
  SiNuxt,
  SiMysql,
  SiRedis,
  SiKubernetes,
  SiNginx,
  SiPrometheus,
} from 'react-icons/si';
import { Skill } from '../../types/portfolio';

// Map icon names to react-icons components
const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>> = {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiNextdotjs,
  SiPython,
  SiLinux,
  SiLaravel,
  SiVuedotjs,
  SiNuxt,
  SiMysql,
  SiRedis,
  SiKubernetes,
  SiNginx,
  SiPrometheus,
};

export interface SkillSlotProps {
  skill: Skill;
  selected: boolean;
  onSelect: (skillId: string) => void;
}

export const SkillSlot: React.FC<SkillSlotProps> = ({
  skill,
  selected,
  onSelect,
}) => {
  const IconComponent = skill.icon ? ICON_MAP[skill.icon] : null;

  return (
    <button
      type="button"
      className={`slot flex flex-col items-center justify-center p-3 cursor-pointer text-center select-none bg-wood border-4 transition-colors ${
        selected
          ? 'border-gold text-gold shadow-[inset_0_0_0_4px_#4a2e1b]'
          : 'border-ink text-cream hover:border-gold hover:text-gold shadow-[inset_0_0_0_4px_#4a2e1b]'
      }`}
      aria-pressed={selected}
      onClick={() => onSelect(skill.id)}
    >
      <div className="h-8 flex items-center justify-center mb-1 text-current">
        {IconComponent ? (
          <IconComponent size={28} aria-hidden="true" />
        ) : (
          <div className="w-6 h-6 border-2 border-current flex items-center justify-center text-xs font-head">
            *
          </div>
        )}
      </div>
      <span className="font-body text-[20px] leading-tight mb-1 text-cream">
        {skill.name}
      </span>
      <b className="font-head text-[11px] text-mint uppercase tracking-wider font-normal">
        {skill.rank}
      </b>
    </button>
  );
};
