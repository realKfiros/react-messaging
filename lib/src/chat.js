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
var styled_components_1 = __importDefault(require("styled-components"));
var input_1 = require("./components/input");
var message_1 = require("./components/message");
exports.Chat = function (_a) {
    var messages = _a.messages, user = _a.user, onSend = _a.onSend, inputPlaceholder = _a.inputPlaceholder, dateFormat = _a.dateFormat, showAvatarOnEveryMessage = _a.showAvatarOnEveryMessage, renderInput = _a.renderInput, renderSend = _a.renderSend;
    var sortMessages = function (message1, message2) {
        return message1.date.getTime() - message2.date.getTime();
    };
    var _messages = messages.sort(sortMessages).reverse();
    var showAvatar = function (index) {
        return showAvatarOnEveryMessage || (index === 0 || (_messages[index].user._id !== _messages[index - 1].user._id));
    };
    return (react_1.default.createElement(ChatContainer, null,
        react_1.default.createElement(MessagesContainer, null, _messages
            .map(function (message, index) { return (react_1.default.createElement(message_1.MessageRow, { key: message._id, message: message, user: user, dateFormat: dateFormat, showAvatar: showAvatar(index) })); })),
        react_1.default.createElement(InputContainer, null,
            react_1.default.createElement(input_1.Input, { inputPlaceholder: inputPlaceholder, onSend: onSend, renderInput: renderInput, renderSend: renderSend }))));
};
var ChatContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n"], ["\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n"])));
var MessagesContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin: 10px;\n  display: flex;\n  flex-direction: column-reverse;\n  overflow-y: auto;\n"], ["\n  flex-grow: 1;\n  margin: 10px;\n  display: flex;\n  flex-direction: column-reverse;\n  overflow-y: auto;\n"])));
var InputContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  margin: 10px;\n"], ["\n  display: flex;\n  margin: 10px;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=chat.js.map