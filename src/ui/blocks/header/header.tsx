import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RiGitlabFill } from "react-icons/ri";
import { Button } from "@portfolio/components/button";
import { Container } from "@portfolio/components/container";
import { Logo } from "@portfolio/components/logo";
import clsx from "clsx";

interface HeaderProps extends React.ComponentPropsWithoutRef<"header"> {
    className?: string;
}

const socialLinks = [
    {
        icon: <FaLinkedinIn className={clsx("text-neutral-800")} />,
        href: "https://www.linkedin.com/in/vherniel-lebis/",
    },
    {
        icon: <FaGithub className={clsx("text-neutral-800")} />,
        href: "https://www.linkedin.com/in/vherniel-lebis/",
    },
    {
        icon: <RiGitlabFill className={clsx("text-neutral-800")} />,
        href: "https://www.linkedin.com/in/vherniel-lebis/",
    },
];

export const Header = ({ className, ...restProps }: HeaderProps) => {
    return (
        <header className={clsx(className, "py-8 md:py-12")} {...restProps}>
            <Container className={clsx("flex items-center")}>
                <div className={clsx("mr-auto")}>
                    <Link href="/">
                        <Logo
                            scale={1.5}
                            className={clsx("fill-neutral-800 dark:fill-neutral-300")}
                        />
                    </Link>
                </div>
                <div className={clsx("flex items-center")}>
                    <div>
                        <Button label="Contact" outline />
                    </div>
                    <div className={clsx("flex items-center")}>
                        {socialLinks.map(({ icon, href }) => (
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={clsx("ml-2 -mr-1 p-1")}>
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </header>
    );
};
