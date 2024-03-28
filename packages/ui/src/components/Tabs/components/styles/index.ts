import { tv } from "tailwind-variants";

export const tabs = tv({
  slots: {
    tabList: ["border-b w-full border-stone-300 flex"],
    tabContent: ["relative z-10"],
    tabPanel: ["py-3 px-2"],
    tab: [
      "z-0 w-fit flex relative items-center cursor-pointer h-12 outline-none font-medium text-sm p-3",
    ],
    cursor: [
      "absolute",
      "z-0",
      "bottom-0",
      "h-0.5",
      "shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
      "rounded-none",
      "w-full",
      "bg-blue-600",
      "left-0",
      "",
    ],
  },
});
