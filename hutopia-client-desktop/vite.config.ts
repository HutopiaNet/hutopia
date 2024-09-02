import { AliasOptions, defineConfig } from "vite";
import { internalIpV4 } from "internal-ip";

import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'

// @ts-expect-error process is a nodejs global
const mobile = !!/android|ios/.exec(process.env.TAURI_ENV_PLATFORM);

const file_prefix: string = 'file://';
const assets_prefix: string = '/src/assets/';
const components_prefix: string = '/src/components';
const views_prefix: string = '/src/views';

//console.log("META_DIR: " + Bun.fileURLToPath('file://' + import.meta.dir + '/src/assets'));
console.log(Bun.fileURLToPath(file_prefix + import.meta.dir + components_prefix));

function retrieveAliases(): AliasOptions {
  return [
    {
      find: '@',
      replacement: Bun.fileURLToPath(file_prefix + import.meta.dir + '/src/')
    },
    {
      find: '@assets',
      replacement: Bun.fileURLToPath(file_prefix + import.meta.dir + assets_prefix)
    },
    {
      find: '@fonts',
      replacement: Bun.fileURLToPath(file_prefix + import.meta.dir + assets_prefix + 'fonts')
    },
    {
      find: '@icons',
      replacement: Bun.fileURLToPath(file_prefix + import.meta.dir + assets_prefix + 'icons')
    },
    {
      find: '@images',
      replacement: Bun.fileURLToPath(file_prefix + import.meta.dir + assets_prefix + 'images')
    },
    {
      find: '@styles',
      replacement: Bun.fileURLToPath(file_prefix + import.meta.dir + assets_prefix + 'styles')
    },
    {
      find: '@components',
      replacement: Bun.fileURLToPath(file_prefix + import.meta.dir + components_prefix)
    },
    {
      find: '@views',
      replacement: Bun.fileURLToPath(file_prefix + import.meta.dir + views_prefix)
    }
  ]
}

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: retrieveAliases()
  },

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: mobile ? "0.0.0.0" : false,
    hmr: mobile
      ? {
          protocol: "ws",
          host: await internalIpV4(),
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
  // to make use of `TAURI_DEBUG` and other env variables
  // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
  envPrefix: ['VITE_', 'TAURI_'],
  build: {
    // Tauri supports es2021
    target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
    // don't minify for debug builds
    //minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
    commonjsOptions: {
      esmExternals: true,
    },
  }
}));
