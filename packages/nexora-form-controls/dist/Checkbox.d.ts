import React from 'react';
import type { ControlColor } from './shared';
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'color' | 'size'> {
    color?: ControlColor;
    label?: React.ReactNode;
}
export declare const Checkbox: ({ color, label, disabled, ...rest }: CheckboxProps) => React.JSX.Element;
