<template>
  <div class="parent">
    <section>
      <router-link class="parent-Login" v-for="blog in blogs" :to="`/detail/${blog.id}`" :key="blog.id">
        <el-row>
          <el-col :sm="2"  class="left">
            <el-avatar :sm="60">
              <img :src="blog.user.avatar" alt="blog.user.username"/>
            </el-avatar>
            <div class="text">{{ blog.user.username }}</div>
          </el-col>
          <el-col :sm="22"  class="right">
            <h3 class="title">{{ blog.title }}<span>{{ blog.createdAt }}</span></h3>
            <p>
              {{ blog.description }}
            </p>
          </el-col>
        </el-row>
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
      {{ page }}
    </section>

  </div>
</template>

<script lang="js" src="./template.js">

</script>

<style lang="scss" scoped src="./template.scss"></style>