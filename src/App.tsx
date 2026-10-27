import { useState, useEffect } from 'react';
import skillsDataRaw from './data/skills.json';
import projectsDataRaw from './data/projects.json';
import aboutDataRaw from './data/about.json';
import { Skill, Project, AboutData } from './types/portfolio';
import { IsoScene } from './components/scene/IsoScene';
import { SectionNav } from './components/nav/SectionNav';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Panel } from './components/ui/Panel';
import { Button } from './components/ui/Button';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useReducedMotion } from './hooks/useReducedMotion';

const skillsData = skillsDataRaw as Skill[];
const projectsData = projectsDataRaw as Project[];
const aboutData = aboutDataRaw as AboutData;

const SECTION_IDS = ['about', 'projects', 'skills', 'contact'];

export default function App() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useScrollSpy(SECTION_IDS);
  const reducedMotion = useReducedMotion();

  const resumeAppUrl =
    import.meta.env.VITE_RESUME_APP_URL || 'https://resume.uyasky.web.id';

  // Read initial skill from URL if present
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const skillParam = params.get('skill');
      if (skillParam && skillsData.some((s) => s.id === skillParam)) {
        setSelectedSkill(skillParam);
      }
    }
  }, []);

  // Sync skill to URL parameter
  const handleSelectSkill = (skillId: string) => {
    setSelectedSkill(skillId);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('skill', skillId);
      window.history.replaceState({}, '', url.toString());
    }
  };

  const handleClearSkill = () => {
    setSelectedSkill(null);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('skill');
      window.history.replaceState({}, '', url.toString());
    }
  };

  const handleOpenAppraisal = () => {
    window.open(resumeAppUrl, '_blank', 'noopener,noreferrer');
  };

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'appraisal') {
      handleOpenAppraisal();
      return;
    }
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({
        behavior: reducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="min-h-screen text-cream pb-16">
      {/* Top Banner / Hero Title */}
      <header className="pt-8 pb-4 text-center px-4 max-w-[1000px] mx-auto">
        <h1 className="font-head text-[clamp(24px,5vw,42px)] text-gold uppercase tracking-wider m-0 mb-1">
          {aboutData.name}
        </h1>
        <p className="font-body text-[24px] md:text-[26px] text-sky-text m-0">
          {aboutData.subtitle}
        </p>
      </header>

      {/* 3D Isometric Island Hero Stage */}
      <section className="mb-4">
        <IsoScene
          activeSection={activeSection}
          onSelectBuilding={handleNavigate}
        />
      </section>

      {/* Main Container */}
      <main className="max-w-[1000px] mx-auto px-4">
        {/* Sticky Section Navigation */}
        <SectionNav
          activeSection={activeSection}
          onNavigate={handleNavigate}
          onOpenAppraisal={handleOpenAppraisal}
        />

        {/* Content Sections */}
        <AboutSection data={aboutData} />
        <ProjectsSection
          projects={projectsData}
          selectedSkill={selectedSkill}
        />
        <SkillsSection
          skills={skillsData}
          projects={projectsData}
          selectedSkill={selectedSkill}
          onSelectSkill={handleSelectSkill}
          onClearSkill={handleClearSkill}
        />

        {/* Mini Banner: Guild Resume Appraisal Callout */}
        <Panel className="p-5 md:p-6 bg-wood-2 border-4 border-wood-3 flex flex-col sm:flex-row items-center justify-between gap-4 mb-16 shadow-[4px_4px_0_#1a0f08]">
          <div className="text-center sm:text-left">
            <h3 className="font-head text-[15px] md:text-[17px] text-gold uppercase m-0">
              Guild Resume Appraisal
            </h3>
            <p className="font-body text-[20px] text-sky-text m-0 mt-0.5">
              Uji kelayakan dokumen resume Anda di mata recruiter & ATS (100% In-Memory di Browser).
            </p>
          </div>
          <Button
            type="button"
            onClick={handleOpenAppraisal}
            className="text-xs shrink-0 tracking-wider"
          >
            BUKA ALAT AUDIT →
          </Button>
        </Panel>

        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="text-center font-body text-[20px] text-sky-text border-t-2 border-[#16405a] pt-8 mt-12">
        <p className="m-0">
          16-Bit RPG Developer Portfolio Template.
        </p>
        <p className="text-meta text-[18px] m-0 mt-1">
          Created by <a href="https://github.com/Suryaalghifari" target="_blank" rel="noopener noreferrer" className="text-gold underline font-bold">@Suryaalghifari</a> • Live Demo: <a href="https://uyasky.web.id" target="_blank" rel="noopener noreferrer" className="text-mint underline">uyasky.web.id</a>
        </p>
      </footer>
    </div>
  );
}
