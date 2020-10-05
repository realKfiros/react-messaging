import React, { useState, useEffect } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Chat, ChatProps } from '../chat';
import mockMessages from '../mocks/messages.json';
import mockUser from '../mocks/user.json';
import { v4 } from 'uuid';

export default {
  title: 'Example/Chat',
  component: Chat,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ChatProps> = (args) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    initMessages();
  }, []);

  const initMessages = () => {
    setMessages(
      mockMessages.map((message) => ({ ...message, date: new Date() }))
    );
  };

  const onSend = (text: string) => {
    setMessages([
      ...messages,
      {
        _id: v4(),
        text,
        user: mockUser,
        date: new Date(),
      },
    ]);
  };

  return (
    <div
      style={{
        width: 500,
        height: 500,
      }}
    >
      <Chat messages={messages} user={mockUser} onSend={onSend} />
    </div>
  );
};

export const Primary = Template.bind({});