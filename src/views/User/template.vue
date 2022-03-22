<template>
  <div>
    <el-row class="user">
      <el-col :span="2">
        <div class=" left grid-content bg-purple">
          图片
        </div>
      </el-col>
      <el-col :span="22">
        <div class=" right grid-content bg-purple-light">
          <h3>小明</h3>
        </div>
      </el-col>
    </el-row>
   <div class="content">
     <section>
       <el-col :span="4" class="parent">
         <div class="left">
           <div class="img">ty</div>
           <div class="text">ypur</div>
         </div>
       </el-col>
       <el-col :span="20">
         <div class="right">
           <div class="title"><h3>前端异步大揭秘</h3><span>3天前</span></div>
           <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读</p>
         </div>
       </el-col>
     </section>
   </div>
  </div>
</template>

<script lang="js" src="./template.js">

</script>

<style lang="scss" scoped src="./template.scss"></style>