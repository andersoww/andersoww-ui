"use client";

import { useTab } from "@react-aria/tabs";
import clsx from "clsx";
import { LazyMotion, domMax, m } from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { ITab } from "./types";

const Tab = (props: ITab<object>) => {
  const { item, state, classNames, disabled } = props;
  const { key, rendered } = item;

  const ref = useRef(null);

  const { tabProps, isSelected } = useTab(
    { key, isDisabled: disabled },
    state,
    ref
  );

  return (
    <button
      className={twMerge(
        clsx(
          "z-0 w-fit flex relative items-center cursor-pointer h-12 outline-none font-medium text-sm py-3 ml-8 first:m-0",
          {
            "opacity-40 cursor-not-allowed": disabled,
            "text-blue-600": isSelected,
          }
        )
      )}
      data-slot="tab"
      ref={ref}
      disabled={disabled}
      {...tabProps}
    >
      {isSelected ? (
        <LazyMotion features={domMax}>
          <m.span
            data-slot="cursor"
            className={twMerge(
              "absolute z-0 h-0.5 bottom-0 shadow-[0_1px_0px_0_rgba(0,0,0,0.05)] rounded-none w-full bg-blue-600",
              classNames.cursor
            )}
            layoutDependency={false}
            layoutId="cursor"
            transition={{
              type: "spring",
              bounce: 0.15,
              duration: 0.5,
            }}
          />
        </LazyMotion>
      ) : null}

      <div data-slot="tabContent" className="relative z-10">
        {rendered}
      </div>
    </button>
  );
};

export { Tab };
