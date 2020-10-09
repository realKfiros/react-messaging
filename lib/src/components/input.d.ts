import { FC, ReactNode } from 'react';
interface InputProps {
    onSend: (text: string) => void;
    inputPlaceholder?: string;
    renderInput?: (props: any) => ReactNode;
    renderSend?: (props: any) => ReactNode;
}
export declare const Input: FC<InputProps>;
export {};
//# sourceMappingURL=input.d.ts.map