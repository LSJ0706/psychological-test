import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@commons', replacement: '/src/components/commons' },
      { find: '@features', replacement: '/src/components/features' },
      { find: '@layouts', replacement: '/src/components/layouts' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@hooks', replacement: '/src/libs/hooks' },
      { find: '@apis', replacement: '/src/libs/apis' },
      { find: '@utils', replacement: '/src/libs/utils' },
      { find: '@store', replacement: '/src/store' }
    ]
  }
});
