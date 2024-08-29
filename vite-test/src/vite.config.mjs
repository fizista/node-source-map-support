import {defineConfig} from 'vite'
import commonjs from 'vite-plugin-commonjs'
import {nodePolyfills} from 'vite-plugin-node-polyfills'

export default defineConfig({
    base: '',
    plugins: [
      commonjs(/* options */),
        // nodePolyfills({
            // To add only specific polyfills, add them here. If no option is passed, adds all polyfills
            // include: ['fs', 'path', 'stream'],
            // include: ['path'],
            // To exclude specific polyfills, add them to this list. Note: if include is provided, this has no effect
            // exclude: [
            //     'http', // Excludes the polyfill for `http` and `node:http`.
            // ],
            // globals: {
            //     Buffer: true,
            // },
            // Override the default polyfills for specific modules.
            // overrides: {
                // Since `fs` is not supported in browsers, we can use the `memfs` package to polyfill it.
                // fs: 'memfs',
            // },
            // Whether to polyfill `node:` protocol imports.
            // protocolImports: true,
        // }),
    ],
    build: {
        // commonjsOptions: {transformMixedEsModules: true},
        sourcemap: "inline"
        // lib: {
        //     entry: resolve(__dirname, '../register.js'),
        //     name: 'node-source-map-support',
        //     fileName: 'source-map-support',
        // },
    }
})