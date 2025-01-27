import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/NeuraForge/', // Base path for assets
  plugins: [react()],   // React plugin
  build: {
    outDir: 'dist',     // Output directory for build
  },
});
