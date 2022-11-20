import Link from "next/link";
import Image from "next/image";
import { Button } from "@portfolio/components/button";
import { Container } from "@portfolio/components/container";
import {
    SiTypescript,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiLinux,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { AiTwotoneMail, AiOutlineFilePdf } from "react-icons/ai";
import { HiPhone } from "react-icons/hi";
import styles from "./_landing.module.scss";
import clsx from "clsx";

const technologies = [
    {
        icon: <SiTypescript className={clsx("text-neutral-800", "sm:text-xl")} />,
    },
    {
        icon: <SiJavascript className={clsx("text-neutral-800", "sm:text-xl")} />,
    },
    {
        icon: <IoLogoNodejs className={clsx("text-neutral-800", "sm:text-xl")} />,
    },
    {
        icon: <SiReact className={clsx("text-neutral-800", "sm:text-xl")} />,
    },
    {
        icon: <SiNextdotjs className={clsx("text-neutral-800", "sm:text-xl")} />,
    },
    {
        icon: <SiTailwindcss className={clsx("text-neutral-800", "sm:text-xl")} />,
    },
    {
        icon: <SiLinux className={clsx("text-neutral-800", "sm:text-xl")} />,
    },
];

export const Landing = () => {
    return (
        <section
            className={clsx(
                styles.landing,
                "pt-20",
                "xxs:",
                "xs:",
                "sm:pt-28",
                "md:min-h-screen md:relative",
                "lg:pt-36",
                "xl:",
                "xxl:",
                "dark:",
                "hover"
            )}>
            <Container
                className={clsx(
                    "",
                    "xxs:",
                    "xs:",
                    "sm:flex",
                    "md:",
                    "lg:",
                    "xl:",
                    "xxl:",
                    "dark:",
                    "hover"
                )}>
                <div
                    className={clsx(
                        "",
                        "xxs:",
                        "xs:",
                        "sm:flex-1",
                        "md:",
                        "lg:",
                        "xl:",
                        "xxl:",
                        "dark:",
                        "hover"
                    )}>
                    <h2
                        className={clsx(
                            "font-bold text-4xl mt-4 mb-2",
                            "sm:text-6xl",
                            "lg:text-7xl"
                        )}>
                        Vherniel Lebis
                    </h2>
                    <h3 className={clsx("my-2", "sm:text-xl", "lg:text-2xl")}>
                        Software Engineer &&nbsp;UX/UI&nbsp;Designer
                    </h3>
                    <div className={clsx("flex items-center my-4")}>
                        {technologies.map(({ icon }, index) => (
                            <div key={index} className={clsx("-ml-1 mr-2 p-1")}>
                                {icon}
                            </div>
                        ))}
                    </div>
                    <div className={clsx("flex items-center")}>
                        <div className={clsx("mr-4")}>
                            <Button label="Send an email" className={clsx("text-base my-6")} />
                        </div>
                        <div>
                            <Link href="/CV.pdf" className={clsx("flex items-center")}>
                                <div className={clsx("mr-2")}>
                                    <AiOutlineFilePdf size="1.5em" />
                                </div>
                                <span>Resume/CV</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className={clsx(
                        "",
                        "xxs:",
                        "xs:",
                        "sm:flex-1 sm:ml-4",
                        "md:",
                        "lg:",
                        "xl:",
                        "xxl:",
                        "dark:",
                        "hover"
                    )}>
                    <Image
                        src="/picture.jpg"
                        width={270}
                        height={480}
                        alt=""
                        className={clsx(
                            "ml-auto",
                            "xxs:",
                            "xs:",
                            "sm:",
                            "md:",
                            "lg:",
                            "xl:",
                            "xxl:",
                            "dark:",
                            "hover"
                        )}
                    />
                </div>
            </Container>
            <Container>
                <div className={clsx("flex border-t pt-8")}>
                    <div className={clsx("mb-8 mr-28")}>
                        <div className={clsx("mb-4")}>
                            <IoLocationSharp size="1.5em" />
                        </div>
                        <div>
                            <p className={clsx("font-bold")}>Location</p>
                            <p>Metro Manila, Philippines</p>
                        </div>
                    </div>
                    <div className={clsx("mb-8 mr-28")}>
                        <div className={clsx("mb-4")}>
                            <AiTwotoneMail size="1.5em" />
                        </div>
                        <div>
                            <p className={clsx("font-bold")}>Email address</p>
                            <p>hello@vherniellebis.tech</p>
                        </div>
                    </div>
                    <div className={clsx("mb-8")}>
                        <div className={clsx("mb-4")}>
                            <HiPhone size="1.5em" />
                        </div>
                        <div>
                            <p className={clsx("font-bold")}>Contact</p>
                            <p>+63 966 990-9400</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
