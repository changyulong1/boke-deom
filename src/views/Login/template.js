import {mapActions} from "vuex";

export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        ...mapActions([
            'login',
            'checkLogin'
        ]),
        onLogin(){
            this.login({username:this.username,password:this.password})
                .then(()=>{
                   // this.$router.go(0)
                   //  this.$router.push({path: this.$route.query.redirect || '/'})
                    this.$router.push({path: '/'})
                })
        }
    }
}