<template>
  <div class="tag">
    <el-menu
      default-active="1"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <router-link to="/Index">首页</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/My">我的</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/Create">创建</router-link>
      </el-menu-item>
      <el-menu-item index="4">退出</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  created() {
    console.log(666);
  },
  methods: {
    handleSelect() {
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.tag {
  flex: 1;
  .el-menu {
    border: none;
    .el-menu-item {
      text-align: center;
      margin-left: 16px;
      > a {
        display: inline-block;
        height: 100%;
      }
    }
  }
}
@media (max-width: 700px) {
  .header {
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
</style>
