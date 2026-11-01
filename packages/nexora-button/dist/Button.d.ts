import React from "react";
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonColor = 'pink' | 'purple' | 'blue';
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    color?: ButtonColor;
    children: React.ReactNode;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
}
export declare const Button: ({ variant, size, color, children, icon, iconPosition, ...rest }: ButtonProps) => React.JSX.Element;
