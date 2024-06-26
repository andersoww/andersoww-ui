"use client";

import { Otp } from "@andersoww/roque-ui";
import { Landmark } from "lucide-react";

function ExampleOTP() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-[#232323] w-screen justify-center">
            <div className="w-[450px] bg-[#161819] rounded-xl shadow-lg flex flex-col gap-4 border border-[#252828] text-white">

                <div className="flex flex-col gap-1 p-8 pb-0 items-center">
                    <div className="w-16 h-16 bg-[#0a9d7f] justify-center flex items-center rounded-full mb-4">
                        <Landmark className="w-8 h-8" />
                    </div>
                    <h1 className="font-semibold text-center text-xl">
                        Enter verification code
                    </h1>

                    <p className="text-center">
                        {"We've"} sent a code to{" "}
                        <span className="font-bold text-[#0a9d7f]">test@gmail.com</span>
                    </p>
                </div>

                <form className="flex flex-col gap-4 items-center w-full">
                    <Otp.Root
                        className="py-2"
                    >
                        <Otp.Input />
                        <Otp.Input />
                        <Otp.Input />
                        <Otp.Input />
                        <Otp.Input />
                    </Otp.Root>

                    <p className="text-sm text-center pb-4">
                        {"Didn't"} get a code?{" "}
                        <span className="font-bold text-[#0a9d7f] hover:underline">
                            Click to resend.
                        </span>
                    </p>

                    <div className="w-full flex justify-between gap-3 border-t px-8 py-5 border-[#252828]">
                        <button
                            type="button"
                            className="w-full border rounded-lg border-[#252828] px-6 py-2.5"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="px-6 py-2.5 bg-[#0a9d7f] rounded-lg text-sm w-full"
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export { ExampleOTP };

