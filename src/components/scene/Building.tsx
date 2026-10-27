import React, { useState } from 'react';
import { BuildingItemConfig } from './buildings.config';
import { Cube } from './Cube';
import { Billboard } from './Billboard';

export interface BuildingProps {
  config: BuildingItemConfig;
  active: boolean;
  onSelect: (targetId: string) => void;
  reducedMotion?: boolean;
}

export const Building: React.FC<BuildingProps> = ({
  config,
  active,
  onSelect,
  reducedMotion = false,
}) => {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const isHighlighted = hovered || focused || active;
  const elevZ = isHighlighted && !reducedMotion ? 14 : 0;

  const handleClick = () => onSelect(config.targetSection);
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(config.targetSection);
    }
  };

  const renderBuildingCubes = () => {
    switch (config.id) {
      case 'about':
        return (
          <>
            {/* Dinding Kedai */}
            <Cube x={0} y={0} z={0} w={150} d={150} h={90} palette="cream" hasWindows active={isHighlighted} />
            {/* Atap koral bawah */}
            <Cube x={-10} y={-10} z={90} w={170} d={170} h={36} palette="coral" active={isHighlighted} />
            {/* Atap gelap atas */}
            <Cube x={20} y={20} z={126} w={110} d={110} h={24} palette="dark" active={isHighlighted} />
            {/* Cerobong asap */}
            <Cube x={105} y={20} z={90} w={24} d={24} h={56} palette="stone" active={isHighlighted} />
          </>
        );
      case 'projects':
        return (
          <>
            {/* Dinding Bengkel */}
            <Cube x={0} y={0} z={0} w={150} d={150} h={70} palette="stone" hasWindows active={isHighlighted} />
            {/* Atap gelap */}
            <Cube x={-10} y={-10} z={70} w={170} d={170} h={30} palette="dark" active={isHighlighted} />
            {/* Cerobong batu */}
            <Cube x={105} y={15} z={70} w={26} d={26} h={50} palette="stone" active={isHighlighted} />
          </>
        );
      case 'skills':
        return (
          <>
            {/* Dinding Gudang */}
            <Cube x={0} y={0} z={0} w={150} d={120} h={50} palette="cream" hasWindows active={isHighlighted} />
            {/* Atap koral */}
            <Cube x={-10} y={-10} z={50} w={170} d={140} h={14} palette="coral" active={isHighlighted} />
            {/* Atap atas krem */}
            <Cube x={10} y={10} z={64} w={130} d={100} h={14} palette="road" active={isHighlighted} />
          </>
        );
      case 'appraisal':
        return (
          <>
            {/* Balai Guild Pusat (Stone walls with windows) */}
            <Cube x={0} y={0} z={0} w={120} d={120} h={75} palette="stone" hasWindows active={isHighlighted} />
            {/* Atap koral megah bertingkat */}
            <Cube x={-8} y={-8} z={75} w={136} d={136} h={24} palette="coral" active={isHighlighted} />
            {/* Atap tingkat dua krem */}
            <Cube x={14} y={14} z={99} w={92} d={92} h={20} palette="cream" active={isHighlighted} />
            {/* Kubah kristal lentera emas di puncak */}
            <Cube x={46} y={46} z={119} w={28} d={28} h={26} palette="lamp" active={isHighlighted} />
          </>
        );
      case 'contact':
        return (
          <>
            {/* Dinding Kantor Pos */}
            <Cube x={0} y={0} z={0} w={150} d={150} h={80} palette="cream" hasWindows active={isHighlighted} />
            {/* Atap hijau */}
            <Cube x={-10} y={-10} z={80} w={170} d={170} h={24} palette="green" active={isHighlighted} />
            {/* Menara */}
            <Cube x={90} y={90} z={104} w={50} d={50} h={56} palette="stone" active={isHighlighted} />
            {/* Atap menara hijau */}
            <Cube x={82} y={82} z={160} w={66} d={66} h={16} palette="green" active={isHighlighted} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Navigasi ke bagian ${config.name}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        transform: `translate3d(${config.x}px, ${config.y}px, ${elevZ}px)`,
        transformStyle: 'preserve-3d',
        cursor: 'pointer',
        outline: 'none',
        transition: reducedMotion ? 'none' : 'transform 0.15s steps(2)',
      }}
    >
      {renderBuildingCubes()}
      <Billboard
        x={config.id === 'appraisal' ? 60 : 75}
        y={config.id === 'appraisal' ? 60 : 75}
        z={config.labelZ}
        label={config.name}
        bubbleText={config.bubbleText}
        showBubble={isHighlighted}
        active={isHighlighted}
      />
    </div>
  );
};
