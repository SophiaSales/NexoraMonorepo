import styled, { css } from 'styled-components';
import { palettes, ControlColor } from './shared';
import { HiddenInput, Wrapper } from './Control.styles';

interface TrackProps {
    $color: ControlColor;
}

const trackDepth = `
    inset 0 1px 3px rgba(0, 0, 0, 0.14),
    inset 0 -1px 0 rgba(255, 255, 255, 0.55),
    0 1px 0 rgba(255, 255, 255, 0.5)
`;

// A pílula
export const Track = styled.span<TrackProps>`
    --c: ${({ $color }: TrackProps) => palettes[$color].rgb};
    position: relative;
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    width: 52px;
    height: 30px;
    padding: 3px;
    box-sizing: border-box;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.55);
    background: rgba(120, 120, 128, 0.16);
    box-shadow: ${trackDepth};
    -webkit-backdrop-filter: blur(14px) saturate(180%);
    backdrop-filter: blur(14px) saturate(180%);
    transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

    /* ligado */
    ${HiddenInput}:checked + & {
        background: rgba(var(--c), 0.4);
    }

    /* hover (no label inteiro, se não estiver desabilitado) */
    ${Wrapper}:hover ${HiddenInput}:not(:disabled) + & {
        background: rgba(120, 120, 128, 0.24);
    }

    ${Wrapper}:hover ${HiddenInput}:not(:disabled):checked + & {
        background: rgba(var(--c), 0.65);
    }

    /* foco pelo teclado: anel duplo */
    ${HiddenInput}:focus-visible + & {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(var(--c), 0.35);
    }

    /* desabilitado */
    ${HiddenInput}:disabled + & {
        background: rgba(120, 120, 128, 0.1);
        box-shadow: ${trackDepth};
        opacity: 0.6;
    }
`;

// A bolinha branca
export const Thumb = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.88));
    color: #8e8e98;
    box-shadow:
        0 2px 8px rgba(0, 0, 0, 0.2),
        0 0 0 0.5px rgba(0, 0, 0, 0.06),
        inset 0 1px 0 #fff;
    transition: transform 0.25s ease;

    /* ligado: desliza para a direita (52 - 3 - 3 - 22 - bordas) */
    ${HiddenInput}:checked + ${Track} > & {
        transform: translateX(22px);
    }

    ${HiddenInput}:disabled + ${Track} > & {
        background: #fff;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18), 0 0 0 0.5px rgba(0, 0, 0, 0.08);
    }
`;

const iconBase = css`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(var(--c));
    transition: opacity 0.2s ease, transform 0.25s ease;
`;

// aparece quando DESLIGADO, some quando ligado
export const IconOff = styled.span`
    ${iconBase}
    opacity: 1;

    ${HiddenInput}:checked + ${Track} > ${Thumb} > & {
        opacity: 0;
        transform: rotate(-90deg) scale(0.5);
    }
`;

// o contrário: escondido, aparece quando LIGADO
export const IconOn = styled.span`
    ${iconBase}
    opacity: 0;
    transform: rotate(90deg) scale(0.5);

    ${HiddenInput}:checked + ${Track} > ${Thumb} > & {
        opacity: 1;
        transform: none;
    }
`;