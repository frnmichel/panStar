import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.mp4', '**/*.webm'],
  server: {
    // origin: 'https://panasonic.myvtex.com',

    hmr: true,
    proxy: {
      '/arquivos': {
        target: 'https://panasonic.myvtex.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
