import React from 'react';
import type { ControlColor } from './shared';
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'color' | 'size'> {
    color?: ControlColor;
    label?: React.ReactNode;
    iconOff?: React.ReactNode;
    iconOn?: React.ReactNode;
}
export declare const Switch: ({ color, label, disabled, iconOff, iconOn, ...rest }: SwitchProps) => React.JSX.Element;
