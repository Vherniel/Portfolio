import { forwardRef, useRef, useImperativeHandle, HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./button-link.module.scss";
import Link from "next/link";

interface ButtonLinkProps extends Omit<React.ComponentPropsWithRef<typeof Link>, "className"> {
    className?: string;
    label?: string;
    outline?: boolean;
}

export interface ButtonLinkRefHandle {
    props: React.ComponentPropsWithoutRef<typeof Link>;
    getElement: () => HTMLLinkElement | Element | NodeListOf<Element>;
}

export const ButtonLink = forwardRef<ButtonLinkRefHandle, ButtonLinkProps>((props, ref) => {
    const { className, label, outline, ...restProps } = props;
    const elementRef = useRef(null);

    useImperativeHandle(ref, () => ({
        props,
        getElement: (selectors?: string) => {
            const element: HTMLLinkElement = elementRef.current;
            if (!selectors) return element;

            const allElements = element.querySelectorAll(selectors);
            return allElements.length <= 1 ? allElements[0] : allElements;
        },
    }));

    return (
        <Link
            ref={elementRef}
            className={clsx(
                styles.ButtonLink,
                "inline-block text-xs font-bold min-w-[6em] px-4 py-2 rounded-sm shadow-sm border",
                "sm:text-sm",
                "md:text-base md:px-6",
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
        </Link>
    );
});

ButtonLink.displayName = "ButtonLink";
