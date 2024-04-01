import { TabHeader } from "./TabHeader";
import { TabsRoot } from "./TabsRoot";
import { TabBase } from "./base/TabBase";

const Tabs = Object.assign(TabsRoot, {
  Root: TabsRoot,
  Header: TabHeader,
  Tab: TabBase,
});

export default Tabs;
