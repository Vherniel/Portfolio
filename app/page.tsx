"use client";

import { About } from "./_about";
import { Landing } from "./_landing";
import { Works } from "./_works";

export default function Home() {
    return (
        <main>
            <Landing />
            <Works />
            <About />
        </main>
    );
}
