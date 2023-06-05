// @ts-ignore
import { defineConfig } from 'vite'
// @ts-ignore
import { svelte } from '@sveltejs/vite-plugin-svelte'
// @ts-ignore
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), cssInjectedByJsPlugin()],
})
