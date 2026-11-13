import { __makeTemplateObject, __rest, __assign } from 'tslib';
import React from 'react';
import styled from 'styled-components';

var palettes = {
    pink: { rgb: '150, 88, 134' },
    purple: { rgb: '93, 66, 121' },
    blue: { rgb: '80, 111, 175' },
};
var glassRim = "\n    inset 0 1px 0 rgba(255, 255, 255, 0.95),\n    inset 0 -1px 0 rgba(255, 255, 255, 0.4)\n";

// 1. O label que envolve tudo
var Wrapper = styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    font-family: 'Outfit', system-ui, sans-serif;\n    font-size: 16px;\n    cursor: ", ";\n"], ["\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    font-family: 'Outfit', system-ui, sans-serif;\n    font-size: 16px;\n    cursor: ", ";\n"])), function (_a) {
    var $disabled = _a.$disabled;
    return $disabled ? 'not-allowed' : 'pointer';
});
// 2. O input real, escondido (mas ainda acessível pelo teclado)
var HiddenInput = styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: absolute;\n    opacity: 0;\n    width: 0;\n    height: 0;\n    margin: 0;\n"], ["\n    position: absolute;\n    opacity: 0;\n    width: 0;\n    height: 0;\n    margin: 0;\n"])));
// 3. A caixa visual
var Box = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    --c: ", ";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    width: 24px;\n    height: 24px;\n    box-sizing: border-box;\n    border-radius: ", ";\n    border: 1.5px solid rgba(var(--c), 0.7);\n    background: linear-gradient(rgba(var(--c), 0.05), rgba(var(--c), 0.05)), rgba(255, 255, 255, 0.6);\n    color: rgb(var(--c));\n    -webkit-backdrop-filter: blur(14px) saturate(180%);\n    backdrop-filter: blur(14px) saturate(180%);\n    transition: background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;\n\n    /* marcado: fundo com a cor, borda mais forte */\n    ", ":checked + & {\n        background: rgba(var(--c), 0.4);\n        border-color: rgba(var(--c), 0.85);\n        box-shadow: ", ", 0 4px 10px -4px rgba(var(--c), 0.35);\n    }\n\n    /* hover (no label inteiro, e s\u00F3 se n\u00E3o estiver disabled) */\n    ", ":hover ", ":not(:disabled) + & {\n        border-color: rgb(var(--c));\n    }\n\n    ", ":hover ", ":not(:disabled):checked + & {\n        background: rgba(var(--c), 0.48);\n    }\n\n    /* foco pelo teclado: anel claro ao redor da borda */\n    ", ":focus-visible + & {\n        box-shadow: 0 0 0 2px #fff,\n            0 0 0 5px rgba(var(--c), 0.35);\n    }\n\n    /* desabilitado: cinza */\n    ", ":disabled + & {\n        border-color: #bdbdc4;\n        background: rgba(255, 255, 255, 0.5);\n        color: #8e8e98;\n        box-shadow: none;\n    }\n\n    ", ":disabled:checked + & {\n        background: #dcdce0;\n    }\n"], ["\n    --c: ", ";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    width: 24px;\n    height: 24px;\n    box-sizing: border-box;\n    border-radius: ", ";\n    border: 1.5px solid rgba(var(--c), 0.7);\n    background: linear-gradient(rgba(var(--c), 0.05), rgba(var(--c), 0.05)), rgba(255, 255, 255, 0.6);\n    color: rgb(var(--c));\n    -webkit-backdrop-filter: blur(14px) saturate(180%);\n    backdrop-filter: blur(14px) saturate(180%);\n    transition: background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;\n\n    /* marcado: fundo com a cor, borda mais forte */\n    ", ":checked + & {\n        background: rgba(var(--c), 0.4);\n        border-color: rgba(var(--c), 0.85);\n        box-shadow: ", ", 0 4px 10px -4px rgba(var(--c), 0.35);\n    }\n\n    /* hover (no label inteiro, e s\u00F3 se n\u00E3o estiver disabled) */\n    ", ":hover ", ":not(:disabled) + & {\n        border-color: rgb(var(--c));\n    }\n\n    ", ":hover ", ":not(:disabled):checked + & {\n        background: rgba(var(--c), 0.48);\n    }\n\n    /* foco pelo teclado: anel claro ao redor da borda */\n    ", ":focus-visible + & {\n        box-shadow: 0 0 0 2px #fff,\n            0 0 0 5px rgba(var(--c), 0.35);\n    }\n\n    /* desabilitado: cinza */\n    ", ":disabled + & {\n        border-color: #bdbdc4;\n        background: rgba(255, 255, 255, 0.5);\n        color: #8e8e98;\n        box-shadow: none;\n    }\n\n    ", ":disabled:checked + & {\n        background: #dcdce0;\n    }\n"])), function (_a) {
    var $color = _a.$color;
    return palettes[$color].rgb;
}, function (_a) {
    var $shape = _a.$shape;
    return ($shape === 'round' ? '50%' : '8px');
}, HiddenInput, glassRim, Wrapper, HiddenInput, Wrapper, HiddenInput, HiddenInput, HiddenInput, HiddenInput);
// 4. O que aparece dentro da caixa (check ou bolinha)
var Indicator = styled.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    opacity: 0;\n    transform: scale(0.5);\n    transition: opacity 0.15s ease, transform 0.15s ease;\n\n    ", ":checked + ", " > & {\n        opacity: 1;\n        transform: scale(1);\n    }\n"], ["\n    display: flex;\n    opacity: 0;\n    transform: scale(0.5);\n    transition: opacity 0.15s ease, transform 0.15s ease;\n\n    ", ":checked + ", " > & {\n        opacity: 1;\n        transform: scale(1);\n    }\n"])), HiddenInput, Box);
// 5. A bolinha do radio
var Dot = styled.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background: currentColor;\n"], ["\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background: currentColor;\n"])));
// 6. O texto ao lado
var Label = styled.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    color: ", ";\n"], ["\n    color: ", ";\n"])), function (_a) {
    var $disabled = _a.$disabled;
    return ($disabled ? '#9a9aa5' : '#2d2438');
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

var Checkbox = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'pink' : _b, label = _a.label, disabled = _a.disabled, rest = __rest(_a, ["color", "label", "disabled"]);
    return (React.createElement(Wrapper, { "$disabled": disabled },
        React.createElement(HiddenInput, __assign({ type: "checkbox", disabled: disabled }, rest)),
        React.createElement(Box, { "$color": color, "$shape": "square" },
            React.createElement(Indicator, null,
                React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true" },
                    React.createElement("path", { d: "M2.5 7.5L5.5 10.5L11.5 3.5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })))),
        label && React.createElement(Label, { "$disabled": disabled }, label)));
};

var Radio = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'pink' : _b, label = _a.label, disabled = _a.disabled, rest = __rest(_a, ["color", "label", "disabled"]);
    return (React.createElement(Wrapper, { "$disabled": disabled },
        React.createElement(HiddenInput, __assign({ type: "radio", disabled: disabled }, rest)),
        " ",
        React.createElement(Box, { "$color": color, "$shape": "round" },
            "                         ",
            React.createElement(Indicator, null,
                React.createElement(Dot, null),
                "                                                 ")),
        label && React.createElement(Label, { "$disabled": disabled }, label)));
};

export { Checkbox, Radio };
//# sourceMappingURL=index.esm.js.map
