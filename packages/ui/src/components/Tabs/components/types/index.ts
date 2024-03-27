import { TabListState } from "@react-stately/tabs";
import {
  ForwardedRef,
  MutableRefObject,
  PropsWithChildren,
  ReactNode,
} from "react";
import { Node } from "@react-types/shared";

export type ValuesType<T = object> = {
  state: TabListState<T>;
  listRef?: MutableRefObject<ForwardedRef<HTMLDivElement>>;
  classNames?: {
    cursor: string;
  };
};

interface ITab<T> extends HTMLButtonElement {
  item: Node<T>;
  state: any;
  classNames: {
    cursor: string;
  };
}

interface TabPanelProps {
  state: TabListState<object>;
}

interface TabsRootProps {
  fallback?: ReactNode;
  children?: ReactNode | null;
  classNames?: {
    cursor: string;
  };
}

interface TabBaseProps {
  title: ReactNode | null;
  children?: ReactNode | null;
  classNames?: object;
  disabled?: boolean;
}

export type { TabBaseProps, TabsRootProps, ITab, TabPanelProps };
