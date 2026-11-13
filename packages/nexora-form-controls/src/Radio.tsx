import React from 'react';
import { Wrapper, HiddenInput, Box, Indicator, Dot, Label } from './Control.styles';
import type { ControlColor } from './shared';

export interface RadioProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'color' | 'size'> {
    color?: ControlColor;
    label?: React.ReactNode;
}

export const Radio = ({
    color = 'pink',
    label,
    disabled,
    ...rest
}: RadioProps) => {
    return (
        <Wrapper $disabled={disabled}>
            <HiddenInput type="radio" disabled={disabled} {...rest} /> {/* type="radio" */}
            <Box $color={color} $shape="round">                         {/* shape round */}
                <Indicator>
                    <Dot />                                                 {/* bolinha */}
                </Indicator>
            </Box>
            {label && <Label $disabled={disabled}>{label}</Label>}
        </Wrapper>
    );
};
