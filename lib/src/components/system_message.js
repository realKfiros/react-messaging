"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var styled_components_1 = __importDefault(require("styled-components"));
exports.SystemMessage = function (_a) {
    var text = _a.text;
    return (react_1.default.createElement(Wrapper, null,
        react_1.default.createElement(core_1.Typography, { variant: "subtitle2" }, text)));
};
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin-left: auto;\n    margin-right: auto;\n"], ["\n    margin-left: auto;\n    margin-right: auto;\n"])));
var templateObject_1;
//# sourceMappingURL=system_message.js.map