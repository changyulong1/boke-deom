<template>
  <el-col :sm="20" class="parent-Create">
    <div class="warp">
      <h2>修改博客</h2>
      <div class="Edit">
        <p>文章标题</p>
        <el-input type="text"
                  class="title"
                  v-model="title"
                  placeholder="文章标题至少10个字"
        >
        </el-input>
        <p>内容简介</p>
        <el-input  type="textarea"
                   v-model="description"
                   :rows="2"
                   placeholder="文章标题至少30个字"
                   resize="none"
        >
        </el-input>
        <p>文章内容</p>
       <div class="text">
         <el-input type="textarea"
                   v-model="content"
                   :rows="8" placeholder="文章简介至少200个字"
                   resize="none"
         >
        </el-input>
       </div>
        <p>
          <label>是否展示到首页</label>
          <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </p>
        <el-button type="success" @click="update" round>保存</el-button>
      </div>
    </div>
  </el-col>
</template>

<script lang="js" src="./template.js">

</script>

<style lang="scss" scoped src="../Create/template.scss"></style>