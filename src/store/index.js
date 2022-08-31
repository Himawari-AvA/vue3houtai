/*
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-08-26 16:28:19
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-08-29 21:14:15
 * @FilePath: \vue_3.2\src\store\index.js
 * @Description: new file
 * 1
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved.
 */
import { createStore } from 'vuex'
import app from './modules/app'
import getters from './getters'
export default createStore({
  modules: { app },
  getters
})
