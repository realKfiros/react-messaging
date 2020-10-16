import { ReactNode } from 'react';
import { Message } from '../interfaces/message';
import { User } from '../interfaces/user';
export interface MessageProps {
    message: Message;
    user: User;
    dateFormat?: string;
    showAvatar?: boolean;
    renderMessage?: (message: Message, user: User) => ReactNode;
    renderText?: (props: TextProps, text: string) => ReactNode;
    renderDate?: (props: TextProps, text: string) => ReactNode;
    renderAvatar?: (user: User) => ReactNode;
    renderContent?: (message: Message, next: () => ReactNode) => ReactNode;
}
export interface TextProps {
    sent: boolean;
}
export declare function MessageRow({ message, user, dateFormat, showAvatar, renderMessage, renderText, renderDate, renderAvatar, renderContent }: {
    message: any;
    user: any;
    dateFormat: any;
    showAvatar: any;
    renderMessage: any;
    renderText: any;
    renderDate: any;
    renderAvatar: any;
    renderContent: any;
}): any;
//# sourceMappingURL=message.d.ts.map