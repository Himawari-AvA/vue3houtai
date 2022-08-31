/*
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-08-30 17:35:08
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-08-30 17:48:44
 * @FilePath: \vue_3.2\src\i18n\watchlang.js
 * @Description: new file
 * 1
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved.
 */
import { watch } from 'vue'
import store from '@/store'

export const watchLang = (...cbs) => {
  watch(
    () => store.getters.lang,
    () => {
      cbs.forEach((cb) => cb(store.getters.lang))
    },
    { deep: true }
  )
}
