import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-router': path.resolve(__dirname, 'node_modules/react-router')
    }
  },
  optimizeDeps: {
    include: ['react-router', 'react-router-dom']
  }
});
