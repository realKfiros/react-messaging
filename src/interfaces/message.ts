import { User, UserFields } from "./user";

export interface Message {
    _id: string;
    text: string;
    user: User;
    date: Date;
    original?: any;
    type: string;
}

export interface MessageFields {
    id?: string;
    text: string;
    date: string;
    user: UserFields;
}