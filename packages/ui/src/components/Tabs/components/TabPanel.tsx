import { useTabPanel } from "@react-aria/tabs";
import { ForwardedRef, RefObject, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { tabs } from "./styles";
import { TabPanelProps } from "./types";

const TabPanel = forwardRef(
  (props: TabPanelProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { state, classNames } = props;
    const { tabPanelProps } = useTabPanel({}, state, ref as RefObject<Element>);

    const selectedItem = state.selectedItem;

    const content = selectedItem?.props?.children;

    if (!content) {
      return null;
    }
    return (
      <div
        {...tabPanelProps}
        ref={ref}
        className={twMerge(tabs.slots.tabPanel, classNames?.tabPanel)}
      >
        {content}
      </div>
    );
  }
);

TabPanel.displayName = "TabPanel";

export { TabPanel };
