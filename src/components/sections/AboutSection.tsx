import React, { useState } from 'react';
import { AboutData } from '../../types/portfolio';
import { Panel } from '../ui/Panel';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';

export interface AboutSectionProps {
  data: AboutData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  const [selectedId, setSelectedId] = useState<string>(
    data.options[0]?.id || ''
  );

  const currentOption =
    data.options.find((o) => o.id === selectedId) || data.options[0];

  return (
    <section id="about" className="scroll-mt-[84px] mb-14" aria-labelledby="heading-about">
      <SectionHeading id="heading-about" subtitle="Kenalan & riwayat singkat">
        Tentang
      </SectionHeading>

      <Panel className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start">
        {/* Avatar 160px */}
        <div className="shrink-0 mx-auto md:mx-0">
          <div className="w-[140px] h-[140px] md:w-[160px] md:h-[160px] border-4 border-ink outline outline-4 outline-wood-3 overflow-hidden bg-wood-2">
            <img
              src={data.avatar}
              alt={`Foto profil ${data.name}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Talk & Interactive Dialog */}
        <div className="flex-1 flex flex-col justify-between w-full">
          <div>
            <div className="font-head text-[13px] text-mint uppercase tracking-wider mb-2">
              {data.name}
            </div>

            {/* Answer with aria-live */}
            <div
              id="ans"
              aria-live="polite"
              className="font-body text-[24px] leading-relaxed text-cream min-h-[90px] mb-6 p-4 bg-wood-2 border-2 border-ink shadow-[inset_2px_2px_0_#1a0f08]"
            >
              "{currentOption?.answer}"
            </div>

            {/* Question Buttons Group */}
            <div
              role="group"
              aria-label="Pertanyaan dialog Tentang"
              className="flex flex-wrap gap-3 mb-8"
            >
              {data.options.map((opt) => (
                <Button
                  key={opt.id}
                  selected={selectedId === opt.id}
                  onClick={() => setSelectedId(opt.id)}
                  className="text-xs"
                >
                  {opt.question}
                </Button>
              ))}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap sm:flex-nowrap justify-between gap-4 md:gap-8 pt-4 border-t-2 border-wood-3">
            {data.stats.map((s, idx) => (
              <div key={idx} className="flex flex-col min-w-0">
                <span className="font-head text-[16px] sm:text-[18px] md:text-[21px] text-gold whitespace-nowrap">
                  {s.value}
                </span>
                <span className="font-head text-[10px] md:text-[11px] text-meta uppercase tracking-wide whitespace-nowrap">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Panel>

      {/* Career History & Engineering Track */}
      {data.experience && data.experience.length > 0 && (
        <div className="mt-8 flex flex-col gap-3">
          <h3 className="font-head text-[14px] text-gold uppercase tracking-wider mb-2">
            Riwayat Pekerjaan & Rekayasa Sistem
          </h3>
          <div className="flex flex-col gap-3">
            {data.experience.map((exp, idx) => (
              <Panel key={idx} className="p-4 bg-wood">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <div className="font-head text-[13px] text-cream uppercase">
                    {exp.company} — <span className="text-mint">{exp.role}</span>
                  </div>
                  <div className="font-body text-[18px] text-meta">
                    {exp.period} • {exp.location}
                  </div>
                </div>
                <p className="font-body text-[20px] text-cream/90 m-0 leading-snug">
                  {exp.summary}
                </p>
              </Panel>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
