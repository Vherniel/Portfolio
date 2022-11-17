import { Manrope } from "@next/font/google";
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
            <body className={clsx(font.variable)}>{children}</body>
        </html>
    );
}
