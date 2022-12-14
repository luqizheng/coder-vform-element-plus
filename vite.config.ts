import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from "path";
/*import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'*/
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  /*AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),*/


  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'lib')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },

  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/index"),
      name: "coder-vform-element-plus",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        "vue",

        "coder-vform-render",
        "ant-design-vue",
        "coder-member-components-vue3",
        "element-plus",

        "crypto-js", "vue-router",
        "axios"

      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  }
})
