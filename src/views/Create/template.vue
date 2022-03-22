<template>
  <div class="parent-Create">
    <el-container>
      <h3>创建文章</h3>
    </el-container>
    <div class="Edit">
      <p>文章标题</p>
      <el-input class="title" v-model="title" placeholder="文章标题"></el-input>
      <p>内容简介</p>
      <el-input  type="textarea" v-model="description" :rows="2"  placeholder="内容简介"></el-input>
      <p>文章内容</p>
      <el-input type="textarea" v-model="content"  :rows="8" placeholder="文章内容"></el-input>
    </div>
    <p>
      <label>是否展示到首页</label>
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </p>
    <el-button type="success" @click="onCreate" round>保存</el-button>
  </div>
</template>

<script lang="js" src="./template.js">

</script>

<style lang="scss" scoped src="./template.scss"></style>