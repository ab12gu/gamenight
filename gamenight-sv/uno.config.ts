// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['**/*.{html,js,ts,svelte}']
  },
  rules: [
    ['text-color', { color: '#71548a' }],
    ['hyperlinks', { color: '#096b6c' }],
    ['background', { color: '#bcdeff' }],
    ['text', { color: '#71548a' }],
    ['b', { color: '#1A5270' }],
    ['strong', { color: '#1A5270' }]
  ]
})