import React from 'react';

export const Button = ({
  children,
  onClick,
  variant = 'default', // 'default' | 'primary' | 'outline' | 'pill'
  icon,
  ariaLabel,
  className = '',
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children && <span>{children}</span>}
    </button>
  );
};
