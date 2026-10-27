import React from 'react';

export interface SectionHeadingProps {
  id?: string;
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  children,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`mb-6 ${className}`.trim()}>
      <h2
        id={id}
        className="font-head text-[clamp(16px,3vw,22px)] text-gold uppercase tracking-wider m-0"
      >
        {children}
      </h2>
      {subtitle && (
        <p className="font-body text-[22px] text-sky-text mt-1 mb-0">
          {subtitle}
        </p>
      )}
    </div>
  );
};
