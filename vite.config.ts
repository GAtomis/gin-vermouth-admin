/*
 * @Description: vite配置
 * @Author: Gavin
 * @Date: 2022-08-02 12:02:32
 * @LastEditTime: 2024-05-27 15:39:15
 * @LastEditors: GAtomis 850680822@qq.com
 */
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx'//JSX转换插件
// Pre-Bundling optimization 3q anfu

// import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd());
  return {
    base: './', //绝对路径配置根据ngxin
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true,
        },
        scss: {
          additionalData: `
          @use 'sass:math';
          @import "@/styles/global.scss";
          `,
        },
      },
    },
    server: {
      open: true,
      port: env.VITE_SERVER_PORT,
      proxy: {
        [env.VITE_BASE_API]: {
          target: env.VITE_BASE_PROXY,
          rewrite: (path) => path.replace(/^\/api/, ''),
          changeOrigin: true,
        },
      },
    },
    plugins: [
      vue(),//注册vue核心 
      vueJsx(),//注册JSX插件
    ],
  };
});
