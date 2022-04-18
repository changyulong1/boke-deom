<template>
  <el-col :sm="20" id="index">
    <section class="blog-posts">
      <router-link
        class="item"
        v-for="blog in blogs"
        :to="`/detail/${blog.id}`"
        :key="blog.id"
      >
        <figure class="avatar">
          <el-avatar :size="60" :src="blog.user.avatar" @error="errorHandler">
            <img
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            />
          </el-avatar>
          <figcaption>{{ blog.user.username }}</figcaption>
        </figure>
        <h3>
          <p>{{ blog.title }}</p>
          <span> {{ dayDate(blog.createdAt) }}</span>
        </h3>
        <p>{{ blog.description }}</p>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :current-page="page"
        @current-change="onPageChange"
      >
      </el-pagination>
    </section>
  </el-col>
</template>

<script lang="js" src="./template.js">
// blog.user.avatar
</script>

<style lang="scss" scoped src="./template.scss"></style>