/*
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-08-29 21:13:15
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-08-30 17:36:16
 * @FilePath: \vue_3.2\src\store\getters.js
 * @Description: new file
 * 1
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved.
 */
export default {
  token: (state) => state.app.token,
  sideType: (state) => state.app.sideType,
  lang: (state) => state.app.lang
}
