import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Input } from './components/input';
import { MessageRow } from './components/message';
import { Message } from './interfaces/message';
import { User } from './interfaces/user';

interface ChatProps {
    messages: Array<Message>;
    user: User;
    onSend: (text: string) => void;
    inputPlaceholder?: string;
    dateFormat?: string;
}

export const Chat: FC<ChatProps> = ({
    messages,
    user,
    onSend,
    inputPlaceholder,
    dateFormat
}) => {
    const [text, setText] = useState('');

    return (
        <ChatContainer>
            <MessagesContainer>
                {messages.map(message => <MessageRow message={message} user={user} dateFormat={dateFormat} />)}
            </MessagesContainer>
            <InputContainer>
                <Input
                    text={text}
                    setText={setText}
                    inputPlaceholder={inputPlaceholder}
                    onSend={onSend} />
            </InputContainer>
        </ChatContainer>
    )
}

const ChatContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
`;

const MessagesContainer = styled.div`
    flex-grow: 1;
    margin: 10px;
    overflow-y: auto;
`;

const InputContainer = styled.div`
    display: flex;
    margin: 10px;
`;