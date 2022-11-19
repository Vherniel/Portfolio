"use client";

import { Manrope } from "@next/font/google";
import { Header } from "@portfolio/blocks/header";
import { Footer } from "@portfolio/blocks/footer";
import clsx from "clsx";
import "./globals.scss";

const font = Manrope({
    fallback: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
    ],
    subsets: ["latin"],
    variable: "--manrope",
    weight: "variable",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head />
            <body
                className={clsx(
                    "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 font-sans font-medium ",
                    font.variable
                )}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
