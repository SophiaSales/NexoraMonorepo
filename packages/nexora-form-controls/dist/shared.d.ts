export type ControlColor = 'pink' | 'purple' | 'blue';
export declare const palettes: Record<ControlColor, {
    rgb: string;
}>;
export declare const a: (rgb: string, alpha: number) => string;
export declare const glassRim = "\n    inset 0 1px 0 rgba(255, 255, 255, 0.95),\n    inset 0 -1px 0 rgba(255, 255, 255, 0.4)\n";
export declare const sheen = "linear-gradient(180deg, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 55%)";
