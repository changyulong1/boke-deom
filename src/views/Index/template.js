import blog from '@/api/blog'
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            blogs: [],
            total: 0,
            page: 1,
        }
    },
    created() {
        this.page = parseInt(this.$route.query.page) || 1
        blog.getIndexBlogs({ page: this.page }).then(res => {
            this.blogs = res.data
            this.total = res.total - 10
            this.page = res.page
        })
    },
    computed: {
        ...mapGetters(['isLogin'])
    },
    methods: {
        onPageChange(newPage) {
            blog.getIndexBlogs({ page: newPage }).then(res => {
                this.blogs = res.data
                this.total = res.total - 10
                this.page = res.page
                this.$router.push({ path: '/Index', query: { page: newPage } })
            })
        },
        errorHandler() {
            return true
        }

    }
}