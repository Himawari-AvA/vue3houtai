/*
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-08-29 22:37:24
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-08-29 22:45:12
 * @FilePath: \vue_3.2\src\utils\auth.js
 * @Description: new file
 * 1
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved.
 */
import { TOKEN_TIME, TOKEN_TIME_VALUE } from './constant'

export const setTokenTime = () => {
  localStorage.setItem(TOKEN_TIME, Date.now())
}
export const getTokenTime = () => {
  return localStorage.getItem(TOKEN_TIME)
}

export const diffTokenTime = () => {
  const currentTime = Date.now()
  const tokenTIme = getTokenTime()
  return currentTime - tokenTIme > TOKEN_TIME_VALUE
}
