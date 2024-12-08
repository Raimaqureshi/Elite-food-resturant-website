"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            screens: {
                sm: '480px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
              }
        },
    },
    plugins: [],
};
