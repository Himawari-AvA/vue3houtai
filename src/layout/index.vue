<!--
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-08-29 21:24:24
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-08-30 01:13:24
 * @FilePath: \vue_3.2\src\layout\index.vue
 * @Description: new file
 * 1
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved.
-->
<template>
  <div class="common-layout">
    <el-container class="app-wrapper">
      <el-aside :width="asideWidth" class="sidebar-container">
        <Menu></Menu>
      </el-aside>
      <el-container
        class="container"
        :class="{ hidderContainer: !$store.getters.sideType }"
      >
        <el-header><Headers /></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Menu from './Menu'
import Headers from './headers'
// import variables from '@/styles/variables.scss'
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const asideWidth = computed(() => {
  return store.getters.sideType ? '210px' : '67px'
})
</script>

<style lang="scss" scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  &.hidderContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}
::v-deep .el-header {
  padding: 0;
}
</style>
