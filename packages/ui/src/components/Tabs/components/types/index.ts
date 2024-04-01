import { TabListState } from "@react-stately/tabs";
import { Node } from "@react-types/shared";
import { ForwardedRef, MutableRefObject, ReactNode } from "react";

type Props = {
  children?: ReactNode | null;
  classNames?: {
    tabList?: string;
    tabContent?: string;
    tab?: string;
    tabPanel?: string;
    cursor?: string;
  };
};

type ValuesType<T = object> = {
  state: TabListState<T>;
  listRef?: MutableRefObject<ForwardedRef<HTMLDivElement>>;
} & Props;

type TabsRootProps = {
  fallback?: ReactNode;
} & Props;

type TabBaseProps = {
  title: ReactNode | null;
  disabled?: boolean;
} & Props;

type ITab<T> = {
  item: Node<T>;
  state: any;
} & HTMLButtonElement &
  Props;

type TabPanelProps = {
  state: TabListState<object>;
} & Props;

type TabHeaderProps = Props;

export type {
  ITab,
  TabBaseProps,
  TabHeaderProps,
  TabPanelProps,
  TabsRootProps,
  ValuesType,
};
