<template>
  <div class="parent-Login">
    <div class="Login">
      <p>用户名</p>
      <el-input
          type="text"
          autosize
          v-model="username"
          placeholder="用户名"
      >
      </el-input>
      <p>密码</p>
      <el-input
          type="password"
          autosize
          v-model="password"
          placeholder="密码"
      >
      </el-input>
      <el-button type="success" @click="onLogin">立即登录</el-button>
      <div class="Login-footer">
        <el-link>没有账户？</el-link>
        <el-link type="primary">注册账户</el-link>
      </div>
    </div>
  </div>
</template>

<script lang="js">

export default{

}
</script>

<style lang="scss" scoped>
.parent-Login {
  position: relative;
  .Login{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 600px;
    margin: 0 auto;
    P{
      color: #000;
      margin: 20px 0;
    }
    .el-input{
      margin-bottom: 20px;
    }
    .el-button{
      margin: 20px 0;
    }
  }
  .Login-footer{
    text-align: center;
    padding: 40px;
  }
}


</style>