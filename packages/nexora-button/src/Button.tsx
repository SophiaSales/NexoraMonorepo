import React from "react";
import { StyledButton } from "./Button.styles";

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

export const Button = ({
    variant = 'primary',
    size = 'md',
    color = 'pink',
    children,
    icon,
    iconPosition = 'left',
    ...rest
}: ButtonProps) => {
    return (
        <StyledButton
            $variant={variant}
            $size={size}
            $color={color}
            {...rest}
        >
            {icon && iconPosition === 'left' && icon}
            {children}
            {icon && iconPosition === 'right' && icon}
        </StyledButton>
    );
}
