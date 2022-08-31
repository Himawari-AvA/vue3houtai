/*
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-08-30 21:30:19
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-08-30 21:36:28
 * @FilePath: \vue_3.2\src\utils\filter.js
 * @Description: new file
 * 1
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved.
 */
const dayjs = require('dayjs')

const filterTimes = (val, format = 'YYYY-MM-DD') => {
  if (!isNull(val)) {
    val = parseInt(val) * 1000
    return dayjs(val).format(format)
  } else {
    return '--'
  }
}

export const isNull = (date) => {
  if (!date) return true
  if (JSON.stringify(date) === '{}') return true
  if (JSON.stringify(date) === '[]') return true
}

export default (app) => {
  app.config.globalProperties.$filters = {
    filterTimes
  }
}
