import blog from '@/api/blog'
export default {
    data(){
        return{
            blogId:null,
            title:'',
            description:'',
            content:'',
            atIndex:true
        }
    },
    created() {
        this.blogId = this.$route.params.blogId
    blog.getDetail({blogId:this.blogId})
        .then((res)=>{
            console.log(res)
            this.title = res.data.title
            this.description = res.data.description
            this.content = res.data.content
            this.atIndex = res.data.atIndex
        })
    },
    methods:{
        update(){
            blog.updateBlog({blogId:this.blogId},{title:this.title,content:this.content,description:this.description,atIndex:this.atIndex} )
                .then((res)=>{
                    console.log(res)
                    this.$router.push('/MY')
                })
        }
    }

}