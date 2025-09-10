import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // No alias needed for react-router
  // No need to optimize 'react-router'
  optimizeDeps: {
    include: ['react-router-dom'] // only this is needed
  }
});
