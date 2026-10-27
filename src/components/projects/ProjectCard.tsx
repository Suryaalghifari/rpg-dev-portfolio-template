import React from 'react';
import { Project } from '../../types/portfolio';
import { Panel } from '../ui/Panel';
import { Badge } from '../ui/Badge';
import { ShotGallery } from './ShotGallery';

export interface ProjectCardProps {
  project: Project;
  dimmed?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  dimmed = false,
}) => {
  return (
    <Panel
      as="article"
      className={`card ${dimmed ? 'dim' : ''} p-5 md:p-6 flex flex-col gap-4 transition-opacity duration-150 h-full`}
      aria-label={`Proyek: ${project.title}`}
    >
      {/* 16:9 Screenshot Gallery */}
      <ShotGallery shots={project.shots} projectTitle={project.title} />

      {/* Header: Title + Status + Year */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b-2 border-wood-3 pb-3 min-h-[58px]">
        <h3 className="font-head text-[15px] md:text-[16px] text-cream uppercase m-0 tracking-wide">
          {project.title}
        </h3>
        <div className="flex items-center gap-2 shrink-0">
          <Badge status={project.status} />
          <span className="font-body text-[18px] text-meta">
            {project.year}
          </span>
        </div>
      </div>

      {/* Triad: Masalah - Peran - Hasil */}
      <div className="flex-1 flex flex-col justify-between gap-3 font-body text-[19px] leading-snug">
        <div className="min-h-[76px]">
          <b className="font-head text-[11px] text-meta uppercase tracking-wider block mb-0.5">
            Masalah:
          </b>
          <span className="text-meta block leading-snug">
            {project.problem}
          </span>
        </div>

        <div className="min-h-[76px]">
          <b className="font-head text-[11px] text-cream uppercase tracking-wider block mb-0.5">
            Peran:
          </b>
          <span className="text-cream block leading-snug">
            {project.role}
          </span>
        </div>

        <div className="p-3 bg-wood-2 border-2 border-ink min-h-[96px] flex flex-col justify-center">
          <b className="font-head text-[11px] text-mint uppercase tracking-wider block mb-0.5">
            Hasil Nyata:
          </b>
          <span className="text-mint font-bold text-[20px] leading-snug block">
            {project.result}
          </span>
        </div>
      </div>

      {/* Skill Tags: Pinned together at bottom */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-wood-3/50 min-h-[46px] items-center">
        {project.skills.map((skillId) => (
          <span key={skillId} className="tag text-xs">
            #{skillId}
          </span>
        ))}
      </div>
    </Panel>
  );
};
