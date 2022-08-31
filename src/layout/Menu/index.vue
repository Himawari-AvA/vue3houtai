<!--
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-08-29 21:39:52
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-08-30 16:13:41
 * @FilePath: \vue_3.2\src\layout\Menu\index.vue
 * @Description: new file
 * 1
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved.
-->
<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    text-color="#fff"
    router
    unique-opened
    :collapse="!$store.getters.sideType"
  >
    <el-sub-menu
      :index="item.id"
      v-for="(item, index) in menusList"
      :key="item.id"
    >
      <template #title>
        <el-icon>
          <component :is="iconList[index]"></component>
        </el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item
        :index="`/${it.path}`"
        v-for="it in item.children"
        :key="it.id"
        @click="savaPath(it.path)"
      >
        <template #title>
          <el-icon>
            <component :is="icon"></component>
          </el-icon>
          <span>{{ $t(`menus.${it.path}`) }}</span>
        </template>
        <!-- {{ it.authName }} -->
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { menuList } from '@/api/menu'
import { ref } from 'vue'

const iconList = ref(['user', 'setting', 'shop', 'tickets', 'pie-chart'])
const icon = ref('menu')

const menusList = ref([])
const defaultActive = ref(sessionStorage.getItem('path') || '/users')
const initMenuList = async () => {
  menusList.value = await menuList()
}
initMenuList()

const savaPath = (path) => {
  sessionStorage.setItem('path', `/${path}`)
}
</script>

<style scoped></style>
