import clsx from "clsx";
import {
    ChangeEvent,
    Children,
    ClipboardEvent,
    ReactElement,
    cloneElement,
    forwardRef,
    useCallback,
    useRef,
    useState
} from "react";
import { ClientOnly } from "../ClientOnly";
import { ExtendedKeyboardEvent, IOtpInput, IOtpRoot } from "./types";



const OtpRoot = ({ className, children, handleSubmitOtp }: IOtpRoot) => {
    const otpBoxReference = useRef<HTMLInputElement[]>([]);
    const [otp, setOtp] = useState<string[]>([]);

    const dataElement = Children.toArray(children) as ReactElement[];

    const onChangeOtp = useCallback(
        (e: ChangeEvent<HTMLInputElement>, index: number) => {
            const { target } = e;

            e.target.value = e.target.value.replace(/[^0-9]/g, "");

            const aux = [...otp];

            aux[index] = target.value;

            setOtp(aux);

            handleSubmitOtp && handleSubmitOtp(aux.join().replaceAll(",", ""));

            if (target.value && index < otpBoxReference.current.length - 1) {
                otpBoxReference.current[index + 1]?.focus();
            }
        },
        [handleSubmitOtp, otp]
    );

    const onKeyUpChangeOtp = useCallback(
        (e: ExtendedKeyboardEvent<HTMLInputElement>, index: number) => {
            const { key, target } = e;

            if (key === "Backspace" && index > 0) {
                if (target.value === "") {
                    otpBoxReference.current[index - 1]?.focus();
                }
            }
        },
        []
    );

    const onPasteOtp = useCallback(
        (e: ClipboardEvent<HTMLInputElement>) => {
            const paste = e.clipboardData.getData("text");

            const validate = new RegExp(/[^0-9]/g).test(paste);

            if (!validate) {
                const pasteText = paste.split("");

                const aux = pasteText.map((val, index) => {
                    if (otpBoxReference.current[index]) {
                        return (otpBoxReference.current[index]!.value = val);
                    }
                });

                handleSubmitOtp && handleSubmitOtp(aux.join().replaceAll(",", ""));
            }
        },
        [handleSubmitOtp]
    );

    return (
        <div className={clsx("flex gap-4", className)}>
            {dataElement.map((child, index) => {
                return cloneElement(child, {
                    index,
                    onKeyUpChangeOtp,
                    onChangeOtp,
                    onPasteOtp,
                    ref: (referer: HTMLInputElement) => {
                        return (otpBoxReference.current[index] = referer);
                    },
                });
            })}
        </div>
    );
}

const OtpInput = forwardRef<HTMLInputElement, IOtpInput>(
    (
        props,
        ref
    ) => {

        const { className, index, onChangeOtp, onKeyUpChangeOtp, onPasteOtp, ...rest } = props

        return (
            <ClientOnly
                fallback={
                    <div className="w-16 h-16 rounded-lg animate-pulse bg-[#434747]" />
                }
            >
                <input
                    autoFocus={index === 0}
                    type="tel"
                    className={clsx(
                        "w-16 h-16 rounded-lg bg-[#252828] text-xl text-center appearance-none hover:border-2 border-[#0a9d7f] transition-all hover:cursor-pointer outline-none focus:border-2",
                        className
                    )}
                    maxLength={1}
                    ref={ref}
                    onChange={(e) => onChangeOtp && onChangeOtp(e, index)}
                    onKeyDown={(e) => onKeyUpChangeOtp && onKeyUpChangeOtp(e, index)}
                    onPaste={onPasteOtp}
                    placeholder="○"
                    {...rest}
                />
            </ClientOnly>
        );
    }
);

const Otp = Object.assign(OtpRoot, {
    Root: OtpRoot,
    Input: OtpInput
});

OtpRoot.displayName = "OtpRoot";
OtpInput.displayName = "OtpInput";


export default Otp