import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	// Allows understanding of non-html/css/js files
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			// default options are shown
			pages: 'docs', // directory to output built files to
			assets: 'docs', // directory to output built assets to
			fallback: undefined, // fallback HTML page, if any, for SPA mode; see below
			precompress: false, // whether to precompress assets to .gz and .br files for serving
			strict: true // whether to throw an error when a route is not prerendered
		})
	}
};

export default config;
