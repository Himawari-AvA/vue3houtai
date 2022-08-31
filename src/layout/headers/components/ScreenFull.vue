<!--
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-08-30 16:31:01
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-08-30 17:27:21
 * @FilePath: \vue_3.2\src\layout\headers\components\ScreenFull.vue
 * @Description: new file
 * 1
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved.
-->
<template>
  <div @click="handleFullScreen" id="screenFul">
    <svg-icon :icon="icon ? 'exit-fullscreen' : 'fullscreen'"></svg-icon>
  </div>
</template>

<script setup>
import screenfull from 'screenfull'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const icon = ref(screenfull.isFullscreen)
const handleFullScreen = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}
const changeIcon = () => {
  icon.value = screenfull.isFullscreen
}

onMounted(() => {
  screenfull.on('change', changeIcon)
})
onBeforeUnmount(() => {
  screenfull.off('change')
})
</script>

<style scoped></style>
