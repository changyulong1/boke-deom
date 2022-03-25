import {mapActions} from "vuex";

export default {
    data(){
        return{
            userName:'',
            Password:''
        }
    },
    methods:{
        ...mapActions(['register']),
        onRegister(){
            this.register({username:this.userName,password:this.Password})
                .then(()=>{
                    this.$message('恭喜，账户成功')
                    this.$router.push('/My')
                })
        }
    }
}