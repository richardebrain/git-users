import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteSvgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'



// https://vitejs.dev/config/
export default defineConfig({

  plugins: [viteSvgr(), react(),tsconfigPaths()],
  resolve: {
    alias: {
      'node-fetch': 'isomorphic-fetch',
    },
  },
build:{
  rollupOptions: {
 
    // rollup external on svg files and absolute paths

    }
  },
  base: './',

})
