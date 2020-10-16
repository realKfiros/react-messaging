import { useState, useEffect } from 'react';
import { Message, MessageFields } from '../interfaces/message';
import { User, UserFields } from '../interfaces/user';
import { v4 } from 'uuid';
import { subMinutes } from 'date-fns';

interface MessagingHookOptions {
    original_messages: any[];
    fields: MessageFields;
    getUser: (message: any, fields?: UserFields) => Promise<User> | User;
}
interface MessagingHookResponse {
    messages: Array<Message>;
}

const useMessaging = ({original_messages, fields, getUser}: MessagingHookOptions): MessagingHookResponse => {
    const [messages, setMessages] = useState<Array<Message>>([]);

    useEffect(() => {
        convert();
    }, [original_messages]);

    const firstMessageOfDay = (index: number): boolean => {
        return index === 0 || !(
          original_messages[index][fields.date].getFullYear() === original_messages[index - 1][fields.date].getFullYear() &&
          original_messages[index][fields.date].getMonth() === original_messages[index - 1][fields.date].getMonth() &&
          original_messages[index][fields.date].getDate() === original_messages[index - 1][fields.date].getDate()
        )
      }

    const convert = async () => {
        let _messages: Array<Message> = [];
        for (let original_message of original_messages) {
            if (firstMessageOfDay(original_messages.indexOf(original_message))) {
                _messages.push({
                    _id: v4(),
                    text: 'date_message',
                    date: subMinutes(original_message[fields.date], 1),
                    user: {
                        _id: v4(),
                    },
                    type: 'system'
                });
            }
            let message = await convert_message(original_message);
            _messages.push(message);
        }
        setMessages(_messages);
    }

    const convert_message = async (original_message: any): Promise<Message> => {
        let user: User;
        const userTask = getUser(original_message, fields.user);
        if ('then' in userTask) {
            user = await userTask;
        } else {
            user = userTask;
        }
        let media: string | undefined;
        if (original_message[fields.type] !== 'text') {
            if (typeof fields.media === 'string') {
                media = original_message[fields.media];
            } else {
                const mediaTask = fields.media!(original_message);
                if (typeof mediaTask === 'object') {
                    media = await mediaTask;
                } else {
                    media = mediaTask;
                }
            }
        }
        return {
            _id: fields.id ? original_message[fields.id] : v4(),
            text: original_message[fields.text],
            date: original_message[fields.date],
            user,
            original: original_message,
            type: original_message[fields.type],
            media: media
        }
    }

    return {
        messages
    };
}

export { useMessaging };