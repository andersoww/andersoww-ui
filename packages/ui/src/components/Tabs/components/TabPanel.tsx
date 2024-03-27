import { useTabPanel } from "@react-aria/tabs";
import { ForwardedRef, RefObject, forwardRef } from "react";
import { TabPanelProps } from "./types";



const TabPanel = forwardRef((props: TabPanelProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { state } = props;
    const { tabPanelProps } = useTabPanel({}, state, ref as RefObject<Element>);

    const selectedItem = state.selectedItem;

    const content = selectedItem?.props?.children;

    if (!content) {
        return null;
    }
    return (
        <div {...tabPanelProps} ref={ref} className="py-3 px-2">
            {content}
        </div>
    )
})

TabPanel.displayName = "TabPanel";

export { TabPanel };
