import adapter from '@sveltejs/adapter-static';
import path from 'path';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  kit: {
    adapter: adapter({
      pages: 'dist',
      assets: 'dist',
      fallback: 'index.html',
      precompress: false,
    }),
    paths: {
      base: '',
    },
    prerender: {
      default: true,
    },
  },
  resolve: {
    alias: {
      $lib: path.resolve('src/lib'),
    },
  },
  preprocess: vitePreprocess(),
};
