import Link from "next/link";
import { RiFlowChart } from "react-icons/ri";
import { TbFrame } from "react-icons/tb";
import { AiOutlineCode } from "react-icons/ai";
import { Container } from "@portfolio/components/container";
import { Card } from "@portfolio/blocks/card";
import { Work } from "@portfolio/blocks/work";
import clsx from "clsx";
import styles from "./_works.module.scss";

export const Works = () => {
    return (
        <>
            <section
                className={clsx(
                    "py-8",
                    "xxs:",
                    "xs:",
                    "sm:",
                    "md:pb-16",
                    "lg:",
                    "xl:",
                    "xxl:",
                    "dark:",
                    "hover"
                )}>
                <div
                    className={clsx(
                        "max-w-screen-xxs text-xl font-bold mx-auto px-4 mb-6",
                        "xxs:",
                        "xs:",
                        "sm:",
                        "md:",
                        "lg:text-4xl lg:leading-snug lg:mb-16",
                        "xl:",
                        "xxl:",
                        "dark:",
                        "hover"
                    )}>
                    <p>
                        I help people by delivering dynamic, user-friendly and effective
                        websites.
                    </p>
                </div>
                <Container>
                    <div
                        className={clsx(
                            "-m-2",
                            "xxs:",
                            "xs:",
                            "sm:",
                            "md:flex",
                            "lg:",
                            "xl:",
                            "xxl:",
                            "dark:",
                            "hover"
                        )}>
                        <div className={clsx("", "md:basis-1/3")}>
                            <Card
                                icon={<RiFlowChart size="3em" />}
                                title="Discovery"
                                description="With my creative process, I ensure that when we start the project, all ideas and requirements are placed in the table which allows us to clearly see theoverview of the project from start to finish."
                            />
                        </div>
                        <div className={clsx("", "md:basis-1/3")}>
                            <Card
                                icon={<TbFrame size="3em" />}
                                title="Prototyping"
                                description="Details from the discovery process must be prototyped first to ensure that the project is in the right direction and eliminates existing misunderstandings from the discover phase."
                            />
                        </div>
                        <div className={clsx("", "md:basis-1/3")}>
                            <Card
                                icon={<AiOutlineCode size="3em" />}
                                title="Development"
                                description="Starts the development process in agile approach where new incoming feature requests and changes can be flexible during feature updates."
                            />
                        </div>
                    </div>
                </Container>
            </section>

            <section className={clsx(styles.work, "px-4", "md:px-12 md:py-32")}>
                <div className={clsx("md:flex")}>
                    <div className={clsx("md:basis-3/12")}>
                        <span className={clsx("font-bold mr-1", "lg:text-5xl")}>01</span>
                        <h2 className={clsx("font-bold lg:text-9xl")}>Work</h2>
                        <p className={clsx("mt-4", "lg:ml-4 lg:text-xl")}>
                            Previous projects that I've worked with.
                        </p>
                    </div>
                    <div className={clsx("md:basis-9/12")}>
                        <Work
                            href="/projects/kwadvisors"
                            image="/kwadvisors.png"
                            title="Keller Williams Advisors"
                        />
                        <Work
                            href="/projects/caconc"
                            image="/caconc.png"
                            title="California Concierge"
                        />
                        <Work
                            href="/projects/craveventures"
                            image="/craveventures.png"
                            title="Crave Ventures"
                        />
                        <Work
                            href="https://www.freecodecamp.org/certification/vherniel/responsive-web-design"
                            target="_blank"
                            image="/freecodecamp.png"
                            title="freeCodeCamp.org"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};
