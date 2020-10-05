"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
exports.Input = function (_a) {
    var text = _a.text, setText = _a.setText, onSend = _a.onSend, inputPlaceholder = _a.inputPlaceholder;
    function send() {
        onSend(text);
        setText('');
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.TextField, { fullWidth: true, variant: "outlined", value: text, onChange: function (e) { return setText(e.target.value); }, label: inputPlaceholder || 'Type a message...' }),
        text.length > 0 ? (react_1.default.createElement(core_1.IconButton, { onClick: function () { return send(); } },
            react_1.default.createElement(icons_1.Send, null))) : null));
};
//# sourceMappingURL=input.js.map