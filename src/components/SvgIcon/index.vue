<!--
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-08-26 22:29:58
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-08-26 22:38:29
 * @FilePath: \vue_3.2\src\components\SvgIcon\index.vue
 * @Description: new file
 * 1
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved.
-->
<template>
  <svg class="svg-icon" aria-hidden="'true'">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
  icon: {
    type: String,
    required: true
  }
})

const iconName = computed(() => {
  return `#icon-${props.icon}`
})
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
