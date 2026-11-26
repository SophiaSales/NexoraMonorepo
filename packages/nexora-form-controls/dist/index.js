'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var palettes = {
    pink: { rgb: '150, 88, 134' },
    purple: { rgb: '93, 66, 121' },
    blue: { rgb: '80, 111, 175' },
};
var glassRim = "\n    inset 0 1px 0 rgba(255, 255, 255, 0.95),\n    inset 0 -1px 0 rgba(255, 255, 255, 0.4)\n";

// 1. O label que envolve tudo
var Wrapper = styled__default["default"].label(templateObject_1$1 || (templateObject_1$1 = tslib.__makeTemplateObject(["\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    font-family: 'Outfit', system-ui, sans-serif;\n    font-size: 16px;\n    cursor: ", ";\n"], ["\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    font-family: 'Outfit', system-ui, sans-serif;\n    font-size: 16px;\n    cursor: ", ";\n"])), function (_a) {
    var $disabled = _a.$disabled;
    return $disabled ? 'not-allowed' : 'pointer';
});
// 2. O input real, escondido (mas ainda acessível pelo teclado)
var HiddenInput = styled__default["default"].input(templateObject_2$1 || (templateObject_2$1 = tslib.__makeTemplateObject(["\n    position: absolute;\n    opacity: 0;\n    width: 0;\n    height: 0;\n    margin: 0;\n"], ["\n    position: absolute;\n    opacity: 0;\n    width: 0;\n    height: 0;\n    margin: 0;\n"])));
// 3. A caixa visual
var Box = styled__default["default"].span(templateObject_3$1 || (templateObject_3$1 = tslib.__makeTemplateObject(["\n    --c: ", ";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    width: 24px;\n    height: 24px;\n    box-sizing: border-box;\n    border-radius: ", ";\n    border: 1.5px solid rgba(var(--c), 0.7);\n    background: linear-gradient(rgba(var(--c), 0.05), rgba(var(--c), 0.05)), rgba(255, 255, 255, 0.6);\n    color: rgb(var(--c));\n    -webkit-backdrop-filter: blur(14px) saturate(180%);\n    backdrop-filter: blur(14px) saturate(180%);\n    transition: background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;\n\n    /* marcado: fundo com a cor, borda mais forte */\n    ", ":checked + & {\n        background: rgba(var(--c), 0.4);\n        border-color: rgba(var(--c), 0.85);\n        box-shadow: ", ", 0 4px 10px -4px rgba(var(--c), 0.35);\n    }\n\n    /* hover (no label inteiro, e s\u00F3 se n\u00E3o estiver disabled) */\n    ", ":hover ", ":not(:disabled) + & {\n        border-color: rgb(var(--c));\n    }\n\n    ", ":hover ", ":not(:disabled):checked + & {\n        background: rgba(var(--c), 0.48);\n    }\n\n    /* foco pelo teclado: anel claro ao redor da borda */\n    ", ":focus-visible + & {\n        box-shadow: 0 0 0 2px #fff,\n            0 0 0 5px rgba(var(--c), 0.35);\n    }\n\n    /* desabilitado: cinza */\n    ", ":disabled + & {\n        border-color: #bdbdc4;\n        background: rgba(255, 255, 255, 0.5);\n        color: #8e8e98;\n        box-shadow: none;\n    }\n\n    ", ":disabled:checked + & {\n        background: #dcdce0;\n    }\n"], ["\n    --c: ", ";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    width: 24px;\n    height: 24px;\n    box-sizing: border-box;\n    border-radius: ", ";\n    border: 1.5px solid rgba(var(--c), 0.7);\n    background: linear-gradient(rgba(var(--c), 0.05), rgba(var(--c), 0.05)), rgba(255, 255, 255, 0.6);\n    color: rgb(var(--c));\n    -webkit-backdrop-filter: blur(14px) saturate(180%);\n    backdrop-filter: blur(14px) saturate(180%);\n    transition: background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;\n\n    /* marcado: fundo com a cor, borda mais forte */\n    ", ":checked + & {\n        background: rgba(var(--c), 0.4);\n        border-color: rgba(var(--c), 0.85);\n        box-shadow: ", ", 0 4px 10px -4px rgba(var(--c), 0.35);\n    }\n\n    /* hover (no label inteiro, e s\u00F3 se n\u00E3o estiver disabled) */\n    ", ":hover ", ":not(:disabled) + & {\n        border-color: rgb(var(--c));\n    }\n\n    ", ":hover ", ":not(:disabled):checked + & {\n        background: rgba(var(--c), 0.48);\n    }\n\n    /* foco pelo teclado: anel claro ao redor da borda */\n    ", ":focus-visible + & {\n        box-shadow: 0 0 0 2px #fff,\n            0 0 0 5px rgba(var(--c), 0.35);\n    }\n\n    /* desabilitado: cinza */\n    ", ":disabled + & {\n        border-color: #bdbdc4;\n        background: rgba(255, 255, 255, 0.5);\n        color: #8e8e98;\n        box-shadow: none;\n    }\n\n    ", ":disabled:checked + & {\n        background: #dcdce0;\n    }\n"])), function (_a) {
    var $color = _a.$color;
    return palettes[$color].rgb;
}, function (_a) {
    var $shape = _a.$shape;
    return ($shape === 'round' ? '50%' : '8px');
}, HiddenInput, glassRim, Wrapper, HiddenInput, Wrapper, HiddenInput, HiddenInput, HiddenInput, HiddenInput);
// 4. O que aparece dentro da caixa (check ou bolinha)
var Indicator = styled__default["default"].span(templateObject_4$1 || (templateObject_4$1 = tslib.__makeTemplateObject(["\n    display: flex;\n    opacity: 0;\n    transform: scale(0.5);\n    transition: opacity 0.15s ease, transform 0.15s ease;\n\n    ", ":checked + ", " > & {\n        opacity: 1;\n        transform: scale(1);\n    }\n"], ["\n    display: flex;\n    opacity: 0;\n    transform: scale(0.5);\n    transition: opacity 0.15s ease, transform 0.15s ease;\n\n    ", ":checked + ", " > & {\n        opacity: 1;\n        transform: scale(1);\n    }\n"])), HiddenInput, Box);
// 5. A bolinha do radio
var Dot = styled__default["default"].span(templateObject_5$1 || (templateObject_5$1 = tslib.__makeTemplateObject(["\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background: currentColor;\n"], ["\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background: currentColor;\n"])));
// 6. O texto ao lado
var Label = styled__default["default"].span(templateObject_6 || (templateObject_6 = tslib.__makeTemplateObject(["\n    color: ", ";\n"], ["\n    color: ", ";\n"])), function (_a) {
    var $disabled = _a.$disabled;
    return ($disabled ? '#9a9aa5' : '#2d2438');
});
var templateObject_1$1, templateObject_2$1, templateObject_3$1, templateObject_4$1, templateObject_5$1, templateObject_6;

