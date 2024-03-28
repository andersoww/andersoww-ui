import clsx from "clsx";
import { useTab } from "@react-aria/tabs";
import { LazyMotion, domMax, m } from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { tabs } from "./styles";
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
        tabs.slots.tab,
        clsx({
          "opacity-40 cursor-not-allowed": disabled,
          "text-blue-600": isSelected,
        })
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
            className={twMerge(tabs.slots.cursor, classNames?.cursor)}
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

      <div data-slot="tabContent" className={twMerge(tabs.slots.tabContent)}>
        {rendered}
      </div>
    </button>
  );
};

export { Tab };
