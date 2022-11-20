import clsx from "clsx";
import React from "react";
import styles from "./card.module.scss";

interface CardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const Card = ({ icon, title, description }: CardProps) => {
    return (
        <div className="m-2 mb-4">
            <div
                className={clsx(
                    styles.card,
                    "p-4 border min-h-[16em] bg-neutral-100 border-neutral-200 rounded-lg",
                    "md:flex md:flex-col",
                    "dark:bg-neutral-800 dark:border-neutral-700",
                    "hover:"
                )}>
                <div className={clsx("mb-4")}>{icon}</div>
                <div className={clsx("mt-auto")}>
                    <h4
                        className={clsx(
                            styles.title,
                            "font-bold text-lg mt-4 mb-2",
                            "md:text-2xl",
                            "hover:"
                        )}>
                        {title}
                    </h4>
                    <p className={clsx(styles.description, "hover:")}>{description}</p>
                </div>
            </div>
        </div>
    );
};
