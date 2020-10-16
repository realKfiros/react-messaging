import React, { useState, useEffect } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Chat, ChatProps } from '../chat';
import { useMessaging } from '../hooks/messaging';
import mockMessages from '../mocks/messages.json';
import mockUsers from '../mocks/users.json';
import { resolve } from 'path';

export default {
  title: 'Components/Chat',
  component: Chat,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ChatProps> = (args) => {
  const [original_messages, setMessages] = useState([]);
  const { messages } = useMessaging({
    original_messages,
    fields: {
      text: 'text',
      date: 'date',
      type: 'type',
      user: {
        id: '_id'
      },
      media: (message: any) => {
        return new Promise<string>((resolve, reject) => resolve(message.media))
      }
    },
    getUser: (message: any) => {
      return mockUsers.find(user => user._id === message.sender)
    }
  });

  useEffect(() => {
    initMessages();
  }, []);

  const initMessages = () => {
    setMessages(
      mockMessages.reverse().map((message, index) => {
        let date = new Date();
        date.setMinutes(date.getMinutes() - index);
        return {
          ...message,
          date
        };
      })
    );
  };

  const onSend = (text: string) => {
    setMessages([
      ...original_messages,
      {
        text,
        sender: '26',
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
      <Chat
        messages={messages}
        user={mockUsers.find(user => user._id === '26')}
        onSend={onSend} />
    </div>
  );
};

export const Classic = Template.bind({});
