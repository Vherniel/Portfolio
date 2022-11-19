import clsx from "clsx";
import styles from "./logo.module.scss";

interface LogoProps
    extends Omit<React.ComponentPropsWithRef<"svg">, "className" | "scale" | "fill"> {
    className?: string;
    scale?: number;
    fill?: string;
}

export const Logo = (props: LogoProps) => {
    const { className, scale, fill, ...restProps } = props;

    const classes = clsx(className, styles.logo);

    return (
        <svg
            width={scale * (3518 / 100)} // scale of 16
            height={scale * (1600 / 100)} // scale of 16
            viewBox="0 0 3518 1600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classes}
            {...restProps}>
            <path
                d="M1565.32 0L1130.74 614.917L696.16 0H0L1130.74 1600L1837.51 599.987V1600H2291.7H3518L3164.64 1099.99H2402.88V0H1565.32Z"
                fill={fill}
            />
        </svg>
    );
};
