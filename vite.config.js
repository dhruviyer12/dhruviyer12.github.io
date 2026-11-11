import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The site is served from the root of dhruviyer12.github.io, so base is '/'.
// Images live in /images at the repo root; `npm run build` copies them into dist.
export default defineConfig({
  plugins: [react()],
  base: '/',
  publicDir: false,
});
