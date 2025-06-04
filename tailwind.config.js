/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)'],
            },
            colors: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                accent: 'var(--accent)',
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            backgroundColor: {
                glass: 'var(--glass-bg)',
            },
            borderColor: {
                glass: 'var(--glass-border)',
            },
        },
    },
    plugins: [],
}; 