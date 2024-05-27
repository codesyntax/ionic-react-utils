import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log(mode);
  if (mode === 'production') {
     return {
       plugins: [react(), legacy()],
       test: {
         globals: true,
         environment: 'jsdom',
         setupFiles: './src/setupTests.ts',
       },
       build: {
         outDir: './dist-docs',
       },
     };

  }

  if (mode === 'lib') {
    return {
      plugins: [react()],
      // , legacy()],
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
      },
      build: {
        lib: {
          entry: resolve(__dirname, 'lib/index.ts'),
          formats: ['es'],
        },
        rollupOptions: {
          external: ['react', 'react/jsx-runtime'],
        },
        copyPublicDir: false,
        outDir: './dist',
      },
    };
  }

  return {
    plugins: [react(), legacy()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
    },
  };
});
