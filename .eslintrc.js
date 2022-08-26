/*
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-08-26 16:28:19
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-08-26 16:37:30
 * @FilePath: \vue_3.2\.eslintrc.js
 * @Description:
 *
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved.
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: 0,
    'space-before-function-paren': 0
  }
}
