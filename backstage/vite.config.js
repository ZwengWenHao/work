import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  // server: {
  //   host: "0.0.0.0",
  //   port: 8080, // 设置服务启动端口号
  //   open: true, // 设置服务启动时是否自动打开浏览器
  //   cors: true, // 允许跨域

  //   proxy: {
  //     // 此处为抽取的接口 端口后的统一部分
  //     // 例如： http://199.199.9.9:8080/mars/v1    http://199.199.9.9:8080/mars/v2
  //     // [/mars]为统一部分，下面就以 /mars 开启
  //     "/mars": {
  //       target: "http://http://localhost:8080",
  //       // rewrite: (path) => path.replace('/api/', '/'),
  //       changeOrigin: true,
  //     },
  //   },
  // },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
