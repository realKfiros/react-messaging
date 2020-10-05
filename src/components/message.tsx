import React, { FC } from 'react';
import {
    Avatar
} from '@material-ui/core';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Message } from '../interfaces/message';
import { User } from '../interfaces/user';

interface MessageProps {
    message: Message;
    user: User;
    dateFormat?: string;
}

export const MessageRow: FC<MessageProps> = ({ message, user, dateFormat }) => {
    let Row = user._id === message.user._id ? RightRow : LeftRow;
    let MessageBubble = user._id === message.user._id ? RightBubble : LeftBubble;
    let Text = user._id === message.user._id ? RightText : LeftText;
    let Date = user._id === message.user._id ? RightDate : LeftDate;

    return (
        <Row>
            <Avatar alt={message.user.name} src={message.user.avatar} />
            <MessageBubble>
                <Text>{message.text}</Text>
                <Date>{format(message.date, dateFormat || 'hh:mm')}</Date>
            </MessageBubble>
        </Row>
    )
}

const RightRow = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;

const LeftRow = styled.div`
    display: flex;
    flex-direction: row;
`;

const Bubble = styled.div`
    border-radius: 15px;
    min-height: 20px;
    justify-content: flex-end;
`;

const RightBubble = styled(Bubble)`
    background-color: #0084ff;
    margin-left: 60px;
`;

const LeftBubble = styled(Bubble)`
    background-color: #f0f0f0;
    margin-right: 60px;
`;

const MessageText = styled.p`
    font-size: 16px;
    line-height: 20px;
    margin: 5px 10px;
`;

const RightText = styled(MessageText)`
    color: #fff;
`;

const LeftText = styled(MessageText)`
    color: #000;
`;

const MessageDate = styled.p`
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
    font-size: 10px;
    background-color: transparent;
    text-align: right;
`;

const RightDate = styled(MessageDate)`
    color: #fff;
`;

const LeftDate = styled(MessageDate)`
    color: #000;
`;