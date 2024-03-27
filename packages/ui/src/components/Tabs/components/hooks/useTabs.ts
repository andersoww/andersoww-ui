import { useTabList } from "@react-aria/tabs";
import { TabListProps, useTabListState } from "@react-stately/tabs";
import { CollectionChildren } from "@react-types/shared";
import { ForwardedRef, RefObject, useMemo, useRef } from "react";
import { TabsRootProps, ValuesType } from "../types";

export function useTabs(
  props: TabsRootProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { classNames, children, ...rest } = props;

  const domRef = useRef(ref);

  const state = useTabListState({
    children: children as CollectionChildren<object>,
    ...rest,
  });

  const { tabListProps } = useTabList(
    props as TabListProps<object>,
    state,
    domRef as RefObject<HTMLDivElement>
  );

  const values = useMemo<ValuesType>(
    () => ({
      state,
      listRef: domRef,
      classNames: classNames || { cursor: "" },
    }),
    [state, classNames]
  );

  return {
    state,
    tabListProps,
    values,
  };
}
