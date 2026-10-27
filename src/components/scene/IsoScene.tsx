import React, { useRef, useState, useEffect } from 'react';
import { BUILDINGS_CONFIG } from './buildings.config';
import { Building } from './Building';
import { Cube } from './Cube';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export interface IsoSceneProps {
  activeSection?: string;
  onSelectBuilding?: (sectionId: string) => void;
}

export const IsoScene: React.FC<IsoSceneProps> = ({
  activeSection = '',
  onSelectBuilding,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const newScale = Math.min(1, Math.max(0.38, width / 900));
      setScale(newScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const handleSelect = (sectionId: string) => {
    if (onSelectBuilding) {
      onSelectBuilding(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({
          behavior: reducedMotion ? 'auto' : 'smooth',
          block: 'start',
        });
      }
    }
  };

  const stageHeight = Math.round(560 * scale + 60);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden flex items-center justify-center select-none"
      style={{
        height: `${stageHeight}px`,
        perspective: '1400px',
      }}
      aria-label="Pulau Isometrik Navigasi Desa RPG"
    >
      {/* 3D Scene Root */}
      <div
        className="scene"
        style={{
          width: '600px',
          height: '600px',
          position: 'relative',
          transform: `scale(${scale}) rotateX(60deg) rotateZ(45deg)`,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          transition: reducedMotion ? 'none' : 'transform 0.2s ease-out',
        }}
      >
        {/* Island Base (600x600, h: 44, z: -44) */}
        <Cube
          x={0}
          y={0}
          z={-44}
          w={600}
          d={600}
          h={44}
          palette="soil"
        />

        {/* Crossing Roads */}
        <Cube x={270} y={0} z={0} w={60} d={600} h={2} palette="road" />
        <Cube x={0} y={270} z={0} w={600} d={60} h={2} palette="road" />

        {/* Central Stone Plaza */}
        <Cube x={225} y={225} z={2} w={150} d={150} h={2} palette="stone" />

        {/* Lamp Posts */}
        <Cube x={215} y={215} z={2} w={8} d={8} h={40} palette="stone" />
        <Cube x={212} y={212} z={42} w={14} d={14} h={14} palette="lamp" />

        <Cube x={375} y={375} z={2} w={8} d={8} h={40} palette="stone" />
        <Cube x={372} y={372} z={42} w={14} d={14} h={14} palette="lamp" />

        {/* Trees */}
        <Cube x={230} y={40} z={0} w={14} d={14} h={26} palette="trunk" />
        <Cube x={216} y={26} z={26} w={42} d={42} h={38} palette="leaf" />

        <Cube x={40} y={230} z={0} w={14} d={14} h={26} palette="trunk" />
        <Cube x={26} y={216} z={26} w={42} d={42} h={38} palette="leaf" />

        {/* 4 Interactive Buildings */}
        {BUILDINGS_CONFIG.map((b) => (
          <Building
            key={b.id}
            config={b}
            active={activeSection === b.targetSection}
            onSelect={handleSelect}
            reducedMotion={reducedMotion}
          />
        ))}

        {/* Chimney Smoke Particles on Tavern */}
        {!reducedMotion && (
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              transform: 'translate3d(175px, 85px, 150px)',
              transformStyle: 'preserve-3d',
              pointerEvents: 'none',
            }}
          >
            <div className="smoke-particle smoke-1" />
            <div className="smoke-particle smoke-2" />
            <div className="smoke-particle smoke-3" />
          </div>
        )}
      </div>

      <style>{`
        @keyframes smokeRise {
          0% {
            transform: translate3d(0, 0, 0) scale(0.6);
            opacity: 0.8;
          }
          100% {
            transform: translate3d(-10px, -10px, 45px) scale(1.3);
            opacity: 0;
          }
        }
        .smoke-particle {
          position: absolute;
          width: 14px;
          height: 14px;
          background: #e8eef0;
          border: 2px solid #1a0f08;
          border-radius: 0;
          animation: smokeRise 3s infinite steps(6);
        }
        .smoke-1 { animation-delay: 0s; }
        .smoke-2 { animation-delay: 1s; }
        .smoke-3 { animation-delay: 2s; }
      `}</style>
    </div>
  );
};
