import React, { useState } from 'react';
import { Project } from '../../types/portfolio';
import { Panel } from '../ui/Panel';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ShotGallery } from './ShotGallery';

export interface ProjectArchiveProps {
  projects: Project[];
  selectedSkill?: string | null;
}

export const ProjectArchive: React.FC<ProjectArchiveProps> = ({
  projects,
  selectedSkill = null,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.result.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesSearch;
  });

  if (projects.length === 0) return null;

  const toggleExpand = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <div className="mt-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <h3 className="font-head text-[14px] text-gold uppercase tracking-wider m-0">
            Arsip & Modul Proyek Lainnya
          </h3>
          <p className="font-body text-[20px] text-sky-text m-0">
            Daftar lengkap proyek dengan screenshot dan rekayasa arsitektur
          </p>
        </div>

        {/* Search input */}
        <div className="shrink-0">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari arsip..."
            className="bg-wood-2 border-4 border-ink px-3 py-1.5 font-body text-[20px] text-cream placeholder-meta outline-none focus:border-gold w-full sm:w-48"
            aria-label="Cari arsip proyek"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {filteredProjects.map((p) => {
          const isDimmed = Boolean(
            selectedSkill && !p.skills.includes(selectedSkill)
          );
          const isExpanded = expandedSlug === p.slug;
          const firstShot = p.shots[0];

          return (
            <Panel
              key={p.slug}
              className={`p-4 flex flex-col gap-3 transition-opacity ${
                isDimmed ? 'opacity-35' : ''
              }`}
            >
              {/* Summary Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  {/* Mini Thumbnail */}
                  {firstShot && (
                    <button
                      type="button"
                      onClick={() => toggleExpand(p.slug)}
                      className="w-16 h-10 shrink-0 border-2 border-ink outline outline-1 outline-wood-3 overflow-hidden bg-ink cursor-pointer hover:border-gold transition-colors"
                      title="Klik untuk membuka detail dan galeri tangkapan layar"
                      aria-label={`Lihat detail ${p.title}`}
                    >
                      <img
                        src={firstShot.src}
                        alt={firstShot.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  )}

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <span className="font-head text-[13px] md:text-[14px] text-cream uppercase font-bold truncate">
                        {p.title}
                      </span>
                      <Badge status={p.status} />
                      <span className="font-body text-[18px] text-meta">
                        ({p.year})
                      </span>
                    </div>
                    <div className="font-body text-[18px] text-mint line-clamp-1">
                      {p.result}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 justify-between md:justify-end">
                  {/* Skill tags */}
                  <div className="hidden lg:flex flex-wrap gap-1.5">
                    {p.skills.map((s) => (
                      <span
                        key={s}
                        className={`tag text-xs ${
                          selectedSkill === s
                            ? 'border-gold text-gold font-bold'
                            : ''
                        }`}
                      >
                        #{s}
                      </span>
                    ))}
                  </div>

                  {/* Toggle Button */}
                  <Button
                    type="button"
                    onClick={() => toggleExpand(p.slug)}
                    className="text-xs px-2.5 py-1"
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? 'TUTUP ▲' : `DETAIL (${p.shots.length} SHOTS) ▼`}
                  </Button>
                </div>
              </div>

              {/* Expanded Detail & Screenshot Gallery */}
              {isExpanded && (
                <div className="mt-2 pt-3 border-t-2 border-wood-3 flex flex-col md:flex-row gap-5">
                  <div className="w-full md:w-1/2 shrink-0">
                    <ShotGallery shots={p.shots} projectTitle={p.title} />
                  </div>

                  <div className="flex-1 flex flex-col justify-between gap-3 font-body text-[19px] leading-snug">
                    <div className="flex flex-col gap-2">
                      <div>
                        <b className="font-head text-[11px] text-meta uppercase tracking-wider block mb-0.5">
                          Masalah:
                        </b>
                        <span className="text-meta">{p.problem}</span>
                      </div>

                      <div>
                        <b className="font-head text-[11px] text-cream uppercase tracking-wider block mb-0.5">
                          Peran:
                        </b>
                        <span className="text-cream">{p.role}</span>
                      </div>

                      <div className="p-3 bg-wood-2 border-2 border-ink">
                        <b className="font-head text-[11px] text-mint uppercase tracking-wider block mb-0.5">
                          Hasil Nyata:
                        </b>
                        <span className="text-mint font-bold text-[20px]">
                          {p.result}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {p.skills.map((s) => (
                        <span key={s} className="tag text-xs">
                          #{s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Panel>
          );
        })}

        {filteredProjects.length === 0 && (
          <div className="p-6 text-center font-body text-[22px] text-meta bg-wood border-4 border-ink">
            Tidak ada proyek arsip yang cocok dengan pencarian "{searchTerm}".
          </div>
        )}
      </div>
    </div>
  );
};
