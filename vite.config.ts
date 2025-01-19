import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/NecoArcZone/',
  optimizeDeps: {
    include: ['lucide-react','react', 'react-dom'],
  },
  server: {
    cors: true,
  }
});
