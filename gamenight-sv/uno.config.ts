// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['**/*.{html,js,ts,svelte}']
  },
  rules: [
    ['text-color', { color: '#71548a' }],
  ],
})