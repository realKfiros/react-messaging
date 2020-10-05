import React, { FC } from 'react';
import {
    IconButton,
    TextField
} from '@material-ui/core';
import {
    Send
} from '@material-ui/icons';

interface InputProps {
    text: string;
    setText: (text: string) => void;
    onSend: (text: string) => void;
    inputPlaceholder?: string;
}

export const Input: FC<InputProps> = ({ text, setText, onSend, inputPlaceholder }) => {
    function send() {
        onSend(text);
        setText('');
    }

    return (
        <>
            <TextField
                fullWidth
                variant="outlined"
                value={text}
                onChange={e => setText(e.target.value)}
                label={inputPlaceholder || 'Type a message...'} />
            {text.length > 0 ? (
                <IconButton onClick={() => send()}>
                    <Send />
                </IconButton>
            ) : null}
        </>
    )
}