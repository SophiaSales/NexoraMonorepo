'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

// base color of each button, as "r, g, b"; every state is derived from it
var palettes = {
    pink: { rgb: '150, 88, 134' },
    purple: { rgb: '93, 66, 121' },
    blue: { rgb: '80, 111, 175' },
};
var a = function (p, alpha) { return "rgba(".concat(p.rgb, ", ").concat(alpha, ")"); };
var sizes = {
    xs: styled.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        padding: 4px 12px;\n        font-size: 12px;\n        line-height: 16px;\n    "], ["\n        padding: 4px 12px;\n        font-size: 12px;\n        line-height: 16px;\n    "]))),
    sm: styled.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n        padding: 8px 16px;\n        font-size: 14px;\n        line-height: 20px;\n    "], ["\n        padding: 8px 16px;\n        font-size: 14px;\n        line-height: 20px;\n    "]))),
    md: styled.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n        padding: 12px 24px;\n        font-size: 16px;\n        line-height: 24px;\n    "], ["\n        padding: 12px 24px;\n        font-size: 16px;\n        line-height: 24px;\n    "]))),
    lg: styled.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n        padding: 16px 32px;\n        font-size: 18px;\n        line-height: 26px;\n    "], ["\n        padding: 16px 32px;\n        font-size: 18px;\n        line-height: 26px;\n    "]))),
};
var glassRim = "\n    inset 0 1px 0 rgba(255, 255, 255, 0.95),\n    inset 0 -1px 0 rgba(255, 255, 255, 0.4),\n    inset 1px 0 0 rgba(255, 255, 255, 0.45),\n    inset -1px 0 0 rgba(255, 255, 255, 0.45)\n";
// specular highlight on the upper half of the glass
var sheen = 'linear-gradient(180deg, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 55%)';
var variantStyles = function (variant, p) {
    switch (variant) {
        case 'primary':
            return styled.css(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n                background: ", ", ", ";\n                box-shadow: ", ", 0 8px 20px -6px ", ", 0 2px 6px rgba(0, 0, 0, 0.06);\n\n                &:hover:not(:disabled) {\n                    background: ", ", ", ";\n                }\n\n                &:active:not(:disabled) {\n                    background: ", ";\n                    box-shadow: inset 0 2px 6px ", ", inset 0 0 0 1px rgba(255, 255, 255, 0.4);\n                }\n            "], ["\n                background: ", ", ", ";\n                box-shadow: ", ", 0 8px 20px -6px ", ", 0 2px 6px rgba(0, 0, 0, 0.06);\n\n                &:hover:not(:disabled) {\n                    background: ", ", ", ";\n                }\n\n                &:active:not(:disabled) {\n                    background: ", ";\n                    box-shadow: inset 0 2px 6px ", ", inset 0 0 0 1px rgba(255, 255, 255, 0.4);\n                }\n            "])), sheen, a(p, 0.3), glassRim, a(p, 0.35), sheen, a(p, 0.4), a(p, 0.5), a(p, 0.4));
        case 'secondary':
            return styled.css(templateObject_6 || (templateObject_6 = tslib.__makeTemplateObject(["\n                background: ", ", ", ";\n                box-shadow: ", ", 0 6px 16px -6px ", ", 0 1px 4px rgba(0, 0, 0, 0.04);\n\n                &:hover:not(:disabled) {\n                    background: ", ", ", ";\n                }\n\n                &:active:not(:disabled) {\n                    background: ", ";\n                    box-shadow: inset 0 2px 5px ", ", inset 0 0 0 1px rgba(255, 255, 255, 0.4);\n                }\n            "], ["\n                background: ", ", ", ";\n                box-shadow: ", ", 0 6px 16px -6px ", ", 0 1px 4px rgba(0, 0, 0, 0.04);\n\n                &:hover:not(:disabled) {\n                    background: ", ", ", ";\n                }\n\n                &:active:not(:disabled) {\n                    background: ", ";\n                    box-shadow: inset 0 2px 5px ", ", inset 0 0 0 1px rgba(255, 255, 255, 0.4);\n                }\n            "])), sheen, a(p, 0.12), glassRim, a(p, 0.25), sheen, a(p, 0.2), a(p, 0.28), a(p, 0.3));
        case 'tertiary':
            return styled.css(templateObject_7 || (templateObject_7 = tslib.__makeTemplateObject(["\n                background: transparent;\n                backdrop-filter: none;\n                box-shadow: none;\n\n                &:hover:not(:disabled) {\n                    background: ", ", ", ";\n                    backdrop-filter: blur(14px) saturate(180%);\n                    box-shadow: ", ";\n                }\n\n                &:active:not(:disabled) {\n                    background: ", ";\n                    backdrop-filter: blur(14px) saturate(180%);\n                    box-shadow: inset 0 2px 5px ", ";\n                }\n            "], ["\n                background: transparent;\n                backdrop-filter: none;\n                box-shadow: none;\n\n                &:hover:not(:disabled) {\n                    background: ", ", ", ";\n                    backdrop-filter: blur(14px) saturate(180%);\n                    box-shadow: ", ";\n                }\n\n                &:active:not(:disabled) {\n                    background: ", ";\n                    backdrop-filter: blur(14px) saturate(180%);\n                    box-shadow: inset 0 2px 5px ", ";\n                }\n            "])), sheen, a(p, 0.14), glassRim, a(p, 0.24), a(p, 0.3));
    }
};
var StyledButton = styled__default["default"].button(templateObject_8 || (templateObject_8 = tslib.__makeTemplateObject(["\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    border: none;\n    border-radius: 999px;\n    font-family: 'Outfit', system-ui, -apple-system, 'Segoe UI', sans-serif;\n    font-weight: 500;\n    color: ", ";\n    cursor: pointer;\n    outline: none;\n    -webkit-backdrop-filter: blur(14px) saturate(180%);\n    backdrop-filter: blur(14px) saturate(180%);\n    transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.15s ease;\n\n    ", "\n    ", "\n\n    &:active:not(:disabled) {\n        transform: scale(0.97);\n    }\n\n    &:focus-visible {\n        box-shadow: ", ", 0 0 0 3px rgba(255, 255, 255, 0.9),\n            0 0 0 6px ", ";\n    }\n\n    &:disabled {\n        background: rgba(255, 255, 255, 0.3);\n        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);\n        color: #9A9AA5;\n        cursor: not-allowed;\n    }\n"], ["\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    border: none;\n    border-radius: 999px;\n    font-family: 'Outfit', system-ui, -apple-system, 'Segoe UI', sans-serif;\n    font-weight: 500;\n    color: ", ";\n    cursor: pointer;\n    outline: none;\n    -webkit-backdrop-filter: blur(14px) saturate(180%);\n    backdrop-filter: blur(14px) saturate(180%);\n    transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.15s ease;\n\n    ", "\n    ", "\n\n    &:active:not(:disabled) {\n        transform: scale(0.97);\n    }\n\n    &:focus-visible {\n        box-shadow: ", ", 0 0 0 3px rgba(255, 255, 255, 0.9),\n            0 0 0 6px ", ";\n    }\n\n    &:disabled {\n        background: rgba(255, 255, 255, 0.3);\n        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);\n        color: #9A9AA5;\n        cursor: not-allowed;\n    }\n"])), function (_a) {
    var $color = _a.$color;
    return "rgb(".concat(palettes[$color].rgb, ")");
}, function (_a) {
    var $size = _a.$size;
    return sizes[$size];
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color;
    return variantStyles($variant, palettes[$color]);
}, glassRim, function (_a) {
    var $color = _a.$color;
    return a(palettes[$color], 0.45);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;

var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'md' : _c, _d = _a.color, color = _d === void 0 ? 'pink' : _d, children = _a.children, icon = _a.icon, _e = _a.iconPosition, iconPosition = _e === void 0 ? 'left' : _e, rest = tslib.__rest(_a, ["variant", "size", "color", "children", "icon", "iconPosition"]);
    return (React__default["default"].createElement(StyledButton, tslib.__assign({ "$variant": variant, "$size": size, "$color": color }, rest),
        icon && iconPosition === 'left' && icon,
        children,
        icon && iconPosition === 'right' && icon));
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
