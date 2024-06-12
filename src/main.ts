/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-05-01 00:48:47
 * @LastEditTime: 2024-05-23 14:58:52
 * @LastEditors: GAtomis 850680822@qq.com
 */
import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';
import router, { setupRouter } from './router'
import { registerIconComponents } from '@/components/Iconfont/Iconfont'
import Antd from 'ant-design-vue'
import pinia from '@/store/pinia/index'

const app = createApp(App)
app.use(Antd)

app.use(registerIconComponents)


setupRouter(app)

app.use(pinia)


router.isReady().then(() => app.mount('#app'))


