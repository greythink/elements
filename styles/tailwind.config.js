/** @type {import('tailwindcss').Config} */



module.exports = {
    content: [
        './app/**/*.tsx',
        './pages/**/*.tsx',
        './components/**/*.tsx',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1.5rem',
            },
        },
        extend: {},
    },
    plugins: [],
}
