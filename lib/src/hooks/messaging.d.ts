import { Message, MessageFields } from '../interfaces/message';
import { User, UserFields } from '../interfaces/user';
interface MessagingHookOptions {
    original_messages: any[];
    fields: MessageFields;
    getUser: (message: any, fields?: UserFields) => Promise<User> | User;
}
interface MessagingHookResponse {
    messages: Array<Message>;
}
declare const useMessaging: ({ original_messages, fields, getUser }: MessagingHookOptions) => MessagingHookResponse;
export { useMessaging };
//# sourceMappingURL=messaging.d.ts.map