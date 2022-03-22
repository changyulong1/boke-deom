<template>
  <div class="parent-Edit">
    <div class="Edit">
      <p>文章标题</p>
      <el-input v-model="title" placeholder="文章标题"></el-input>
      <p>内容简介</p>
      <el-input  type="textarea" v-model="brief" :rows="2"  placeholder="内容简介"></el-input>
      <p>文章内容</p>
      <el-input type="textarea" v-model="article"  :rows="8" placeholder="文章内容"></el-input>
    </div>
    <el-button type="success" round>保存</el-button>
  </div>
</template>

<script lang="js" src="./template.js">

</script>

<style lang="scss" scoped src="./template.scss"></style>