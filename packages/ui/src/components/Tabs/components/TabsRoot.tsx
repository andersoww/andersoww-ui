import { ForwardedRef, LegacyRef, forwardRef } from "react";
import { TabsRootProps } from "./types";
import { Tab } from "./Tab";
import { TabPanel } from "./TabPanel";
import { ClientOnly } from "../../ClientOnly";
import { useTabs } from "./hooks/useTabs";

const TabsRoot = forwardRef(
  (props: TabsRootProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { state, tabListProps, values } = useTabs(props, ref);

    const TabsProps = {
      state,
      listRef: values.listRef,
      classNames: values.classNames,
    };

    const { fallback } = props;

    const tabs = [...(state.collection as any)].map((item) => (
      <Tab key={item.key} item={item} {...TabsProps} {...item.props} />
    ));

    return (
      <div className="relative flex w-full flex-auto flex-col overflow-hidden h-fit mt-2">
        <div data-slot="base" className="inline-flex w-full">
          <div
            className="border-b w-full border-stone-300 flex"
            ref={values.listRef as LegacyRef<HTMLDivElement>}
            {...tabListProps}
          >
            {tabs}
          </div>
        </div>
        <ClientOnly fallback={fallback}>
          <TabPanel key={state.selectedItem?.key} state={state} />
        </ClientOnly>
      </div>
    );
  }
);

TabsRoot.displayName = "TabRoot";

export { TabsRoot };
