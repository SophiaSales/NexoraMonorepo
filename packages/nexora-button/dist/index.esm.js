import { __makeTemplateObject, __rest, __assign } from 'tslib';
import React from 'react';
import styled, { css } from 'styled-components';

var tint = function (_a, alpha) {
    var top = _a[0], bottom = _a[1];
    var rgb = function (hex) {
        return [1, 3, 5].map(function (i) { return parseInt(hex.slice(i, i + 2), 16); }).join(', ');
    };
    return "linear-gradient(180deg, rgba(".concat(rgb(top), ", ").concat(alpha, ") 0%, rgba(").concat(rgb(bottom), ", ").concat(alpha, ") 100%)");
};
var palettes = {
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
var sizes = {
    xs: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        padding: 4px 12px;\n        font-size: 12px;\n        line-height: 16px;\n    "], ["\n        padding: 4px 12px;\n        font-size: 12px;\n        line-height: 16px;\n    "]))),
    sm: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        padding: 8px 16px;\n        font-size: 14px;\n        line-height: 20px;\n    "], ["\n        padding: 8px 16px;\n        font-size: 14px;\n        line-height: 20px;\n    "]))),
    md: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        padding: 12px 24px;\n        font-size: 16px;\n        line-height: 24px;\n    "], ["\n        padding: 12px 24px;\n        font-size: 16px;\n        line-height: 24px;\n    "]))),
    lg: css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        padding: 16px 32px;\n        font-size: 18px;\n        line-height: 26px;\n    "], ["\n        padding: 16px 32px;\n        font-size: 18px;\n        line-height: 26px;\n    "]))),
};
var glassRim = "\n    inset 0 1px 0 rgba(255, 255, 255, 0.95),\n    inset 0 -1px 0 rgba(255, 255, 255, 0.4),\n    inset 1px 0 0 rgba(255, 255, 255, 0.45),\n    inset -1px 0 0 rgba(255, 255, 255, 0.45)\n";
// specular highlight on the upper half of the glass
var sheen = 'linear-gradient(180deg, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 55%)';
var variantStyles = function (variant, p) {
    switch (variant) {
        case 'primary':
            return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                background: ", ", ", ";\n                box-shadow: ", ", 0 8px 20px -6px ", ", 0 2px 6px rgba(0, 0, 0, 0.06);\n\n                &:hover:not(:disabled) {\n                    background: ", ", ", ";\n                }\n\n                &:active:not(:disabled) {\n                    background: ", ";\n                    box-shadow: inset 0 2px 6px ", ", inset 0 0 0 1px rgba(255, 255, 255, 0.4);\n                }\n            "], ["\n                background: ", ", ", ";\n                box-shadow: ", ", 0 8px 20px -6px ", ", 0 2px 6px rgba(0, 0, 0, 0.06);\n\n                &:hover:not(:disabled) {\n                    background: ", ", ", ";\n                }\n\n                &:active:not(:disabled) {\n                    background: ", ";\n                    box-shadow: inset 0 2px 6px ", ", inset 0 0 0 1px rgba(255, 255, 255, 0.4);\n                }\n            "])), sheen, tint(p.primary[0], 0.7), glassRim, p.shadow, sheen, tint(p.primary[1], 0.78), tint(p.primary[2], 0.82), p.shadow);
        case 'secondary':
            return css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                background: ", ", ", ";\n                box-shadow: ", ", 0 6px 16px -6px ", ", 0 1px 4px rgba(0, 0, 0, 0.04);\n\n                &:hover:not(:disabled) {\n                    background: ", ", ", ";\n                }\n\n                &:active:not(:disabled) {\n                    background: ", ";\n                    box-shadow: inset 0 2px 5px ", ", inset 0 0 0 1px rgba(255, 255, 255, 0.4);\n                }\n            "], ["\n                background: ", ", ", ";\n                box-shadow: ", ", 0 6px 16px -6px ", ", 0 1px 4px rgba(0, 0, 0, 0.04);\n\n                &:hover:not(:disabled) {\n                    background: ", ", ", ";\n                }\n\n                &:active:not(:disabled) {\n                    background: ", ";\n                    box-shadow: inset 0 2px 5px ", ", inset 0 0 0 1px rgba(255, 255, 255, 0.4);\n                }\n            "])), sheen, p.soft, glassRim, p.shadow, sheen, p.softHover, p.softClick, p.shadow);
        case 'tertiary':
            return css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                background: transparent;\n                backdrop-filter: none;\n                box-shadow: none;\n\n                &:hover:not(:disabled) {\n                    background: ", ", ", ";\n                    backdrop-filter: blur(14px) saturate(180%);\n                    box-shadow: ", ";\n                }\n\n                &:active:not(:disabled) {\n                    background: ", ";\n                    backdrop-filter: blur(14px) saturate(180%);\n                    box-shadow: inset 0 2px 5px ", ";\n                }\n            "], ["\n                background: transparent;\n                backdrop-filter: none;\n                box-shadow: none;\n\n                &:hover:not(:disabled) {\n                    background: ", ", ", ";\n                    backdrop-filter: blur(14px) saturate(180%);\n                    box-shadow: ", ";\n                }\n\n                &:active:not(:disabled) {\n                    background: ", ";\n                    backdrop-filter: blur(14px) saturate(180%);\n                    box-shadow: inset 0 2px 5px ", ";\n                }\n            "])), sheen, p.softHover, glassRim, p.softClick, p.shadow);
    }
};
var StyledButton = styled.button(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    border: none;\n    border-radius: 999px;\n    font-family: 'Outfit', system-ui, -apple-system, 'Segoe UI', sans-serif;\n    font-weight: 500;\n    color: ", ";\n    cursor: pointer;\n    outline: none;\n    -webkit-backdrop-filter: blur(14px) saturate(180%);\n    backdrop-filter: blur(14px) saturate(180%);\n    transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.15s ease;\n\n    ", "\n    ", "\n\n    &:active:not(:disabled) {\n        transform: scale(0.97);\n    }\n\n    &:focus-visible {\n        box-shadow: ", ", 0 0 0 3px rgba(255, 255, 255, 0.9),\n            0 0 0 6px ", ";\n    }\n\n    &:disabled {\n        background: rgba(255, 255, 255, 0.3);\n        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);\n        color: #9A9AA5;\n        cursor: not-allowed;\n    }\n"], ["\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    border: none;\n    border-radius: 999px;\n    font-family: 'Outfit', system-ui, -apple-system, 'Segoe UI', sans-serif;\n    font-weight: 500;\n    color: ", ";\n    cursor: pointer;\n    outline: none;\n    -webkit-backdrop-filter: blur(14px) saturate(180%);\n    backdrop-filter: blur(14px) saturate(180%);\n    transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.15s ease;\n\n    ", "\n    ", "\n\n    &:active:not(:disabled) {\n        transform: scale(0.97);\n    }\n\n    &:focus-visible {\n        box-shadow: ", ", 0 0 0 3px rgba(255, 255, 255, 0.9),\n            0 0 0 6px ", ";\n    }\n\n    &:disabled {\n        background: rgba(255, 255, 255, 0.3);\n        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);\n        color: #9A9AA5;\n        cursor: not-allowed;\n    }\n"])), function (_a) {
    var $color = _a.$color;
    return palettes[$color].text;
}, function (_a) {
    var $size = _a.$size;
    return sizes[$size];
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color;
    return variantStyles($variant, palettes[$color]);
}, glassRim, function (_a) {
    var $color = _a.$color;
    return palettes[$color].ring;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;

var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'md' : _c, _d = _a.color, color = _d === void 0 ? 'pink' : _d, children = _a.children, icon = _a.icon, _e = _a.iconPosition, iconPosition = _e === void 0 ? 'left' : _e, rest = __rest(_a, ["variant", "size", "color", "children", "icon", "iconPosition"]);
    return (React.createElement(StyledButton, __assign({ "$variant": variant, "$size": size, "$color": color }, rest),
        icon && iconPosition === 'left' && icon,
        children,
        icon && iconPosition === 'right' && icon));
};

export { Button };
//# sourceMappingURL=index.esm.js.map
