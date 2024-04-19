/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: { ...colors.teal },
                gray: { ...colors.zinc },
            },
        },
    },
};