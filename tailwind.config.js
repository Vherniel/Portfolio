/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            ["xxs"]: "20em",    // @media (min-width: 320px)
            xs: "30em",         // @media (min-width: 480px)
            sm: "40em",         // @media (min-width: 640px)
            md: "48em",         // @media (min-width: 768px)
            lg: "64em",         // @media (min-width: 1024px)
            xl: "80em",         // @media (min-width: 1280px)
            ["xxl"]: "96em",    // @media (min-width: 1536px)
        },
        extend: {},
    },
    plugins: [],
};
