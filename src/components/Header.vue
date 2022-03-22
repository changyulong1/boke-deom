<template>
  <div>
    <header v-if="!isLogin">
      <h1>LET'S SHARE</h1>
      <p>精品博客汇聚</p>
      <div class="btn">
        <el-button>立即登录</el-button>
        <el-button>注册账号</el-button>
      </div>
    </header>
    <header v-if="isLogin" class="user-header">
    <h1>LET'S SHARE</h1>
      <span></span>
      <div class="user">
        <i class="el-icon-edit"></i>
        <div>
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="js">

export default {
  data(){
    return{
      isLogin:false
    }
  }

}
</script>

<style lang="scss" scoped>
    header{
      padding: 0 12% 30px 12%;
      background: green;
      color: #ffffff;
      text-align: center;
      overflow: hidden;
      h1{
        font-size: 40px;
        margin: 60px 0 0 ;
      }
      p{
        margin: 20px 0 0;
      }
      >.btn{
          padding-top: 20px;
      }

    }
    .user-header{
      padding: 16px 12%;
      margin: 0;
      display: flex;
      justify-content: space-between;
      h1{
        margin: 0;
      }
      .user{
        display: flex;
        align-items: center;
        .el-icon-edit{
          margin: 0 20px;
          font-size: 30px;
        }
      }
    }

</style>