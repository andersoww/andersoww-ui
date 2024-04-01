import { ForwardedRef, LegacyRef, forwardRef } from "react";
import { ClientOnly } from "../../ClientOnly";
import { Tab } from "./Tab";
import { TabList } from "./TabList";
import { TabPanel } from "./TabPanel";
import { useTabs } from "./hooks/useTabs";
import { TabsRootProps } from "./types";

const TabsRoot = forwardRef(
  (props: TabsRootProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { fallback } = props;

    const { state, tabListProps, values, header } = useTabs(props, ref);

    const TabsProps = {
      state,
      listRef: values.listRef,
      classNames: values.classNames,
    };

    const tabs = [...(state.collection as any)].map((item) => (
      <Tab key={item.key} item={item} {...TabsProps} {...item.props} />
    ));

    return (
      <div className="relative flex w-full flex-auto flex-col overflow-hidden h-fit mt-2">
        <div data-slot="base" className="inline-flex w-full justify-center">
          <TabList
            ref={values.listRef as LegacyRef<HTMLDivElement>}
            {...tabListProps}
          >
            {tabs}
          </TabList>
        </div>

        {header}

        <ClientOnly fallback={fallback}>
          <TabPanel key={state.selectedItem?.key} state={state} />
        </ClientOnly>
      </div>
    );
  }
);

TabsRoot.displayName = "TabRoot";

export { TabsRoot };
