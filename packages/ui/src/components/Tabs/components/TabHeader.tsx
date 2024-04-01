import { ForwardedRef, forwardRef } from "react";
import { TabHeaderProps } from "./types";
import { twMerge } from "tailwind-merge";
import { tabs } from "./styles";

const TabHeader = forwardRef(
  (props: TabHeaderProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { children, className } = props;
    return (
      <div ref={ref} className={twMerge(tabs.slots.tabHeader, className)}>
        {children}
      </div>
    );
  }
);

TabHeader.displayName = "TabHeader";

export { TabHeader };
