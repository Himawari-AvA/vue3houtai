<!--
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-08-30 15:30:27
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-08-30 15:55:34
 * @FilePath: \vue_3.2\src\layout\headers\components\AvatarVue.vue
 * @Description: new file
 * 1
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved.
-->
<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="40" :src="squareUrl"></el-avatar>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const squareUrl = ref(
  'https://img1.baidu.com/it/u=1316190458,126320582&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1661965200&t=302ec740978216706cdc90f4af87d022'
)

const logout = () => {
  store.dispatch('app/logout')
}
</script>

<style lang="scss" scoped>
::v-deep .el-dropdown-menu__item {
  white-space: nowrap;
}
</style>
