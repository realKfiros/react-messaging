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
var icons_1 = require("@material-ui/icons");
var react_hook_form_1 = require("react-hook-form");
var styled_components_1 = __importDefault(require("styled-components"));
exports.Input = function (_a) {
    var onSend = _a.onSend, inputPlaceholder = _a.inputPlaceholder, renderInput = _a.renderInput, renderSend = _a.renderSend;
    var _b = react_hook_form_1.useForm({
        defaultValues: {
            messagingChatInput: '',
        },
    }), handleSubmit = _b.handleSubmit, register = _b.register, setValue = _b.setValue, watch = _b.watch;
    var input = watch('messagingChatInput', '');
    var registerSend = register({
        required: true,
    });
    function send(data) {
        if (input.length > 0) {
            onSend(data.messagingChatInput);
            setValue('messagingChatInput', '');
        }
    }
    function _renderInput() {
        if (renderInput) {
            return renderInput({
                ref: registerSend,
                name: 'messagingChatInput'
            });
        }
        else {
            return (react_1.default.createElement(core_1.TextField, { fullWidth: true, variant: "outlined", inputRef: registerSend, name: "messagingChatInput", label: inputPlaceholder || 'Type a message...' }));
        }
    }
    function _renderSend() {
        if (input.length > 0) {
            if (renderSend) {
                return renderSend({
                    type: 'submit'
                });
            }
            else {
                return (react_1.default.createElement(core_1.IconButton, { type: "submit" },
                    react_1.default.createElement(icons_1.Send, null)));
            }
        }
        else {
            return null;
        }
    }
    return (react_1.default.createElement(Form, { onSubmit: handleSubmit(send) },
        _renderInput(),
        _renderSend()));
};
var Form = styled_components_1.default('form')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n"])));
var templateObject_1;
//# sourceMappingURL=input.js.map