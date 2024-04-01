import { ForwardedRef, forwardRef } from "react";
import { TabHeaderProps } from "./types";

const TabHeader = forwardRef(
  (props: TabHeaderProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { children } = props;
    return <div ref={ref}>{children}</div>;
  }
);

TabHeader.displayName = "TabHeader";

export { TabHeader };
