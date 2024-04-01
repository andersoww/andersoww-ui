import { ForwardedRef, HTMLProps, forwardRef, useId } from "react";
import { twMerge } from "tailwind-merge";
import { tabs } from "./styles";
import { LayoutGroup } from "framer-motion";

interface TabListProps extends HTMLProps<HTMLDivElement> {}

const TabList = forwardRef(
  (props: TabListProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { children, className, ...rest } = props;

    const id = useId();

    return (
      <div className={twMerge(tabs.slots.tabList)} ref={ref} {...rest}>
        <LayoutGroup id={id}>{children}</LayoutGroup>
      </div>
    );
  }
);

export { TabList };
