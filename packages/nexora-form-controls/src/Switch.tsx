import React from 'react';
import { Wrapper, HiddenInput, Label } from './Control.styles';
import { Track, Thumb, IconOff, IconOn  } from './Switch.styles';
import type { ControlColor } from './shared';

export interface SwitchProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'color' | 'size'> {
    color?: ControlColor;
    label?: React.ReactNode;
    iconOff?: React.ReactNode;
    iconOn?: React.ReactNode;
}

export const Switch = ({
    color = 'pink',
    label,
    disabled,
    iconOff,
    iconOn,
    ...rest
}: SwitchProps) => {
    return (
        <Wrapper $disabled={disabled}>
            <HiddenInput type="checkbox" role="switch" disabled={disabled} {...rest} />
            <Track $color={color}>
                <Thumb>
                    {iconOff && <IconOff>{iconOff}</IconOff>}
                    {iconOn && <IconOn>{iconOn}</IconOn>}
                </Thumb>
            </Track>
            {label && <Label $disabled={disabled}>{label}</Label>}
        </Wrapper>
    );
};