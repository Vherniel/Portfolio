import { Button } from "@portfolio/components/button";
import { Container } from "@portfolio/components/container";
import { Divider } from "@portfolio/components/divider";
import clsx from "clsx";
import styles from "./_about.module.scss";

export const About = () => {
    return (
        <section className={clsx()}>
            <Container className={clsx("flex py-12", "lg:py-32")}>
                <div className={clsx("xs:basis-3/12", "lg:basis-2/12")}>
                    <span className={clsx("font-bold mr-1", "lg:text-5xl")}>02</span>
                    <span className={clsx("mr-1", "lg:text-5xl")}>—</span>
                </div>
                <div className={clsx("flex-1", "xs:basis-9/12", "lg:basis-10/12")}>
                    <h2 className={clsx("font-bold uppercase", "lg:text-xl")}>About</h2>
                    <Divider />
                    <p
                        className={clsx(
                            "font-bold text-2xl my-4",
                            "lg:text-5xl lg:leading-snug lg:my-12"
                        )}>
                        I love helping people to solve their unique problems through creative
                        user experiences and quality software development.
                    </p>
                    <div className={clsx("lg:flex")}>
                        <div className={clsx("lg:basis-4/12")}>
                            <h3
                                className={clsx(
                                    "font-bold mb-4",
                                    "lg:text-xl lg:leading-normal"
                                )}>
                                Delivering creative web experiences through process, design and
                                development.
                            </h3>
                        </div>
                        <div className={clsx("lg:ml-5 lg:basis-8/12")}>
                            <p
                                className={clsx(
                                    "mb-4 text-neutral-600 dark:text-neutral-400",
                                    "lg:mb-5 lg:text-xl lg:leading-normal"
                                )}>
                                With years of experience in website design and development, I
                                solve real world problems and help clients achieve their goals.
                            </p>
                            <p
                                className={clsx(
                                    "mb-4 text-neutral-600 dark:text-neutral-400",
                                    "lg:mb-5 lg:text-xl lg:leading-normal"
                                )}>
                                I have been solving problems collaboratively with designers and
                                developers with my structured process. Allowing all of us to
                                work flawlessly.
                            </p>
                            <p
                                className={clsx(
                                    "mb-4 text-neutral-600 dark:text-neutral-400",
                                    "lg:mb-5 lg:text-xl lg:leading-normal"
                                )}>
                                My work process utilizes a structure on how to move solutions
                                forward. Making deliverables as clear, concise and accurate as
                                possible. Fulfilling the agreed work and avoid delivering wrong
                                outputs. Thus, reducing wasted time, energy and the most
                                important of all — money.
                            </p>
                            <Button label="Work with me" className={clsx("lg:mt-6")} />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
