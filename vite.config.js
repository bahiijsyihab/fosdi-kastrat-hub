import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Menggunakan path relatif agar aset termuat di GitHub Pages, Vercel, & Netlify
  server: {
    port: 5173,
    host: true
  }
});
