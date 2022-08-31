<!--
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-08-26 17:23:30
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-08-30 16:10:44
 * @FilePath: \vue_3.2\src\views\login\index.vue
 * @Description:
 *
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved.
-->
<template>
  <div class="login-container">
    <el-form ref="formRef" :model="form" class="login-form" :rules="rules">
      <div class="title-container">
        <h3 class="title">{{ $t('login.title') }}</h3>
      </div>
      <!-- <el-icon :size="size" :color="color" class="svg-container">
        <Edit />
      </el-icon> -->
      <svg-icon icon="user" class="svg-container"></svg-icon>
      <el-form-item prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <!-- <el-icon :size="size" :color="color" class="svg-container">
        <Edit />
      </el-icon> -->
      <svg-icon icon="password" class="svg-container"></svg-icon>
      <el-form-item prop="password">
        <el-input v-model="form.password" type="password" show-password />
        <!-- <svg-icon icon="eye"></svg-icon> -->
      </el-form-item>
      <el-button type="primary" class="login-button" @click="handleLogin">{{
        $t('login.btnTitle')
      }}</el-button>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import { Edit } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
const store = useStore()
const form = ref({
  username: '',
  password: ''
})

const rules = ref({
  username: [
    {
      required: true,
      message: 'Please input activity name',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: 'Please input activity name',
      trigger: 'blur'
    }
  ]
})

const formRef = ref(null)
const handleLogin = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      // alert('submit!')
      // console.log(form.value)
      // await login(form.value)
      store.dispatch('app/login', form.value)
      // store.commit('app/changeSideType')
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
</script>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        // color: red;
        height: 47px;
        caret-color: $cursor;
        padding-left: 50px;
      }
    }
    .login-button {
      width: 100%;
      box-sizing: border-box;
      //   border: 10px red solid;
    }
  }

  .tips {
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
    position: relative;
    left: -240px;
    top: 40px;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    // ::v-deep .lang-select {
    ::v-deep .lang-select {
      position: absolute;
      top: 4px;
      right: 0;
      background-color: white;
      font-size: 22px;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .show-pwd {
    // position: absolute;
    // right: 10px;
    // top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
<!-- 这里icon不再框内的把::deep 这个去掉 然后给 el-input 外边包括上:deep
是:deep(.el-input) 内部的input 再加上box-shadow:0 0 0 0; -->
