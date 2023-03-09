/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                blue: "hsl(211, 100%, 50%)",
                darkBlue300: "hsl(224, 40%, 20%)",
                darkBlue500: "hsl(222, 40%, 13%)",
                grey: "hsl(224, 11%, 60%)",
            },
            fontFamily: {
                space: ["Space Mono", "monospace"],
            },
        },
    },
    plugins: [],
};
