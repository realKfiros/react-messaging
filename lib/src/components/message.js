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
var date_fns_1 = require("date-fns");
function MessageRow(_a) {
    var message = _a.message, user = _a.user, dateFormat = _a.dateFormat, showAvatar = _a.showAvatar, renderMessage = _a.renderMessage, renderText = _a.renderText, renderDate = _a.renderDate, renderAvatar = _a.renderAvatar, renderContent = _a.renderContent;
    var Row = user._id === message.user._id ? RightRow : LeftRow;
    var MessageBubble = user._id === message.user._id ? RightBubble : LeftBubble;
    var Text = user._id === message.user._id ? RightText : LeftText;
    var Date = user._id === message.user._id ? RightDate : LeftDate;
    function _renderMessage() {
        if (renderMessage) {
            return renderMessage({
                message: message,
                user: user,
                dateFormat: dateFormat,
                showAvatar: showAvatar
            });
        }
        else {
            return (react_1.default.createElement(Row, null,
                _renderAvatar(),
                react_1.default.createElement(MessageBubble, null,
                    react_1.default.createElement(MessageContent, null, _renderContent()),
                    _renderText(),
                    _renderDate())));
        }
    }
    function _renderAvatar() {
        if (showAvatar) {
            if (renderAvatar) {
                return renderAvatar(message.user);
            }
            else {
                return react_1.default.createElement(core_1.Avatar, { alt: message.user.name, src: message.user.avatar });
            }
        }
        else {
            return react_1.default.createElement(NoAvatar, null);
        }
    }
    function _renderContent() {
        if (renderContent) {
            return renderContent(message, _renderStockContent);
        }
        else {
            return _renderStockContent();
        }
    }
    function _renderStockContent() {
        if (message.type === 'image') {
            return (react_1.default.createElement(Image, { src: message.media }));
        }
        else {
            return null;
        }
    }
    function _renderText() {
        if (renderText) {
            return renderText({
                sent: user._id === message.user._id
            }, message.text);
        }
        else {
            return (react_1.default.createElement(Text, null,
                react_1.default.createElement(core_1.Typography, { variant: "body1" }, message.text)));
        }
    }
    function _renderDate() {
        if (renderDate) {
            return renderDate({
                sent: user._id === message.user._id
            }, date_fns_1.format(message.date, dateFormat || 'kk:mm'));
        }
        else {
            return (react_1.default.createElement(Date, null,
                react_1.default.createElement(core_1.Typography, { variant: "caption" }, date_fns_1.format(message.date, dateFormat || 'kk:mm'))));
        }
    }
    return _renderMessage();
}
exports.MessageRow = MessageRow;
var RightRow = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row-reverse;\n    margin: 5px;\n"], ["\n    display: flex;\n    flex-direction: row-reverse;\n    margin: 5px;\n"])));
var LeftRow = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n"], ["\n    display: flex;\n    flex-direction: row;\n"])));
var MessageContent = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    max-width: calc(100% - 170px);\n    margin: 5px;\n    border-radius: 10px;\n"], ["\n    max-width: calc(100% - 170px);\n    margin: 5px;\n    border-radius: 10px;\n"])));
var Image = styled_components_1.default.img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    width: 200px;\n    border-radius: 10px;\n"], ["\n    width: 200px;\n    border-radius: 10px;\n"])));
var NoAvatar = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    height: 40px;\n    width: 40px;\n"], ["\n    height: 40px;\n    width: 40px;\n"])));
var Bubble = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    border-radius: 15px;\n    min-height: 20px;\n    justify-content: flex-end;\n    max-width: calc(100% - 160px);\n"], ["\n    border-radius: 15px;\n    min-height: 20px;\n    justify-content: flex-end;\n    max-width: calc(100% - 160px);\n"])));
var RightBubble = styled_components_1.default(Bubble)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    background-color: #0084ff;\n    margin-left: 60px;\n"], ["\n    background-color: #0084ff;\n    margin-left: 60px;\n"])));
var LeftBubble = styled_components_1.default(Bubble)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    background-color: #f0f0f0;\n    margin-right: 60px;\n"], ["\n    background-color: #f0f0f0;\n    margin-right: 60px;\n"])));
var MessageText = styled_components_1.default.p(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    font-size: 16px;\n    line-height: 20px;\n    margin: 5px 10px;\n    word-wrap: break-word;\n"], ["\n    font-size: 16px;\n    line-height: 20px;\n    margin: 5px 10px;\n    word-wrap: break-word;\n"])));
var RightText = styled_components_1.default(MessageText)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    color: #fff;\n"], ["\n    color: #fff;\n"])));
var LeftText = styled_components_1.default(MessageText)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    color: #000;\n"], ["\n    color: #000;\n"])));
var MessageDate = styled_components_1.default.p(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    margin-left: 10px;\n    margin-right: 10px;\n    margin-bottom: 5px;\n    font-size: 10px;\n    background-color: transparent;\n    text-align: right;\n"], ["\n    margin-left: 10px;\n    margin-right: 10px;\n    margin-bottom: 5px;\n    font-size: 10px;\n    background-color: transparent;\n    text-align: right;\n"])));
var RightDate = styled_components_1.default(MessageDate)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    color: #fff;\n"], ["\n    color: #fff;\n"])));
var LeftDate = styled_components_1.default(MessageDate)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    color: #000;\n"], ["\n    color: #000;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
//# sourceMappingURL=message.js.map