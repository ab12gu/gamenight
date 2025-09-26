// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['**/*.{html,js,ts,svelte}']
  },
  rules: [
    ['text-color', { color: '#71548a' }],
    ['hyperlinks', { color: '#096b6c' }],
    ['bolds', { color: '#1A5270' }],
    ['background', { color: '#bcdeff' }],
    ['text', { color: '#71548a' }],
  ],
})