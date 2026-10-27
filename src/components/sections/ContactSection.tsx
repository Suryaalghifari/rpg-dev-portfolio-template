import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Panel } from '../ui/Panel';
import { Button } from '../ui/Button';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-[84px] mb-16" aria-labelledby="heading-contact">
      <SectionHeading
        id="heading-contact"
        subtitle="Terhubung untuk diskusi teknis, kolaborasi proyek, atau tawaran peran"
      >
        Kontak
      </SectionHeading>

      <Panel className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-body text-[26px] md:text-[28px] text-cream mb-2">
            Mencari pengembang full-stack yang mengutamakan kualitas & bukti kerja nyata?
          </div>
          <p className="font-body text-[20px] text-sky-text m-0">
            Kirim pesan langsung atau tinjau repositori kode publik saya.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <Button
            as="a"
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs"
          >
            GITHUB
          </Button>
          <Button
            as="a"
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs"
          >
            LINKEDIN
          </Button>
        </div>
      </Panel>
    </section>
  );
};
