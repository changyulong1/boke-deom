import marked from 'marked';
import blog from '@/api/blog'
import highlight from 'highlight.js'
export default {
    data() {
        return {
            title: '',
            newContent: '',
            user: {},
            createdAt: ""

        }
    },
    created() {
        this.blogId = this.$route.params.blogId
        blog.getDetail({ blogId: this.blogId }).then(res => {
            this.title = res.data.title
            this.newContent = res.data.content
            this.createdAt = res.data.createdAt
            this.user = res.data.user
        })

    },
    computed: {
        markdown() {
            return marked(this.newContent)
        }
    },
    methods: {
        errorHandler() {
            return true
        }
    },
    directives: {
        highlight(el) {
            let blocks = el.querySelectorAll(' pre code');
            blocks.forEach((block) => {
                highlight.highlightAll(block)
            })

        }
    }

}