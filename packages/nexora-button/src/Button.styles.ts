import styled, { css } from 'styled-components';
import type { ButtonColor, ButtonSize, ButtonVariant } from './Button';

interface StyledProps {
    $variant: ButtonVariant;
    $size: ButtonSize;
    $color: ButtonColor;
}

interface Palette {
    text: string;
    // primary [top, bottom] hex stops: default / hover / click
    primary: [[string, string], [string, string], [string, string]];
    // soft tints used by secondary and tertiary
    soft: string;
    softHover: string;
    softClick: string;
    ring: string;
    shadow: string;
}

const tint = ([top, bottom]: [string, string], alpha: number) => {
    const rgb = (hex: string) =>
        [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)).join(', ');
    return `linear-gradient(180deg, rgba(${rgb(top)}, ${alpha}) 0%, rgba(${rgb(bottom)}, ${alpha}) 100%)`;
};

const palettes: Record<ButtonColor, Palette> = {
    pink: {
        text: '#8A1F5C',
        primary: [
            ['#F8C6DF', '#EFAACB'],
            ['#FFC9EE', '#FFB0E3'],
            ['#E8A3C4', '#DE8FB7'],
        ],
        soft: 'rgba(255, 240, 248, 0.8)',
        softHover: 'rgba(252, 226, 240, 0.7)',
        softClick: 'rgba(250, 214, 233, 0.9)',
        ring: '#F2BEDA',
        shadow: 'rgba(214, 116, 168, 0.35)',
    },
    purple: {
        text: '#4B2A8F',
        primary: [
            ['#D9C8F2', '#C4AEE6'],
            ['#E4CCFF', '#D4B4FF'],
            ['#BBA2DD', '#AB8FD0'],
        ],
        soft: 'rgba(246, 240, 255, 0.8)',
        softHover: 'rgba(234, 224, 250, 0.7)',
        softClick: 'rgba(224, 210, 246, 0.9)',
        ring: '#D3C2F0',
        shadow: 'rgba(143, 108, 205, 0.35)',
    },
    blue: {
        text: '#154A8F',
        primary: [
            ['#C4DCFB', '#A9CBF6'],
            ['#BDE3FF', '#9FD3FF'],
            ['#9DBEE8', '#87AEDE'],
        ],
        soft: 'rgba(238, 246, 255, 0.8)',
        softHover: 'rgba(224, 237, 252, 0.7)',
        softClick: 'rgba(210, 228, 250, 0.9)',
        ring: '#B5D3F7',
        shadow: 'rgba(95, 150, 220, 0.35)',
    },
};

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
                background: ${sheen}, ${tint(p.primary[0], 0.7)};
                box-shadow: ${glassRim}, 0 8px 20px -6px ${p.shadow}, 0 2px 6px rgba(0, 0, 0, 0.06);

                &:hover:not(:disabled) {
                    background: ${sheen}, ${tint(p.primary[1], 0.78)};
                }

                &:active:not(:disabled) {
                    background: ${tint(p.primary[2], 0.82)};
                    box-shadow: inset 0 2px 6px ${p.shadow}, inset 0 0 0 1px rgba(255, 255, 255, 0.4);
                }
            `;
        case 'secondary':
            return css`
                background: ${sheen}, ${p.soft};
                box-shadow: ${glassRim}, 0 6px 16px -6px ${p.shadow}, 0 1px 4px rgba(0, 0, 0, 0.04);

                &:hover:not(:disabled) {
                    background: ${sheen}, ${p.softHover};
                }

                &:active:not(:disabled) {
                    background: ${p.softClick};
                    box-shadow: inset 0 2px 5px ${p.shadow}, inset 0 0 0 1px rgba(255, 255, 255, 0.4);
                }
            `;
        case 'tertiary':
            return css`
                background: transparent;
                backdrop-filter: none;
                box-shadow: none;

                &:hover:not(:disabled) {
                    background: ${sheen}, ${p.softHover};
                    backdrop-filter: blur(14px) saturate(180%);
                    box-shadow: ${glassRim};
                }

                &:active:not(:disabled) {
                    background: ${p.softClick};
                    backdrop-filter: blur(14px) saturate(180%);
                    box-shadow: inset 0 2px 5px ${p.shadow};
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
    color: ${({ $color }: StyledProps) => palettes[$color].text};
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
            0 0 0 6px ${({ $color }: StyledProps) => palettes[$color].ring};
    }

    &:disabled {
        background: rgba(255, 255, 255, 0.3);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
        color: #9A9AA5;
        cursor: not-allowed;
    }
`;
