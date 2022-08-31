<!--
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-08-30 00:23:38
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-08-30 17:25:29
 * @FilePath: \vue_3.2\src\layout\headers\components\HamBurger.vue
 * @Description: new file
 * 1
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved.
-->
<template>
  <div class="hamburger-container" @click="toggleClick" id="hamburger">
    <svg-icon :icon="icon"></svg-icon>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()
const toggleClick = () => {
  store.dispatch('app/change')
}
const icon = computed(() => {
  return store.getters.sideType ? 'hamburger-opened' : 'hamburger-closed'
})
</script>

<style scoped>
.hamburger-container {
  margin-right: 16px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
