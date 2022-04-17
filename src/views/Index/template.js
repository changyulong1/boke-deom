import blog from '@/api/blog'
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            blogs: [],
            total: 0,
            page: 1,
            src: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        }
    },
    created() {
        this.page = parseInt(this.$route.query.page) || 1
        blog.getIndexBlogs({ page: this.page }).then(res => {
            this.blogs = res.data
            this.total = res.total
            this.page = res.page
        })
    },
    computed: {
        ...mapGetters(['isLogin'])
    },
    methods: {
        onPageChange(newPage) {
            console.log(newPage)
            blog.getIndexBlogs({ page: newPage }).then(res => {
                this.blogs = res.data
                this.total = res.total
                this.page = res.page
                this.$router.push({ path: '/Index', query: { age: newPage } })
            })
        },
        errorHandler() {
            return true
        }

    }
}