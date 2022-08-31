/*
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-08-30 20:59:19
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-08-31 00:25:02
 * @FilePath: \vue_3.2\src\api\users.js
 * @Description: new file
 * 1
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved.
 */
import request from './request'

export const getUser = (params) => {
  return request({
    url: '/users',
    params
  })
}

export const changeUserState = (uid, type) => {
  return request({
    url: `users/${uid}/state/${type}`,
    method: 'PUT'
  })
}

export const addUser = (data) => {
  return request({
    url: 'users',
    method: 'post',
    data
  })
}
export const editUser = (data) => {
  return request({
    url: `users/${data.id}`,
    method: 'put',
    data
  })
}
export const deleteUser = (id) => {
  return request({
    url: `users/${id}`,
    method: 'delete'
  })
}
