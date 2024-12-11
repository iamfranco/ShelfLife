import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
    coverage: {
      exclude: [
        'pwa-assets.config.ts',
        '*.config.ts',
        '.eslintrc.cjs',
        'dist/**'
      ]
    }
  },
})