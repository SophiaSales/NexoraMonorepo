export type ControlColor = 'pink' | 'purple' | 'blue';

export const palettes: Record<ControlColor, { rgb: string }> = {
    pink: { rgb: '150, 88, 134' },
    purple: { rgb: '93, 66, 121' },
    blue: { rgb: '80, 111, 175' },
};

export const a = (rgb: string, alpha: number) => `rgba(${rgb}, ${alpha})`;

export const glassRim = `
    inset 0 1px 0 rgba(255, 255, 255, 0.95),
    inset 0 -1px 0 rgba(255, 255, 255, 0.4)
`;
export const sheen = 'linear-gradient(180deg, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 55%)';
