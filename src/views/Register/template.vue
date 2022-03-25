<template>
  <div class="parent-Login">
    <el-col :sm="12" class="Login">
      <p>用户名</p>
      <el-input
          type="text"
          autosize
          v-model="userName"
          placeholder="用户名"
      >
      </el-input>
      <p>密码</p>
      <el-input
          type="password"
          autosize
          v-model="Password"
          placeholder="密码"
      >
      </el-input>
      <el-button type="success" @click="onRegister">立即注册</el-button>
      <div class="Login-footer">
        <el-link>已有账号？</el-link>
        <router-link to="/Login">立即登录</router-link>
      </div>
    </el-col>
  </div>
</template>

<script lang="js" src="./template.js"></script>

<style lang="scss" scoped src="../Login/template.scss"></style>