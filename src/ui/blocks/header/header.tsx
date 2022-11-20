import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RiGitlabFill } from "react-icons/ri";
import { AiFillBehanceSquare } from "react-icons/ai";
import { Button } from "@portfolio/components/button";
import { Container } from "@portfolio/components/container";
import { Logo } from "@portfolio/components/logo";
import clsx from "clsx";

interface HeaderProps extends React.ComponentPropsWithoutRef<"header"> {
    className?: string;
}

const socialLinks = [
    {
        icon: (
            <FaLinkedinIn
                className={clsx(
                    "text-neutral-800 dark:text-neutral-100 text-base",
                    "md:text-xl"
                )}
            />
        ),
        href: "https://www.linkedin.com/in/vherniel-lebis/",
    },
    {
        icon: (
            <FaGithub
                className={clsx(
                    "text-neutral-800 dark:text-neutral-100 text-base",
                    "md:text-xl"
                )}
            />
        ),
        href: "https://www.linkedin.com/in/vherniel-lebis/",
    },
    {
        icon: (
            <RiGitlabFill
                className={clsx(
                    "text-neutral-800 dark:text-neutral-100 text-base",
                    "md:text-xl"
                )}
            />
        ),
        href: "https://www.linkedin.com/in/vherniel-lebis/",
    },
    {
        icon: (
            <AiFillBehanceSquare
                className={clsx(
                    "text-neutral-800 dark:text-neutral-100 text-base",
                    "md:text-xl"
                )}
            />
        ),
        href: "https://www.behance.net/vherniellebis/",
    },
];

export const Header = ({ className, ...restProps }: HeaderProps) => {
    return (
        <header
            className={clsx(
                className,
                "fixed left-0 w-full top-0 z-10 bg-neutral-100 dark:bg-neutral-800"
            )}
            {...restProps}>
            <div className={clsx("flex items-center p-4", "md:p-12")}>
                <div className={clsx("mr-auto")}>
                    <a href="/">
                        <Logo
                            scale={1.5}
                            className={clsx("fill-neutral-800 dark:fill-neutral-300")}
                        />
                    </a>
                </div>
                <div className={clsx("flex items-center")}>
                    <div className={clsx("md:mr-4")}>
                        <a
                            href="mailto:hello@vherniellebis.tech"
                            className={clsx(
                                "font-bold hover:border-b-2 border-neutral-800 dark:border-neutral-100"
                            )}>
                            Contact
                        </a>
                    </div>
                    <div className={clsx("flex items-center")}>
                        {socialLinks.map(({ icon, href }, index) => (
                            <a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={clsx("ml-2 -mr-1 p-1")}>
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};
