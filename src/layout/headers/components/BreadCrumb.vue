<!--
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-08-30 14:48:42
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-08-30 16:12:19
 * @FilePath: \vue_3.2\src\layout\headers\components\breadcrumb.vue
 * @Description: new file
 * 1
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved.
-->
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
      <span class="no-redirect" v-if="index === breadcrumbList.length - 1">{{
        $t(`menus.${item.name}`)
      }}</span>
      <span class="redirect" v-else @click="handleRedirect(item.path)">{{
        $t(`menus.${item.name}`)
      }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { watch, ref } from 'vue'

const route = useRoute()
const router = useRouter()
const breadcrumbList = ref([])
const initBreadcrumbList = () => {
  breadcrumbList.value = route.matched
  console.log(route.matched)
}
const handleRedirect = (path) => {
  router.push(path)
}
watch(
  route,
  () => {
    initBreadcrumbList()
  },
  { deep: true, immediate: true }
)
console.log(route.path)
</script>

<style scoped>
.no-redirect {
  color: #97a8b3;
  cursur: text;
}
.redirect {
  color: #666;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #304156;
  }
}
</style>
