import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  // base: '/mcnet/',
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@data': path.resolve(__dirname, './src/data'),
      '@layout': path.resolve(__dirname, './src/layout'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@style-sheets': path.resolve(__dirname, './src/style-sheets'),
      '@util': path.resolve(__dirname, './src/util')
    }
  }
});
