import { forwardRef, useRef, useImperativeHandle, HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./button.module.scss";

interface ButtonProps extends Omit<React.ComponentPropsWithRef<"button">, "className"> {
    className?: string;
    label?: string;
    outline?: boolean;
}

export interface ButtonRefHandle {
    props: React.ComponentPropsWithoutRef<"button">;
    getElement: () => HTMLButtonElement | Element | NodeListOf<Element>;
}

export const Button = forwardRef<ButtonRefHandle, ButtonProps>((props, ref) => {
    const { className, label, outline, ...restProps } = props;
    const elementRef = useRef(null);

    useImperativeHandle(ref, () => ({
        props,
        getElement: (selectors?: string) => {
            const element: HTMLButtonElement = elementRef.current;
            if (!selectors) return element;

            const allElements = element.querySelectorAll(selectors);
            return allElements.length <= 1 ? allElements[0] : allElements;
        },
    }));

    return (
        <button
            ref={elementRef}
            className={clsx(
                styles.button,
                "text-xs font-bold min-w-[6em] px-4 py-2 rounded-sm shadow-md border",
                outline
                    ? clsx(
                          "border-neutral-300 text-neutral-600 bg-none",
                          "hover:border-neutral-800 hover:text-neutral-800",
                          "dark:border-neutral-100 dark:text-neutral-100",
                          "transition-all hover:transition:all"
                      )
                    : clsx(
                          "bg-neutral-800 text-neutral-100",
                          "border-neutral-800 text-neutral-100",
                          "dark:bg-neutral-100 dark:text-neutral-800",
                          "dark:border-neutral-100 dark:text-neutral-800"
                      ),
                className
            )}
            {...restProps}>
            {label}
        </button>
    );
});
