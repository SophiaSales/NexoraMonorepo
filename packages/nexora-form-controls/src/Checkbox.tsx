import React from 'react';
import { Wrapper, HiddenInput, Box, Indicator, Label } from './Control.styles';
import type { ControlColor } from './shared';

export interface CheckboxProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'color' | 'size'> {
    color?: ControlColor;
    label?: React.ReactNode;
}

export const Checkbox = ({
    color = 'pink',
    label,
    disabled,
    ...rest
}: CheckboxProps) => {
    return (
        <Wrapper $disabled={disabled}>
            <HiddenInput
                type="checkbox"
                disabled={disabled}
                {...rest}
            />
            <Box $color={color} $shape="square">
                <Indicator>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path
                            d="M2.5 7.5L5.5 10.5L11.5 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Indicator>
            </Box>
            {label && <Label $disabled={disabled}>{label}</Label>}
        </Wrapper>
    );
};
