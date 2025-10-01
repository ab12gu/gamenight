// uno.config.ts
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
    theme: {
        colors: {
            "blue-grey": "#1A5270", // class="text-very-cool"
        },
    },
    rules: [
        ['text-color', { color: '#71548a' }],
        ['hyperlinks', { color: '#096b6c' }],
        ['background', { color: '#bcdeff' }],
        ['text', { color: '#71548a' }],
        ['h1',  { color: 'blue-grey' }],
        ['h2',  { color: 'blue-grey' }],
    ],
    preflights: [
        {
        getCSS: () => `
            h1, h2, h3, h4, h5, h6{
            }
            body {
            color: #71548a;
            background-color: #bcdeff;
            },
        `,
        },
    ],
})