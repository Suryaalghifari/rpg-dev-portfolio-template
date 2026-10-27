import React from 'react';
import { Project } from '../../types/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectArchive } from '../projects/ProjectArchive';

export interface ProjectsSectionProps {
  projects: Project[];
  selectedSkill?: string | null;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  selectedSkill = null,
}) => {
  const featuredProjects = projects.filter((p) => p.featured);
  const archiveProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-[84px] mb-14" aria-labelledby="heading-projects">
      <SectionHeading
        id="heading-projects"
        subtitle="Misi utama & pekerjaan rekayasa dengan hasil terukur"
      >
        Proyek
      </SectionHeading>

      {/* Featured Main Quests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            dimmed={Boolean(
              selectedSkill && !project.skills.includes(selectedSkill)
            )}
          />
        ))}
      </div>

      {/* Project Archive List */}
      <ProjectArchive
        projects={archiveProjects}
        selectedSkill={selectedSkill}
      />
    </section>
  );
};
