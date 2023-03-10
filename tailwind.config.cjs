/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                blue: "hsl(211, 100%, 50%)",
                darkBlue300: "hsl(224, 40%, 20%)",
                darkBlue500: "hsl(222, 40%, 13%)",
                lightBlue50: "hsl(222, 100%, 98%)",
                lightBlue500: "hsl(215, 33%, 45%)",
                grey: "hsl(224, 11%, 60%)",
            },
            fontFamily: {
                space: ["Space Mono", "monospace"],
            },
        },
    },
    plugins: [],
};
