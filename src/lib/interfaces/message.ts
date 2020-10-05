import { User } from "./user";

export interface Message {
    _id: string;
    text: string;
    user: User;
    date: Date;
    data?: any;
}