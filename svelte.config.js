import adapter from '@sveltejs/adapter-static'; 
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	prerender: { 
		enabled: false, 
		default: true
	},
	trailingSlash: 'always',
  
	kit: {
	  adapter: adapter({ pages: "dist", fallback: "index.html" })
	}
};

export default config;
