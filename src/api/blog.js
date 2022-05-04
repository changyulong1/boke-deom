import request from '@/helpers/request'

const URL = {
    GET_LIST: '/blog',//获取博客列表 GET
    GET_DETAIL: '/blog/:blogId',//获取id 为 blogId 的博客详情， 如 /blog/1 GET
    CREATE: '/blog',//创建博客 POST
    UPDATE: '/blog/:blogId',//修改博客 id 为:blogId 的博客 PATCH
    DELETE: '/blog/:blogId'//删除博客 id 为:blogId 的博客 DELETE
}
export default {
    //获取博客列表
    getBlog({ page = 1, userId, atIndex } = { page: 1 }) {
        return request(URL.GET_LIST, 'GET', { page, userId, atIndex })
    },
    //获取博客列表
    //atIndex: 是否展示在首页，
    // 传递 true则只得到显示到首页的博客列表，
    // 不传得到全部类型(包括展示到首页和不展示到首页)的博客列表，
    // false得到不展示到首页的列表
    getIndexBlogs({ page = 1 } = { page: 1 }) {
        return this.getBlog({ page, atIndex: true })
    },
    //展示博客列表
    getBlogsByUserId(userId, { page, atIndex }) {
        return this.getBlog({ userId, page, atIndex })
    },
    ///获取id 为 blogId 的博客详
    getDetail({ blogId }) {
        return request(URL.GET_DETAIL.replace(':blogId', blogId))
    },
    //修改博客内容
    //title : 博客标题, 可选
    //content : 博客内容, 可选
    //description: 博客内容简要描述, 可选
    //atIndex: true/false， 展示到首页/从首页异常, 可选
    updateBlog({ blogId }, { title, content, description, atIndex }) {
        return request(URL.UPDATE.replace(':blogId', blogId), 'PATCH', { title, content, description, atIndex })
    },
    //删除博客
    deleteBlog({ blogId }) {
        return request(URL.DELETE.replace(':blogId', blogId), 'DELETE')
    },
    //创建博客
    createBlog({ title = '', content = '', description = '', atIndex = false } = { title: '', content: '', description: '', atIndex: false }) {
        return request(URL.CREATE, 'POST', { title, content, description, atIndex })
    }

}