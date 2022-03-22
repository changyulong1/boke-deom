<template>
  <div>
    <header v-if="!isLogin">
      <h1>LET'S SHARE</h1>
      <p>精品博客汇聚</p>
      <div class="btn">
        <router-link to="/Login"><el-button>立即登录</el-button></router-link>
        <router-link to="/Register"> <el-button>立即祖册</el-button></router-link>
      </div>
    </header>
    <header v-if="isLogin" class="user-header">
    <h1>LET'S SHARE</h1>
      <span></span>
      <div class="user">
        <i class="el-icon-edit"></i>
        <div class="user-go">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
          <ul>
            <li>我的</li>
            <li @click="logout">注销</li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="js">
import {mapGetters,mapActions} from 'vuex'
export default {
  data(){
    return {
      // isLogin:false
    }
  },
  computed:{
    ...mapGetters(['user','isLogin'])
  },
  created(){
    this.checkLogin()
  },
  methods:{
    ...mapActions(['checkLogin','logout'])

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
        .user-go{
          ul{
            display: none;
          }
          &:hover >ul{
            display: block;
          }
        }
      }
    }

</style>