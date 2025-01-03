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
                'custom-orange': '#FF9F0D',
                'custom-orange-light': '#FFB84D',
                'custom-orange-dark': '#D77A00', 
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                'great-vibes': ['Great Vibes', 'serif'], 
                
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
