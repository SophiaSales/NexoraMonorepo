import React from 'react';

import './button.css';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  label: string;
  icon?: React.ReactNode;
  inconPosition?: 'left' | 'right';
  disabled?: boolean;
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'primary',
  size = 'md',
  label,
  ...props
}: ButtonProps) => {
  const mode = variant === 'primary' ? 'storybook-button--primary' : variant === 'tertiary' ? 'storybook-button--tertiary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
