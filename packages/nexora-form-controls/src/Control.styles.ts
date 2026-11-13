import styled from 'styled-components';
import { glassRim, palettes, ControlColor } from './shared';

interface BoxProps {
    $color: ControlColor;
    $shape: 'square' | 'round';
}

// 1. O label que envolve tudo
export const Wrapper = styled.label<{ $disabled?: boolean }>`
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Outfit', system-ui, sans-serif;
    font-size: 16px;
    cursor: ${({ $disabled }: { $disabled?: boolean }) =>
        $disabled ? 'not-allowed' : 'pointer'};
`;

// 2. O input real, escondido (mas ainda acessível pelo teclado)
export const HiddenInput = styled.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
`;

// 3. A caixa visual
export const Box = styled.span<BoxProps>`
    --c: ${({ $color }: BoxProps) => palettes[$color].rgb};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    border-radius: ${({ $shape }: BoxProps) => ($shape === 'round' ? '50%' : '8px')};
    border: 1.5px solid rgba(var(--c), 0.7);
    background: linear-gradient(rgba(var(--c), 0.05), rgba(var(--c), 0.05)), rgba(255, 255, 255, 0.6);
    color: rgb(var(--c));
    -webkit-backdrop-filter: blur(14px) saturate(180%);
    backdrop-filter: blur(14px) saturate(180%);
    transition: background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

    /* marcado: fundo com a cor, borda mais forte */
    ${HiddenInput}:checked + & {
        background: rgba(var(--c), 0.4);
        border-color: rgba(var(--c), 0.85);
        box-shadow: ${glassRim}, 0 4px 10px -4px rgba(var(--c), 0.35);
    }

    /* hover (no label inteiro, e só se não estiver disabled) */
    ${Wrapper}:hover ${HiddenInput}:not(:disabled) + & {
        border-color: rgb(var(--c));
    }

    ${Wrapper}:hover ${HiddenInput}:not(:disabled):checked + & {
        background: rgba(var(--c), 0.48);
    }

    /* foco pelo teclado: anel claro ao redor da borda */
    ${HiddenInput}:focus-visible + & {
        box-shadow: 0 0 0 2px #fff,
            0 0 0 5px rgba(var(--c), 0.35);
    }

    /* desabilitado: cinza */
    ${HiddenInput}:disabled + & {
        border-color: #bdbdc4;
        background: rgba(255, 255, 255, 0.5);
        color: #8e8e98;
        box-shadow: none;
    }

    ${HiddenInput}:disabled:checked + & {
        background: #dcdce0;
    }
`;

// 4. O que aparece dentro da caixa (check ou bolinha)
export const Indicator = styled.span`
    display: flex;
    opacity: 0;
    transform: scale(0.5);
    transition: opacity 0.15s ease, transform 0.15s ease;

    ${HiddenInput}:checked + ${Box} > & {
        opacity: 1;
        transform: scale(1);
    }
`;

// 5. A bolinha do radio
export const Dot = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: currentColor;
`;

// 6. O texto ao lado
export const Label = styled.span<{ $disabled?: boolean }>`
    color: ${({ $disabled }: { $disabled?: boolean }) => ($disabled ? '#9a9aa5' : '#2d2438')};
`;
