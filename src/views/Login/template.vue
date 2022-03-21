<template>
  <div class="parent-Login">
    <div class="Login">
      <p>用户名</p>
      <el-input
          type="text"
          autosize
          placeholder="用户名"
          >
      </el-input>
      <p>密码</p>
      <el-input
          type="password"
          autosize
          placeholder="密码"
      >
      </el-input>
      <el-button type="success">立即登录</el-button>
    </div>
    <div class="Login-footer">
      <span>没有账号？</span>
      <a href="#">注册新用户</a>
    </div>
  </div>
</template>

<script lang="js" src="./template.js">

</script>

<style lang="scss" scoped src="./template.scss"></style>