import { Item as BaseItem } from "@react-stately/collections";
import { TabBaseProps } from "../types";

const TabBase = BaseItem as (props: TabBaseProps) => JSX.Element;

export { TabBase };

