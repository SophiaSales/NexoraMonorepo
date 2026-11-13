import styled, { css } from 'styled-components';
import type { ButtonColor, ButtonSize, ButtonVariant } from './Button';

interface StyledProps {
    $variant: ButtonVariant;
    $size: ButtonSize;
    $color: ButtonColor;
}

interface Palette {
    rgb: string;
}

// base color of each button, as "r, g, b"; every state is derived from it
const palettes: Record<ButtonColor, Palette> = {
    pink: { rgb: '150, 88, 134' },
    purple: { rgb: '93, 66, 121' },
    blue: { rgb: '80, 111, 175' },
};

const a = (p: Palette, alpha: number) => `rgba(${p.rgb}, ${alpha})`;

const sizes: Record<ButtonSize, ReturnType<typeof css>> = {
    xs: css`
        padding: 4px 12px;
        font-size: 12px;
        line-height: 16px;
    `,
    sm: css`
        padding: 8px 16px;
        font-size: 14px;
        line-height: 20px;
    `,
    md: css`
        padding: 12px 24px;
        font-size: 16px;
        line-height: 24px;
    `,
    lg: css`
        padding: 16px 32px;
        font-size: 18px;
        line-height: 26px;
    `,
};

const glassRim = `
    inset 0 1px 0 rgba(255, 255, 255, 0.95),
    inset 0 -1px 0 rgba(255, 255, 255, 0.4),
    inset 1px 0 0 rgba(255, 255, 255, 0.45),
    inset -1px 0 0 rgba(255, 255, 255, 0.45)
`;

// specular highlight on the upper half of the glass
const sheen = 'linear-gradient(180deg, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 55%)';

const variantStyles = (variant: ButtonVariant, p: Palette) => {
    switch (variant) {
        case 'primary':
            return css`
                background: ${sheen}, ${a(p, 0.3)};
                box-shadow: ${glassRim}, 0 8px 20px -6px ${a(p, 0.35)}, 0 2px 6px rgba(0, 0, 0, 0.06);

                &:hover:not(:disabled) {
                    background: ${sheen}, ${a(p, 0.4)};
                }

                &:active:not(:disabled) {
                    background: ${a(p, 0.5)};
                    box-shadow: inset 0 2px 6px ${a(p, 0.4)}, inset 0 0 0 1px rgba(255, 255, 255, 0.4);
                }
            `;
        case 'secondary':
            return css`
                background: ${sheen}, ${a(p, 0.12)};
                box-shadow: ${glassRim}, 0 6px 16px -6px ${a(p, 0.25)}, 0 1px 4px rgba(0, 0, 0, 0.04);

                &:hover:not(:disabled) {
                    background: ${sheen}, ${a(p, 0.2)};
                }

                &:active:not(:disabled) {
                    background: ${a(p, 0.28)};
                    box-shadow: inset 0 2px 5px ${a(p, 0.3)}, inset 0 0 0 1px rgba(255, 255, 255, 0.4);
                }
            `;
        case 'tertiary':
            return css`
                background: transparent;
                backdrop-filter: none;
                box-shadow: none;

                &:hover:not(:disabled) {
                    background: ${sheen}, ${a(p, 0.14)};
                    backdrop-filter: blur(14px) saturate(180%);
                    box-shadow: ${glassRim};
                }

                &:active:not(:disabled) {
                    background: ${a(p, 0.24)};
                    backdrop-filter: blur(14px) saturate(180%);
                    box-shadow: inset 0 2px 5px ${a(p, 0.3)};
                }
            `;
    }
};

export const StyledButton = styled.button<StyledProps>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: none;
    border-radius: 999px;
    font-family: 'Outfit', system-ui, -apple-system, 'Segoe UI', sans-serif;
    font-weight: 500;
    color: ${({ $color }: StyledProps) => `rgb(${palettes[$color].rgb})`};
    cursor: pointer;
    outline: none;
    -webkit-backdrop-filter: blur(14px) saturate(180%);
    backdrop-filter: blur(14px) saturate(180%);
    transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.15s ease;

    ${({ $size }: StyledProps) => sizes[$size]}
    ${({ $variant, $color }: StyledProps) => variantStyles($variant, palettes[$color])}

    &:active:not(:disabled) {
        transform: scale(0.97);
    }

    &:focus-visible {
        box-shadow: ${glassRim}, 0 0 0 3px rgba(255, 255, 255, 0.9),
            0 0 0 6px ${({ $color }: StyledProps) => a(palettes[$color], 0.45)};
    }

    &:disabled {
        background: rgba(255, 255, 255, 0.3);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
        color: #9A9AA5;
        cursor: not-allowed;
    }
`;
