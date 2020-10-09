import React, { FC, ReactNode } from 'react';
import {
    Avatar,
    Typography
} from '@material-ui/core';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Message } from '../interfaces/message';
import { User } from '../interfaces/user';

export interface MessageProps {
    message: Message;
    user: User;
    dateFormat?: string;
    showAvatar?: boolean;
    renderMessage?: (props: MessageProps) => ReactNode;
    renderText?: (props: TextProps, text: string) => ReactNode;
    renderDate?: (props: TextProps, text: string) => ReactNode;
    renderAvatar?: (user: User) => ReactNode;
}

export interface TextProps {
    sent: boolean;
}

export const MessageRow: FC<MessageProps> = ({
    message,
    user,
    dateFormat,
    showAvatar,
    renderMessage,
    renderText,
    renderDate,
    renderAvatar
}) => {
    let Row = user._id === message.user._id ? RightRow : LeftRow;
    let MessageBubble = user._id === message.user._id ? RightBubble : LeftBubble;
    let Text = user._id === message.user._id ? RightText : LeftText;
    let Date = user._id === message.user._id ? RightDate : LeftDate;

    function _renderMessage() {
        if (renderMessage) {
            return (
                <>
                    {renderMessage({
                        message,
                        user,
                        dateFormat,
                        showAvatar
                    })}
                </>
            )
        } else {
            return (
                <Row>
                    {_renderAvatar()}
                    <MessageBubble>
                        {_renderText()}
                        {_renderDate()}
                    </MessageBubble>
                </Row>
            );
        }
    }

    function _renderAvatar() {
        if (showAvatar) {
            if (renderAvatar) {
                return renderAvatar(message.user);
            } else {
                return <Avatar alt={message.user.name} src={message.user.avatar} />;
            }
        } else {
            return <NoAvatar />;
        }
    }

    function _renderText() {
        if (renderText) {
            return renderText({
                sent: user._id === message.user._id
            }, message.text);
        } else {
            return (
                <Text>
                    <Typography variant="body1">{message.text}</Typography>
                </Text>
            );
        }
    }

    function _renderDate() {
        if (renderDate) {
            return renderDate({
                sent: user._id === message.user._id
            }, format(message.date, dateFormat || 'kk:mm'));
        } else {
            return (
                <Date>
                    <Typography variant="caption">{format(message.date, dateFormat || 'kk:mm')}</Typography>
                </Date>
            );
        }
    }

    return _renderMessage();
}

const RightRow = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin: 5px;
`;

const LeftRow = styled.div`
    display: flex;
    flex-direction: row;
`;

const NoAvatar = styled.div`
    height: 40px;
    width: 40px;
`;

const Bubble = styled.div`
    border-radius: 15px;
    min-height: 20px;
    justify-content: flex-end;
    max-width: 50%;
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
    word-wrap: break-word;
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