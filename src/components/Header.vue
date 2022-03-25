<template>
  <div class="parent">
    <el-col :sm="20" class="header">

      <div clas="left">
        <h2>
<!--          <router-link to="/">日记博客</router-link>-->
          <router-link to="/">{{ isLogin }}</router-link>
        </h2>
      </div>
      <div class="tag">
        <el-menu
            v-if="isLogin"
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
          <el-menu-item index="1">
            <router-link to="/">首页</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/My">我的</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/Create">创建</router-link>
          </el-menu-item>
          <el-menu-item v-if="isLogin" index="4" @click="onLogout">退出</el-menu-item>
        </el-menu>
      </div>
      <div v-if="!isLogin" class="but">
        <el-menu
            :default-active="activeIndex3"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            >
          <el-menu-item index="1">
            <router-link to="/Login">登录</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/Register">注册</router-link>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="right hidden-sm-only" v-if="isLogin">
        <router-link to="/Create"><i class="el-icon-plus"></i></router-link>
        <router-link to="/My">
          <el-avatar :size="40" src="@/assets/log.jpg">
            <img :src="user.avatar" :alt="user.name"/>
          </el-avatar>
        </router-link>
      </div>
    </el-col>
  </div>
</template>

<script lang="js">
import {mapGetters, mapActions} from 'vuex'

export default {
  data() {
    return {
      // isLogin:false
      activeIndex3: '1',
      activeIndex2: '1',
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"]

    }
  },
  computed: {
    ...mapGetters(['user', 'isLogin'])
  },
  created() {
    this.checkLogin()
  },
  methods: {
    ...mapActions(['checkLogin', 'logout']),
    onLogout() {
      this.logout().then(() => {
        this.$router.push('/Login')
      })
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }


}
</script>

<style lang="scss" scoped>
.parent {
  background: #545c64;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  .but{
    .el-menu{
      border: none;
      .el-menu-item{
        border: 1px solid #2c3e50;
        border-radius: 6px;
        padding: 0 20px;
        margin: 0 16px;
        color: #ebebeb;
      }
    }

  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
    .but{
      .el-button{
        a{

        }
      }
    }
    .tag {
      flex: 1;

      .el-menu {
        border: none;

        .el-menu-item {
          background: red;
          height: 100%;
          margin-left: 16px;
        }
      }
    }

    .right {
      display: flex;
      align-items: center;

      .el-icon-plus {
        margin: 0 20px;
        font-size: 30px;
        color: #ebebeb;
      }

      ul {
        display: none;
      }

      &:hover > ul {
        display: block;
      }
    }

    h2 {
      font-size: 30px;

      > a {
        color: white;
      }
    }
  }

  @media (max-width: 700px) {
    .header {
      h2 {
        //background: red;
        //display: none;
      }

      .hidden-sm-only {
        border: 1px solid red;
        background: red;
        display: none;
      }

      .tag {
        .el-menu {
          border: none;

          .el-menu-item {
            background: red;
            height: 100%;
            width: 25%;
            margin-left: 0;
          }
        }
      }
    }
  }
}


</style>