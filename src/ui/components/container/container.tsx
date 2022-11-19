import clsx from "clsx";
import styles from "./container.module.scss";

interface ContainerProps
    extends Omit<React.ComponentPropsWithoutRef<"div">, "children" | "className"> {
    children: React.ReactNode;
    className?: string;
}

export const Container = ({ children, className, ...restProps }: ContainerProps) => {
    return (
        <div className={clsx(styles.container, className)} {...restProps}>
            {children}
        </div>
    );
};
