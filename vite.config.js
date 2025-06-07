import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [tailwindcss(), sentryVitePlugin({
    org: "jsm-6p",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})