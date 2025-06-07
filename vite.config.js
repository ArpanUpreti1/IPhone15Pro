import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({

  build: {
    sourcemap: true
  }
})