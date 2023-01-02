/** @type {import('tailwindcss').Config} */



const colors = require('tailwindcss/colors');
const typography = require('@tailwindcss/typography');



module.exports = {
    content: [
        './app/**/*.tsx',
        './pages/**/*.tsx',
        './components/**/*.tsx',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            brand: {
                blue: '#6595CE',
                gray: colors.gray['600'],
                mustard: '#F5A113',
                red: '#E43C24',
                turquoise: '#58BABB',
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1.5rem',
            },
        },
        extend: {},
    },
    plugins: [
        typography,
    ],
}
