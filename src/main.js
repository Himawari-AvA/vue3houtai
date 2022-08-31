/*
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-08-26 16:28:19
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-08-30 16:04:47
 * @FilePath: \vue_3.2\src\main.js
 * @Description: new file
 * 1
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved.
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import SvgIcon from '@/icons'
import 'element-plus/dist/index.css'
import '@/router/permisson'
import * as ELIcons from '@element-plus/icons-vue'
import i18n from '@/i18n'
import filter from './utils/filter'

const app = createApp(App)
for (const iconName in ELIcons) {
  app.component(iconName, ELIcons[iconName])
}
filter(app)
SvgIcon(app)
app.use(store).use(router).use(i18n).mount('#app')
