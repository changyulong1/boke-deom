import blog from '@/api/blog'

export default {
    data() {
        return {
            blogs: [],
            user: {},
            page: 1,
            total: 30
        }
    },
    created(){
        this.userId = this.$route.params.userId
        this.page = this.$route.query.page || 1
        blog.getBlogsByUserId(this.userId, {page: this.page})
        .then(res => {
            console.log(res)
            this.blogs = res.data
            this.page = res.page
            this.total = res.total
            if(res.data.length>0){
                this.user=res.data[0].user
            }
        })
    },
    methods: {
        onPageChange(newPage) {
        blog.getBlogsByUserId(this.userId, {page: newPage})
            .then(res => {
                console.log(res)
                this.blogs = res.data
                this.page = res.page
                this.total = res.total
            })
        },
        splitDate(dataStr){
            let date = typeof dataStr === "object" ? dataStr:new Date(dataStr)
            return {
                date: date.getDate(),
                month: date.getMonth() + 1,
                year: date.getFullYear(),
            }
        }
    }
}