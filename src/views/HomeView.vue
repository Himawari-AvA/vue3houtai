<!--
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-08-26 16:28:19
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-08-26 17:13:47
 * @FilePath: \vue_3.2\src\views\HomeView.vue
 * @Description:
 *
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved.
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
