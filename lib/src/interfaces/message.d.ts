import { User, UserFields } from "./user";
export interface Message {
    _id: string;
    text: string;
    user: User;
    date: Date;
    media?: string;
    original?: any;
    type: string;
}
export interface MessageFields {
    id?: string;
    text: string;
    date: string;
    user: UserFields;
    type: string;
    media?: string | ((original_message: any) => string | Promise<string>);
}
//# sourceMappingURL=message.d.ts.map