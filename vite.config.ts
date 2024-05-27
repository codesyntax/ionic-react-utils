import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

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
      plugins: [react(), libInjectCss(), dts({ include: ['lib'] })],
      // , legacy()],
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
      },
      build: {
        lib: {
          entry: resolve(__dirname, 'lib/main.ts'),
          formats: ['es'],
        },
        rollupOptions: {
          external: ['react', 'react/jsx-runtime'],
          input: Object.fromEntries(
            // https://rollupjs.org/configuration-options/#input
            glob.sync('lib/**/*.{ts,tsx}').map((file) => [
              // 1. The name of the entry point
              // lib/nested/foo.js becomes nested/foo
              relative(
                'lib',
                file.slice(0, file.length - extname(file).length),
              ),
              // 2. The absolute path to the entry file
              // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
              fileURLToPath(new URL(file, import.meta.url)),
            ]),
          ),
          output: {
            assetFileNames: 'assets/[name][extname]',
            entryFileNames: '[name].js',
          },
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
