/*
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-08-30 16:57:18
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-08-30 17:32:01
 * @FilePath: \vue_3.2\src\layout\headers\components\driver\steps.js
 * @Description: new file
 * 1
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved.
 */
export const steps = (i18n) => [
  {
    element: '#guide',
    popover: {
      title: i18n('driver.guideBtn'),
      description: 'Body of the popover',
      position: 'left'
    }
  },
  {
    element: '#hamburger',
    popover: {
      title: i18n('driver.hamburgerBtn'),
      description: 'Body of the popover',
      position: 'bottom'
    }
  },
  {
    element: '#screenFul',
    popover: {
      title: i18n('driver.fullScreen'),
      description: 'Body of the popover',
      position: 'left'
    }
  }
]
