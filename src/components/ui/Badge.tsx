import React from 'react';
import { ProjectStatus } from '../../types/portfolio';

export interface BadgeProps {
  status: ProjectStatus;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ status, className = '' }) => {
  const isAktif = status === 'AKTIF';
  const statusClass = isAktif ? 'badge-active' : 'badge-done';

  return (
    <span className={`badge ${statusClass} ${className}`.trim()}>
      {status}
    </span>
  );
};
