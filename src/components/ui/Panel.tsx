import React from 'react';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'section' | 'article' | 'aside';
  children: React.ReactNode;
}

export const Panel: React.FC<PanelProps> = ({
  as = 'div',
  className = '',
  children,
  ...rest
}) => {
  const Component = as;
  return (
    <Component className={`panel ${className}`.trim()} {...rest}>
      {children}
    </Component>
  );
};
