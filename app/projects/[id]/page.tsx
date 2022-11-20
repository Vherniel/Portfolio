"use client";

import { Container } from "@portfolio/components/container";
import { ImNewTab } from "react-icons/im";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import { usePathname } from "next/navigation";
import useSWR from "swr";

export default function Page() {
    const pathname = usePathname();

    const fetcher = () => fetch("/api/v1/projects").then((res) => res.json());
    const { data, error } = useSWR("/api/user", fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    const response = data.filter((response: any) => pathname.includes(response.id))[0];

    return (
        <main>
            <section
                className={clsx(
                    styles.header,
                    "",
                    "xxs:",
                    "xs:",
                    "sm:",
                    "md:min-h-screen",
                    "lg:",
                    "xl:",
                    "xxl:",
                    "dark:",
                    "hover"
                )}>
                <Container>
                    <div className={clsx("mt-16 mb-8", "md:mt-36 mb-16")}>
                        <div
                            className={clsx(
                                "mb-4",
                                "md:flex md:items-center md:mb-8",
                                "md:mb-12"
                            )}>
                            <div className={clsx("flex-1")}>
                                <h2
                                    className={clsx(
                                        "font-bold text-2xl mb-4",
                                        "md:text-4xl",
                                        "lg:text-6xl"
                                    )}>
                                    {response.name}
                                </h2>
                                <p
                                    className={clsx(
                                        "font-bold text-lg",
                                        "md:text-xl",
                                        "lg:text-2xl"
                                    )}>
                                    Role: {response.role}
                                </p>
                            </div>
                            <div>
                                <Link
                                    href={response.href}
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    className={clsx(
                                        "border p-4 shadow-sm rounded-sm",
                                        "border-neutral-200",
                                        "dark:border-neutral-700",
                                        "hover:bg-neutral-800 hover:text-neutral-100",
                                        "dark:hover:bg-neutral-100 dark:hover:text-neutral-800"
                                    )}>
                                    <span>Visit website</span>
                                    <span>
                                        <ImNewTab className={clsx("ml-2 mb-1 inline-block")} />
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <Image
                            src={response.image}
                            width={1920}
                            height={1080}
                            alt=""
                            className={clsx("rounded-xl shadow-lg")}
                        />
                    </div>
                </Container>
            </section>
        </main>
    );
}
