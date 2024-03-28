import { TabListState } from "@react-stately/tabs";
import { Node } from "@react-types/shared";
import { ForwardedRef, MutableRefObject, ReactNode } from "react";

export type ValuesType<T = object> = {
  state: TabListState<T>;
  listRef?: MutableRefObject<ForwardedRef<HTMLDivElement>>;
  classNames?: {
    tabList?: string;
    tabContent?: string;
    tab?: string;
    tabPanel?: string;
    cursor?: string;
  };
};

interface ITab<T> extends HTMLButtonElement {
  item: Node<T>;
  state: any;
  classNames?: {
    tabList?: string;
    tabContent?: string;
    tab?: string;
    tabPanel?: string;
    cursor?: string;
  };
}

interface TabPanelProps {
  state: TabListState<object>;
  classNames?: {
    tabList?: string;
    tabContent?: string;
    tab?: string;
    tabPanel?: string;
    cursor?: string;
  };
}

interface TabsRootProps {
  fallback?: ReactNode;
  children?: ReactNode | null;
  classNames?: {
    tabList?: string;
    tabContent?: string;
    tab?: string;
    tabPanel?: string;
    cursor?: string;
  };
}

interface TabBaseProps {
  title: ReactNode | null;
  children?: ReactNode | null;
  classNames?: {
    tabList?: string;
    tabContent?: string;
    tab?: string;
    tabPanel?: string;
    cursor?: string;
  };
  disabled?: boolean;
}

export type { ITab, TabBaseProps, TabPanelProps, TabsRootProps };
