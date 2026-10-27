import React from 'react';

export interface CubePalette {
  t: string; // Top face color
  f: string; // Front face color
  r: string; // Right face color
}

export const CUBE_PALETTES: Record<string, CubePalette> = {
  cream: { t: '#d9c3a0', f: '#e8d5b5', r: '#c4ab84' },
  stone: { t: '#7d6d5b', f: '#a79277', r: '#8d7b68' },
  coral: { t: '#f08a6c', f: '#c85a32', r: '#a04747' },
  dark: { t: '#6a4428', f: '#4a2e1b', r: '#2c1b10' },
  green: { t: '#74c69d', f: '#4e8a6a', r: '#365f4a' },
  road: { t: '#c9b28a', f: '#b09a72', r: '#9a855f' },
  soil: { t: '#4a8456', f: '#6a4428', r: '#4a2e1b' },
  leaf: { t: '#6fb07a', f: '#4e8a58', r: '#365f40' },
  trunk: { t: '#6a4428', f: '#4a2e1b', r: '#2c1b10' },
  lamp: { t: '#fff1c4', f: '#ffd98a', r: '#e0b25c' },
  smoke: { t: '#e8eef0', f: '#e8eef0', r: '#e8eef0' },
};

export interface CubeProps {
  x: number;
  y: number;
  z?: number;
  w: number;
  d: number;
  h: number;
  palette?: CubePalette | string;
  hasWindows?: boolean;
  active?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Cube: React.FC<CubeProps> = ({
  x,
  y,
  z = 0,
  w,
  d,
  h,
  palette = 'cream',
  hasWindows = false,
  active = false,
  className = '',
  style = {},
}) => {
  const p: CubePalette =
    typeof palette === 'string'
      ? CUBE_PALETTES[palette] || CUBE_PALETTES.cream
      : palette;

  const borderColor = active ? '#ffd98a' : '#1a0f08';

  return (
    <div
      className={`cube ${className}`.trim()}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: `${w}px`,
        height: `${d}px`,
        transform: `translate3d(${x}px, ${y}px, ${z}px)`,
        transformStyle: 'preserve-3d',
        ...style,
      }}
    >
      {/* Top Face */}
      <div
        style={{
          position: 'absolute',
          width: `${w}px`,
          height: `${d}px`,
          background: p.t,
          border: `3px solid ${borderColor}`,
          transform: `translateZ(${h}px)`,
          boxSizing: 'border-box',
        }}
      />
      {/* Front Face */}
      <div
        style={{
          position: 'absolute',
          width: `${w}px`,
          height: `${h}px`,
          top: `${d - h}px`,
          background: p.f,
          border: `3px solid ${borderColor}`,
          transformOrigin: 'bottom',
          transform: 'rotateX(-90deg)',
          boxSizing: 'border-box',
          display: hasWindows ? 'flex' : 'none',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '4px',
        }}
      >
        {hasWindows && (
          <>
            <div style={{ width: 16, height: 22, background: '#ffd98a', border: '2px solid #1a0f08' }} />
            <div style={{ width: 16, height: 22, background: '#ffd98a', border: '2px solid #1a0f08' }} />
          </>
        )}
      </div>
      {/* Right Face */}
      <div
        style={{
          position: 'absolute',
          width: `${h}px`,
          height: `${d}px`,
          left: `${w - h}px`,
          background: p.r,
          border: `3px solid ${borderColor}`,
          transformOrigin: 'right',
          transform: 'rotateY(90deg)',
          boxSizing: 'border-box',
        }}
      />
    </div>
  );
};
