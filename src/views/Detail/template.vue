<template>
  <div class="parent">
    <section>
        <el-row>
          <el-col :sm="2"  class="left">
            <el-avatar :sm="60">
              <img :src="user.avatar" :alt="user.username"/>
            </el-avatar>
          </el-col>
          <el-col :sm="22"  class="right">
            <h3>{{ title }}</h3>
            <P><strong>{{ user.username }}</strong><span>{{ createdAt }}}</span></P>
          </el-col>
        </el-row>
    </section>
    <div class="content" v-html="newContent">

    </div>
  </div>
</template>

<script lang="js" src="./template.js">

</script>

<style lang="scss" scoped src="./template.scss"></style>