import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});

// The autoCodeSplitting parameter in the RouterPlugin from the @tanstack/router-plugin-vite library is 
// responsible for automatic code splitting when using routes in your application.

// What is Code Splitting?
// Code splitting is an optimization technique that allows splitting an application into smaller 
// chunks and loading them only when needed. This helps:

// Reduce the size of the initial load: Only the code required for the current route is loaded.
// Speed up page loading: Additional chunks of code are loaded asynchronously when navigating to other routes.
// How does autoCodeSplitting work?
// When autoCodeSplitting is enabled, the plugin automatically analyzes the routes in your application and 
// creates separate chunks for each route. This allows loading route-specific code only when the user navigates to it.
