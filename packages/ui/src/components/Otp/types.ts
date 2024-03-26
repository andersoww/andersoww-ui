import { ChangeEvent, InputHTMLAttributes, KeyboardEvent, ClipboardEvent, PropsWithChildren } from "react"

interface ExtendedKeyboardEvent<T> extends KeyboardEvent<T> {
    target: EventTarget & T;
}

interface IOtpRoot extends PropsWithChildren {
    className?: string;
    handleSubmitOtp?: (value: string) => void;
}

interface IOtpInput extends InputHTMLAttributes<HTMLInputElement> {
    index?: number;
    onChangeOtp?: (e: ChangeEvent, index?: number) => void;
    onKeyUpChangeOtp?: (
        e?: KeyboardEvent<HTMLInputElement>,
        index?: number
    ) => void;
    onPasteOtp?: (e: ClipboardEvent<HTMLInputElement>) => void;
}


export type { ExtendedKeyboardEvent, IOtpRoot, IOtpInput }