var Checkbox = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'pink' : _b, label = _a.label, disabled = _a.disabled, rest = tslib.__rest(_a, ["color", "label", "disabled"]);
    return (React__default["default"].createElement(Wrapper, { "$disabled": disabled },
        React__default["default"].createElement(HiddenInput, tslib.__assign({ type: "checkbox", disabled: disabled }, rest)),
        React__default["default"].createElement(Box, { "$color": color, "$shape": "square" },
            React__default["default"].createElement(Indicator, null,
                React__default["default"].createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true" },
                    React__default["default"].createElement("path", { d: "M2.5 7.5L5.5 10.5L11.5 3.5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })))),
        label && React__default["default"].createElement(Label, { "$disabled": disabled }, label)));
};

var Radio = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'pink' : _b, label = _a.label, disabled = _a.disabled, rest = tslib.__rest(_a, ["color", "label", "disabled"]);
    return (React__default["default"].createElement(Wrapper, { "$disabled": disabled },
        React__default["default"].createElement(HiddenInput, tslib.__assign({ type: "radio", disabled: disabled }, rest)),
        " ",
        React__default["default"].createElement(Box, { "$color": color, "$shape": "round" },
            "                         ",
            React__default["default"].createElement(Indicator, null,
                React__default["default"].createElement(Dot, null),
                "                                                 ")),
        label && React__default["default"].createElement(Label, { "$disabled": disabled }, label)));
};

var trackDepth = "\n    inset 0 1px 3px rgba(0, 0, 0, 0.14),\n    inset 0 -1px 0 rgba(255, 255, 255, 0.55),\n    0 1px 0 rgba(255, 255, 255, 0.5)\n";
// A pílula
var Track = styled__default["default"].span(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n    --c: ", ";\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    flex-shrink: 0;\n    width: 52px;\n    height: 30px;\n    padding: 3px;\n    box-sizing: border-box;\n    border-radius: 999px;\n    border: 1px solid rgba(255, 255, 255, 0.55);\n    background: rgba(120, 120, 128, 0.16);\n    box-shadow: ", ";\n    -webkit-backdrop-filter: blur(14px) saturate(180%);\n    backdrop-filter: blur(14px) saturate(180%);\n    transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;\n\n    /* ligado */\n    ", ":checked + & {\n        background: rgba(var(--c), 0.4);\n    }\n\n    /* hover (no label inteiro, se n\u00E3o estiver desabilitado) */\n    ", ":hover ", ":not(:disabled) + & {\n        background: rgba(120, 120, 128, 0.24);\n    }\n\n    ", ":hover ", ":not(:disabled):checked + & {\n        background: rgba(var(--c), 0.65);\n    }\n\n    /* foco pelo teclado: anel duplo */\n    ", ":focus-visible + & {\n        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(var(--c), 0.35);\n    }\n\n    /* desabilitado */\n    ", ":disabled + & {\n        background: rgba(120, 120, 128, 0.1);\n        box-shadow: ", ";\n        opacity: 0.6;\n    }\n"], ["\n    --c: ", ";\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    flex-shrink: 0;\n    width: 52px;\n    height: 30px;\n    padding: 3px;\n    box-sizing: border-box;\n    border-radius: 999px;\n    border: 1px solid rgba(255, 255, 255, 0.55);\n    background: rgba(120, 120, 128, 0.16);\n    box-shadow: ", ";\n    -webkit-backdrop-filter: blur(14px) saturate(180%);\n    backdrop-filter: blur(14px) saturate(180%);\n    transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;\n\n    /* ligado */\n    ", ":checked + & {\n        background: rgba(var(--c), 0.4);\n    }\n\n    /* hover (no label inteiro, se n\u00E3o estiver desabilitado) */\n    ", ":hover ", ":not(:disabled) + & {\n        background: rgba(120, 120, 128, 0.24);\n    }\n\n    ", ":hover ", ":not(:disabled):checked + & {\n        background: rgba(var(--c), 0.65);\n    }\n\n    /* foco pelo teclado: anel duplo */\n    ", ":focus-visible + & {\n        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(var(--c), 0.35);\n    }\n\n    /* desabilitado */\n    ", ":disabled + & {\n        background: rgba(120, 120, 128, 0.1);\n        box-shadow: ", ";\n        opacity: 0.6;\n    }\n"])), function (_a) {
    var $color = _a.$color;
    return palettes[$color].rgb;
}, trackDepth, HiddenInput, Wrapper, HiddenInput, Wrapper, HiddenInput, HiddenInput, HiddenInput, trackDepth);
// A bolinha branca
var Thumb = styled__default["default"].span(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 22px;\n    height: 22px;\n    border-radius: 50%;\n    background: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.88));\n    color: #8e8e98;\n    box-shadow:\n        0 2px 8px rgba(0, 0, 0, 0.2),\n        0 0 0 0.5px rgba(0, 0, 0, 0.06),\n        inset 0 1px 0 #fff;\n    transition: transform 0.25s ease;\n\n    /* ligado: desliza para a direita (52 - 3 - 3 - 22 - bordas) */\n    ", ":checked + ", " > & {\n        transform: translateX(22px);\n    }\n\n    ", ":disabled + ", " > & {\n        background: #fff;\n        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18), 0 0 0 0.5px rgba(0, 0, 0, 0.08);\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 22px;\n    height: 22px;\n    border-radius: 50%;\n    background: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.88));\n    color: #8e8e98;\n    box-shadow:\n        0 2px 8px rgba(0, 0, 0, 0.2),\n        0 0 0 0.5px rgba(0, 0, 0, 0.06),\n        inset 0 1px 0 #fff;\n    transition: transform 0.25s ease;\n\n    /* ligado: desliza para a direita (52 - 3 - 3 - 22 - bordas) */\n    ", ":checked + ", " > & {\n        transform: translateX(22px);\n    }\n\n    ", ":disabled + ", " > & {\n        background: #fff;\n        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18), 0 0 0 0.5px rgba(0, 0, 0, 0.08);\n    }\n"])), HiddenInput, Track, HiddenInput, Track);
var iconBase = styled.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: rgb(var(--c));\n    transition: opacity 0.2s ease, transform 0.25s ease;\n"], ["\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: rgb(var(--c));\n    transition: opacity 0.2s ease, transform 0.25s ease;\n"])));
// aparece quando DESLIGADO, some quando ligado
var IconOff = styled__default["default"].span(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n    ", "\n    opacity: 1;\n\n    ", ":checked + ", " > ", " > & {\n        opacity: 0;\n        transform: rotate(-90deg) scale(0.5);\n    }\n"], ["\n    ", "\n    opacity: 1;\n\n    ", ":checked + ", " > ", " > & {\n        opacity: 0;\n        transform: rotate(-90deg) scale(0.5);\n    }\n"])), iconBase, HiddenInput, Track, Thumb);
// o contrário: escondido, aparece quando LIGADO
var IconOn = styled__default["default"].span(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n    ", "\n    opacity: 0;\n    transform: rotate(90deg) scale(0.5);\n\n    ", ":checked + ", " > ", " > & {\n        opacity: 1;\n        transform: none;\n    }\n"], ["\n    ", "\n    opacity: 0;\n    transform: rotate(90deg) scale(0.5);\n\n    ", ":checked + ", " > ", " > & {\n        opacity: 1;\n        transform: none;\n    }\n"])), iconBase, HiddenInput, Track, Thumb);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

var Switch = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'pink' : _b, label = _a.label, disabled = _a.disabled, iconOff = _a.iconOff, iconOn = _a.iconOn, rest = tslib.__rest(_a, ["color", "label", "disabled", "iconOff", "iconOn"]);
    return (React__default["default"].createElement(Wrapper, { "$disabled": disabled },
        React__default["default"].createElement(HiddenInput, tslib.__assign({ type: "checkbox", role: "switch", disabled: disabled }, rest)),
        React__default["default"].createElement(Track, { "$color": color },
            React__default["default"].createElement(Thumb, null,
                iconOff && React__default["default"].createElement(IconOff, null, iconOff),
                iconOn && React__default["default"].createElement(IconOn, null, iconOn))),
        label && React__default["default"].createElement(Label, { "$disabled": disabled }, label)));
};

exports.Checkbox = Checkbox;
exports.Radio = Radio;
exports.Switch = Switch;
//# sourceMappingURL=index.js.map
