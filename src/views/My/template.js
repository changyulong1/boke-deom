import blog from '@/api/blog'
import {mapGetters} from "vuex";

export default {
    data() {
        return {
            blogs: [],
            page: 1,
            total: 30
        }
    },
    created() {
        this.page = this.$route.query.page || 1
        blog.getBlogsByUserId(this.user.id, {page: this.page})
            .then(res => {
                this.blogs = res.data
                this.page = res.page
                this.total = res.total
            })
    },
    computed: {
        ...mapGetters(['user'])
    },
    methods: {
        onPageChange(newPage) {
            blog.getBlogsByUserId(this.userId, {page: newPage})
                .then(res => {
                    this.blogs = res.data
                    this.page = res.page
                    this.total = res.total
                })
        },
        splitDate(dataStr) {
            let date = typeof dataStr === "object" ? dataStr : new Date(dataStr)
            return {
                date: date.getDate(),
                month: date.getMonth() + 1,
                year: date.getFullYear()
            }
        },
        onDelete(blogId){
            blog.deleteBlog({blogId})
            this.blogs=this.blogs.filter(blog => blog.id!==blogId)
        }


    }
}