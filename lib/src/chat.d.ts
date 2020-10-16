import { FC, ReactNode } from 'react';
import { MessageProps, TextProps } from './components/message';
import { Message } from './interfaces/message';
import { User } from './interfaces/user';
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
    renderContent?: (message: Message, next: () => ReactNode) => ReactNode;
}
export declare const Chat: FC<ChatProps>;
//# sourceMappingURL=chat.d.ts.map