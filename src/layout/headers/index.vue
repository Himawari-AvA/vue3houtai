<!--
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-08-30 00:17:42
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-08-30 16:50:38
 * @FilePath: \vue_3.2\src\layout\headers\index.vue
 * @Description: new file
 * 1
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved.
-->
<template>
  <div class="navbar">
    <HamBurger></HamBurger>
    <Breadcrumb></Breadcrumb>
    <div class="navbar-right">
      <Driver class="navbar-item"></Driver>
      <ScreenFull class="navbar-item"></ScreenFull>
      <langVue class="navbar-item" />
      <AvatarVue class="navbar-item" />
    </div>
  </div>
</template>

<script setup>
import HamBurger from './components/HamBurger.vue'
import Breadcrumb from './components/BreadCrumb.vue'
import AvatarVue from './components/AvatarVue.vue'
import langVue from './components/LangVue.vue'
import ScreenFull from './components/ScreenFull.vue'
import Driver from './components/driver'
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  .navbar-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ::v-deep .navbar-item {
      display: inline-block;
      margin-left: 18px;
      font-size: 22px;
      color: #5a5e66;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
}
</style>
