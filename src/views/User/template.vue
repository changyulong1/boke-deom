<template>
  <el-col :sm="20" id="user">
    <section class="user-info">
      <el-avatar :size="40" src="@/assets/log.jpg">
        <img :src="user.avatar" :alt="user.username"/>
      </el-avatar>
      <h3>昵称：{{ user.username }}</h3>
    </section>
    <section>
      <h3 class="title">所有文章</h3>
      <router-link class="item" :to="`/Edit/${blog.id}`" v-for="blog in blogs" :key="blog.id">
        <div class="date">
          <span class="day">{{splitDate(blog.createdAt).date  }}</span>
          <span class="month">{{splitDate(blog.createdAt).month  }}</span>
          <span class="year">{{splitDate(blog.createdAt).year  }}</span>
        </div>
        <h3>{{ blog.title }}</h3>
        <p>{{ blog.description }}}</p>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          :current-page="page"
          @current-change="onPageChange">
      </el-pagination>

    </section>
  </el-col>
</template>

<script src="./template.js"></script>

<style src="./template.scss" lang="scss"></style>
