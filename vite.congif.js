import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // keep your own source maps
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress broken sourcemap warning from react-table
        if (
          warning.code === 'SOURCEMAP_ERROR' &&
          warning.message.includes('react-table')
        ) {
          return;
        }
        warn(warning);
      }
    }
  }
});
