<template>
  <el-col :sm="20" id="user">
    <router-link :to="`/My`">
    <section class="user-info">
      <el-avatar :size="40" src="@/assets/log.jpg">
        <img :src="user.avatar" :alt="user.username"/>
      </el-avatar>
       <h3>昵称：{{user.username}}</h3>
    </section>
    </router-link>
    <section>
      <h3 class="title">所有文章</h3>
      <p v-if="blogs.length===0">亲，你还没有文章，块创建吧</p>
      <router-link class="item" v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`">
        <div class="date">
          <span class="day">{{splitDate(blog.createdAt).date}}</span>
          <span class="month">{{splitDate(blog.createdAt).month}}月</span>
          <span class="year">{{splitDate(blog.createdAt).year}}</span>
        </div>
       <div>
         <h3>{{blog.title}}</h3>
         <p>{{blog.description}}</p>
         <div class="actions">
           <router-link :to="`/edit/${blog.id}`">
             <el-button type="primary" plain>编辑</el-button>
           </router-link>
           <a href="#" @click.prevent="onDelete(blog.id)">
             <el-button type="danger" plain>删除</el-button>
           </a>
         </div>
       </div>
      </router-link>
    </section>
    <section class="pagination" v-if="blogs.length>0">
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
