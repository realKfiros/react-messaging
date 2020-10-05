import { FC } from 'react';
import { Message } from './interfaces/message';
import { User } from './interfaces/user';
export interface ChatProps {
    messages: Array<Message>;
    user: User;
    onSend: (text: string) => void;
    inputPlaceholder?: string;
    dateFormat?: string;
}
export declare const Chat: FC<ChatProps>;
//# sourceMappingURL=chat.d.ts.map