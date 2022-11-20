import { forwardRef, useRef, useImperativeHandle } from "react";
import clsx from "clsx";
import styles from "./divider.module.scss";

interface DividerProps
    extends Omit<React.ComponentPropsWithRef<"div">, "className" | "children"> {
    className?: string;
    children?: React.ReactNode;
}

export interface DividerRefHandle {
    props: React.ComponentPropsWithoutRef<"div">;
    getElement: () => HTMLDivElement | Element | NodeListOf<Element>;
}

export const Divider = forwardRef<DividerRefHandle, DividerProps>((props, ref) => {
    const { className, children, ...restProps } = props;
    const elementRef = useRef(null);

    useImperativeHandle(ref, () => ({
        props,
        getElement: (selectors?: string) => {
            const element: HTMLDivElement = elementRef.current;
            if (!selectors) return element;

            const allElements = element.querySelectorAll(selectors);
            return allElements.length <= 1 ? allElements[0] : allElements;
        },
    }));

    return (
        <div
            className={clsx(
                styles.divider,
                "relative my-2",
                "before:border-neutral-500 before:border-t before:border-b"
            )}>
            <div className={clsx(styles.content)}>{children}</div>
        </div>
    );
});

Divider.displayName = "Divider";
