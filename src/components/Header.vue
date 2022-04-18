<template>
  <div class="parent">
    <el-col :sm="20" class="header">
      <div clas="left">
        <h2>
          <router-link to="/">日记博客</router-link>
        </h2>
      </div>
      <Nav :activeIndex2="activeIndex2" v-if="isLogin" />
      <div v-if="!isLogin" class="but">
        <el-menu
          :default-active="activeIndex3"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
        >
          <el-menu-item index="1">
            <router-link to="/">登录</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/Register">注册</router-link>
          </el-menu-item>
        </el-menu>
      </div>
    </el-col>
  </div>
</template>

<script lang="js">
import {mapGetters, mapActions} from 'vuex'
import Nav from "@/components/Nav";
export default {
  data() {
    return {
      activeIndex3: '1',
      activeIndex2: '1'

    }
  },
   components: { Nav },
  computed: {
    ...mapGetters(['user', 'isLogin'])
  },
  created() {
    this.activeIndex2 = localStorage.getItem('index') || "1"
    this.checkLogin()
  },
  methods: {
    ...mapActions(['checkLogin', 'logout']),
    errorHandler(){
      return true
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
  .but {
    .el-menu {
      border: none;
      .el-menu-item {
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
        display: none;
      }
      .hidden-sm-only {
        display: none;
      }
    }
  }
}
</style>