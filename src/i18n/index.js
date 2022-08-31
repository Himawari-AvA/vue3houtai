/*
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-08-30 15:57:41
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-08-30 16:09:22
 * @FilePath: \vue_3.2\src\i18n\index.js
 * @Description: new file
 * 1
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved.
 */
import { createI18n } from 'vue-i18n'
import EN from './en'
import ZH from './zh'

const message = {
  en: {
    ...EN
  },
  zh: {
    ...ZH
  }
}
const getCurrentLanguage = () => {
  const UAlang = navigator.language
  const langCode = UAlang.indexOf('zh') !== -1 ? 'zh' : 'en'
  localStorage.setItem('lang', langCode)
  return langCode
  //   return 'en'
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getCurrentLanguage() || 'zh',
  messages: message
})

export default i18n
