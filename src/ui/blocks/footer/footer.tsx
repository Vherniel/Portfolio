import Link from "next/link";
import { Container } from "@portfolio/components/container";
import { Divider } from "@portfolio/components/divider";
import { SiVercel, SiNextdotjs } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import clsx from "clsx";

interface FooterProps extends React.ComponentPropsWithoutRef<"footer"> {}

const year = new Date().getUTCFullYear();

export const Footer = (props: FooterProps) => {
    return (
        <>
            <section>
                <Container className={clsx("text-center mx-auto")}>
                    <div
                        className={clsx(
                            "border bg-neutral-800 text-neutral-100 px-4 py-8 rounded-xl",
                            "md:py-16",
                            "dark:bg-neutral-100 dark:text-neutral-800"
                        )}>
                        <FaGithub size="3em" className={clsx("mx-auto")} />
                        <p className={clsx("font-bold text-4xl my-8")}>
                            View the repository of this website on GitHub
                        </p>
                        <Link
                            href="https://github.com/Vherniel/portfolio"
                            className={clsx(
                                "font-bold inline-block bg-neutral-100 text-neutral-800 mt-6 px-8 py-4",
                                "dark:text-neutral-100 dark:bg-neutral-800"
                            )}>
                            Open portfolio repo
                        </Link>
                    </div>
                </Container>
            </section>
            <footer className={clsx("pt-16")}>
                <Container className={clsx("flex py-12", "lg:pt-32")}>
                    <div className={clsx("xs:basis-3/12", "lg:basis-2/12")}>
                        <span className={clsx("font-bold mr-1", "lg:text-5xl")}>03</span>
                        <span className={clsx("mr-1", "lg:text-5xl")}>—</span>
                    </div>
                    <div className={clsx("flex-1", "xs:basis-9/12", "lg:basis-10/12")}>
                        <h2 className={clsx("font-bold uppercase", "lg:text-xl")}>
                            Let’s work together
                        </h2>
                        <Divider />
                        <a
                            href="mailto:hello@vherniellebis.tech"
                            className={clsx(
                                "inline-block font-bold py-4",
                                "text-[5vw]",
                                "sm:text-3xl",
                                "md:text-4xl",
                                "lg:mt-8 lg:mb-16 lg:text-6xl"
                            )}>
                            hello@vherniellebis.tech
                        </a>
                        <div
                            className={clsx(
                                "py-2",
                                "md:flex md:items-center",
                                "text-neutral-600",
                                "dark:text-neutral-400"
                            )}>
                            <div className={clsx("mr-auto")}>
                                <small className={clsx("leading-none", "md:text-base")}>
                                    <span>© {year} Vherniel&nbsp;Lebis.</span>{" "}
                                    <span>All&nbsp;rights&nbsp;reserved.</span>
                                </small>
                            </div>
                            <div className={clsx()}>
                                <p>
                                    Built with
                                    <span>
                                        <SiNextdotjs
                                            className={clsx("inline-block mb-1 ml-1")}
                                        />
                                    </span>{" "}
                                    Next.js and Hosted on
                                    <span>
                                        <SiVercel className={clsx("inline-block mb-1 ml-1")} />
                                    </span>
                                    Vercel
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    );
};
