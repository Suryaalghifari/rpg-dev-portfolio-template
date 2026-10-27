import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button' | 'a';
  href?: string;
  selected?: boolean;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  as = 'button',
  href,
  selected = false,
  className = '',
  children,
  ...rest
}) => {
  const combinedClassName = `btn ${selected ? 'on' : ''} ${className}`.trim();

  if (as === 'a' && href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        role="button"
        aria-pressed={selected ? 'true' : undefined}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={combinedClassName}
      aria-pressed={selected}
      {...rest}
    >
      {children}
    </button>
  );
};
