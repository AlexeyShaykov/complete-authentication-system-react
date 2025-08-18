import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from '@vitejs/plugin-react';

import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
