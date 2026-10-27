import React from 'react';

export interface BillboardProps {
  x: number;
  y: number;
  z: number;
  label: string;
  bubbleText: string;
  showBubble: boolean;
  active?: boolean;
}

export const Billboard: React.FC<BillboardProps> = ({
  x,
  y,
  z,
  label,
  bubbleText,
  showBubble,
  active = false,
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        transform: `translate3d(${x}px, ${y}px, ${z}px) rotateZ(-45deg) rotateX(-60deg) translate(-50%, -100%)`,
        transformStyle: 'preserve-3d',
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 50,
      }}
    >
      {/* Speech Bubble */}
      <div
        style={{
          background: '#f8f4e1',
          color: '#1a0f08',
          border: '3px solid #1a0f08',
          padding: '4px 10px',
          fontFamily: "'VT323', monospace",
          fontSize: '20px',
          whiteSpace: 'nowrap',
          marginBottom: '8px',
          opacity: showBubble || active ? 1 : 0,
          transform: showBubble || active ? 'translateY(0)' : 'translateY(6px)',
          transition: 'opacity 0.15s ease, transform 0.15s ease',
          position: 'relative',
          boxShadow: '0 3px 0 #1a0f08',
        }}
      >
        {bubbleText}
        {/* Tiny downward point */}
        <div
          style={{
            position: 'absolute',
            bottom: '-7px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderTop: '6px solid #1a0f08',
          }}
        />
      </div>

      {/* Building Label */}
      <div
        style={{
          fontFamily: "'Silkscreen', monospace",
          fontSize: '12px',
          fontWeight: 700,
          textTransform: 'uppercase',
          color: active ? '#ffd98a' : '#f8f4e1',
          background: '#2c1b10',
          border: `3px solid ${active ? '#ffd98a' : '#1a0f08'}`,
          boxShadow: 'inset 0 0 0 2px #4a2e1b, 0 3px 0 #1a0f08',
          padding: '4px 10px',
          whiteSpace: 'nowrap',
          transition: 'color 0.15s, border-color 0.15s',
        }}
      >
        {label}
      </div>
    </div>
  );
};
