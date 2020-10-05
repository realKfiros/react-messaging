"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var input_1 = require("./components/input");
var message_1 = require("./components/message");
exports.Chat = function (_a) {
    var messages = _a.messages, user = _a.user, onSend = _a.onSend, inputPlaceholder = _a.inputPlaceholder, dateFormat = _a.dateFormat;
    var _b = react_1.useState(''), text = _b[0], setText = _b[1];
    return (react_1.default.createElement(ChatContainer, null,
        react_1.default.createElement(MessagesContainer, null, messages.map(function (message) { return react_1.default.createElement(message_1.MessageRow, { message: message, user: user, dateFormat: dateFormat }); })),
        react_1.default.createElement(InputContainer, null,
            react_1.default.createElement(input_1.Input, { text: text, setText: setText, inputPlaceholder: inputPlaceholder, onSend: onSend }))));
};
var ChatContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    height: 100%;\n    flex-direction: column;\n"], ["\n    display: flex;\n    height: 100%;\n    flex-direction: column;\n"])));
var MessagesContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    flex-grow: 1;\n    margin: 10px;\n    overflow-y: auto;\n"], ["\n    flex-grow: 1;\n    margin: 10px;\n    overflow-y: auto;\n"])));
var InputContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    margin: 10px;\n"], ["\n    display: flex;\n    margin: 10px;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=chat.js.map