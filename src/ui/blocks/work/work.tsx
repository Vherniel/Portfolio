import Link from "next/link";
import clsx from "clsx";
import styles from "./work.module.scss";

interface WorkProps {
    image: string;
    href: string;
    title: string;
}

export const Work = ({ image, href, title }: WorkProps) => {
    return (
        <Link
            href={href}
            style={{
                backgroundImage: `url("${image}")`,
            }}
            className={clsx(
                styles.work,
                "block p-4 mb-4 rounded-lg",
                "lg:p-7 lg:ml-16 lg:mb-7"
            )}>
            <div>
                <h3 className={clsx("font-bold text-neutral-100", "lg:text-3xl")}>{title}</h3>
            </div>
        </Link>
    );
};
