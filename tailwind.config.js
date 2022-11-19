/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            "xxs": "20em",  // @media (min-width: 320px)
            xs: "30em",     // @media (min-width: 480px)
            sm: "40em",     // @media (min-width: 640px)
            md: "48em",     // @media (min-width: 768px)
            lg: "64em",     // @media (min-width: 1024px)
            xl: "80em",     // @media (min-width: 1280px)
            "xxl": "96em",  // @media (min-width: 1536px)
        },
        extend: {
            fontFamily: {
                sans: ['var(--manrope)']
            },
            spacing: {
                "xxs": "20rem",     // 320px
                xs: "30rem",        // 480px
                sm: "40rem",        // 640px
                md: "48rem",        // 768px
                lg: "64rem",        // 1024px
                xl: "80rem",        // 1280px
                "xxl": "96rem",     // 1536px
            },
            zIndex: {
                "-5": "-5",
                "-4": "-4",
                "-3": "-3",
                "-2": "-2",
                "-1": "-1",
                // default values are 0, 10-50
                60: '60',
                70: '70',
                80: '80',
                90: '90',
                100: '100',
                200: '200',
                300: '300',
                400: '400',
                500: '500',
                600: '600',
                700: '700',
                800: '800',
                900: '900',
                999: '999',
            }
        },
    },
    plugins: [],
};
