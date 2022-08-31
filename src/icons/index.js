/*
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-08-26 23:37:01
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-08-26 23:41:56
 * @FilePath: \vue_3.2\src\icons\index,js
 * @Description: new file
 * 1
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved.
 */
import SvgIcon from '@/components/SvgIcon'

const svgRequired = require.context('./svg', false, /\.svg$/)
svgRequired.keys().forEach((item) => svgRequired(item))

export default (app) => {
  app.component('svg-icon', SvgIcon)
}
