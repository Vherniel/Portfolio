import { Button } from "@portfolio/components/button";
import { Container } from "@portfolio/components/container";
import clsx from "clsx";
import React from "react";
import { SiTypescript, SiJavascript, SiReact } from "react-icons/si";

const technologies = [
    {
        icon: <SiTypescript className={clsx("text-neutral-800", "sm:text-xl")} />,
    },
    {
        icon: <SiJavascript className={clsx("text-neutral-800", "sm:text-xl")} />,
    },
    {
        icon: <SiReact className={clsx("text-neutral-800", "sm:text-xl")} />,
    },
];

export const Landing = () => {
    return (
        <section>
            <Container>
                <h2 className={clsx("font-bold text-4xl my-2", "sm:text-6xl")}>
                    Vherniel Lebis
                </h2>
                <h3 className={clsx("my-2", "sm:text-xl")}>
                    Software Engineer &&nbsp;UX/UI&nbsp;Designer
                </h3>
                <div className={clsx("flex items-center")}>
                    {technologies.map(({ icon }) => (
                        <div className={clsx("-ml-1 mr-2 p-1")}>{icon}</div>
                    ))}
                </div>
                <div
                    className={clsx(
                        "md:flex md:flex-row-reverse md:items-start",
                        "md:mt-24",
                        "lg:mt-64"
                    )}>
                    <div className={clsx("md:basis-8/12")}>
                        <p
                            className={clsx(
                                "my-2 mt-8 text-base",
                                "sm:text-lg",
                                "md:max-w-screen-xxs md:my-3 md:ml-auto",
                                "lg:max-w-screen-xxs lg:text-2xl"
                            )}>
                            Helping people to solve their unique problems through creative user
                            experiences with quality software development.
                        </p>
                    </div>
                    <div className={clsx("md:basis-4/12")}>
                        <Button
                            label="Send an email"
                            className={clsx(
                                "text-base my-4",
                                "md:text-lg md:px-6 md:py-4",
                                "lg:px-8 py-5"
                            )}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};
