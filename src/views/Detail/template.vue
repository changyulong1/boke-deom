<template>
  <el-col :sm="20" class="parent">
    <div class="wrap">
      <section>
        <div class="left">
          <router-link :to="`/User/${user.id}`">
            <el-avatar :size="60" :src="user.avatar" @error="errorHandler">
              <img
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              />
            </el-avatar>
          </router-link>
        </div>
        <div class="right">
          <h3>{{ title }}</h3>
          <P
            ><strong>{{ user.username }}</strong
            ><span>{{ dayDate(createdAt) }}</span></P
          >
        </div>
      </section>
      <h3 class="title">文章内容</h3>
      <article class="markdown-body" v-html="markdown"></article>
    </div>
  </el-col>
</template>

<script lang="js" src="./template.js">


</script>

<style lang="scss" scoped src="./template.scss"></style>