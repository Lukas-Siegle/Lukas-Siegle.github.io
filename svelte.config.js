import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html',  // Add this for proper routing and 404 handling
            strict: true
        }),
        alias: {
            "@/*": "./path/to/lib/*",
        },
        prerender: {
            entries: ['*', '/404'],  // Add /404 to prerender entries
            handleHttpError: 'warn'   // Optional: helps with prerender errors
        },
        paths: {
            base: ''  // For root deployment
        }
    }
};

export default config;