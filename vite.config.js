import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Monali-Traders-React-/'  // Match this with your repo name exactly!
});
