import { TabListState } from "@react-stately/tabs";
import { PropsWithChildren, ReactNode } from "react";
import { Node } from '@react-types/shared'


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

interface TabsRootProps extends PropsWithChildren {
    classNames?: {
        cursor: string;
    };
    className?: string
    fallback?: ReactNode

}

interface TabBaseProps {
    title: ReactNode | null;
    children?: ReactNode | null;
    classNames?: object;
    disabled?: boolean
}


export type { TabBaseProps, TabsRootProps, ITab, TabPanelProps }