<template>
  <div class="parent-Register">
    <div class="Register">
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
      <el-button type="success">注册账户</el-button>
    </div>
    <div class="Login-footer">
      <span>没有账号？</span>
      <a href="#">立即注册</a>
    </div>
  </div>
</template>

<script lang="js" src="./template.js">

</script>

<style lang="scss" scoped src="./template.scss"></style>