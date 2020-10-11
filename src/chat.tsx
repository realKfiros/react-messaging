import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Input } from './components/input';
import { MessageProps, MessageRow, TextProps } from './components/message';
import { SystemMessage } from './components/system_message';
import { Message } from './interfaces/message';
import { User } from './interfaces/user';
import { format } from 'date-fns';

export interface ChatProps {
  messages: Array<Message>;
  user: User;
  onSend: (text: string) => void;
  inputPlaceholder?: string;
  dateFormat?: string;
  dayMessageDateFormat?: string;
  showAvatarOnEveryMessage?: boolean;
  renderInput?: (props: any) => ReactNode;
  renderSend?: (props: any) => ReactNode;
  renderMessage?: (props: MessageProps) => ReactNode;
  renderText?: (props: TextProps, text: string) => ReactNode;
  renderDate?: (props: TextProps, text: string) => ReactNode;
  renderAvatar?: (user: User) => ReactNode;
}

export const Chat: FC<ChatProps> = ({
  messages,
  user,
  onSend,
  inputPlaceholder,
  dateFormat,
  dayMessageDateFormat,
  showAvatarOnEveryMessage,
  renderInput,
  renderSend,
  renderMessage,
  renderAvatar,
  renderText,
  renderDate
}) => {
  const sortMessages = (message1: Message, message2: Message): number => {
    return message1.date.getTime() - message2.date.getTime();
  };

  const _messages = messages.sort(sortMessages).reverse();

  const showAvatar = (index: number): boolean => {
    return showAvatarOnEveryMessage || (
      index === 0 || (
        _messages[index].user._id !== _messages[index - 1].user._id
      )
    )
  }

  return (
    <ChatContainer>
      <MessagesContainer>
        {_messages
          .map((message, index) => message.type === 'text' ? (
            <MessageRow
              key={message._id}
              message={message}
              user={user}
              dateFormat={dateFormat}
              showAvatar={showAvatar(index)}
              renderMessage={renderMessage}
              renderAvatar={renderAvatar}
              renderText={renderText}
              renderDate={renderDate}
            />
          ) : <SystemMessage key={message._id} text={message.text === 'date_message' ? (
                  format(message.date, dayMessageDateFormat || 'MMMM do, yyyy')
                ) : message.text} />)}
      </MessagesContainer>
      <InputContainer>
        <Input
          inputPlaceholder={inputPlaceholder}
          onSend={onSend}
          renderInput={renderInput}
          renderSend={renderSend} />
      </InputContainer>
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const MessagesContainer = styled.div`
  flex-grow: 1;
  margin: 10px;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
`;

const InputContainer = styled.div`
  display: flex;
  margin: 10px;
`;
