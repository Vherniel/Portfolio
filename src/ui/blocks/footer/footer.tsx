import { Container } from "@portfolio/components/container";
import { Divider } from "@portfolio/components/divider";
import clsx from "clsx";

interface FooterProps extends React.ComponentPropsWithoutRef<"footer"> {}

const year = new Date().getUTCFullYear();

export const Footer = (props: FooterProps) => {
    return (
        <footer className={clsx("pt-16")}>
            <Container>
                <div>Let’s work together</div>
                {/* <div>
                    <Divider />
                </div> */}
                <div>
                    <a
                        href="mailto:hello@vherniellebis.tech"
                        className={clsx(
                            "inline-block font-bold py-4",
                            "text-[7.25vw]",
                            "sm:text-5xl"
                        )}>
                        hello@vherniellebis.tech
                    </a>
                </div>
                <div className={clsx("py-2")}>
                    <small className={clsx("leading-none")}>
                        <span>© {year} Vherniel&nbsp;Lebis.</span>{" "}
                        <span>All&nbsp;rights&nbsp;reserved.</span>
                    </small>
                </div>
            </Container>
        </footer>
    );
};
