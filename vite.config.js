const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const path = require('path');

module.exports = defineConfig({
  plugins: [react({ jsxRuntime: 'classic' })],
  resolve: {
    alias: [
      { find: 'assets', replacement: path.resolve(__dirname, 'src/assets') },
      {
        find: 'components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      { find: 'WinXP', replacement: path.resolve(__dirname, 'src/WinXP') },
      { find: 'hooks', replacement: path.resolve(__dirname, 'src/hooks') },
    ],
  },
  esbuild: {
    loader: 'jsx',
    jsx: 'automatic',
  },
});
