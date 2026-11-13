import React from 'react';
import type { ControlColor } from './shared';
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'color' | 'size'> {
    color?: ControlColor;
    label?: React.ReactNode;
}
export declare const Radio: ({ color, label, disabled, ...rest }: RadioProps) => React.JSX.Element;
