import auth from '@/api/auth.js'
const state = {
    user:null,
    isLogin:false
}
const getters = {
    user: state => {
         return state.user
    },
    isLogin: state => state.isLogin
}
const mutations ={
    setUser(state,payload){
        state.user= payload.user
    },
    serLogin(state,payload){
        state.isLogin=payload.isLogin
    }

}
const actions = {
    //登录
    login({commit},{username,password}){
       return auth.login({username,password})
           .then(res=>{
               commit('setUser',{user:res.data})
               commit('serLogin',{isLogin:true})
           })
    },
    //注册
    async register({commit},{username,password}){
       let res = await auth.register({username,password})
        commit('setUser',{user:res.data})
        commit('serLogin',{isLogin:true})
        return res.data
    },
    //注销
   async logout({commit}){
        await auth.logout()
       commit('setUser',{user:null})
       commit('serLogin',{isLogin:false})
   },
    //判断用户是否登录
    async checkLogin({commit,state}){
        if(state.isLogin) return true
        let res = await auth.getInfo()
        commit('serLogin',{isLogin:res.isLogin})
        if(!state.isLogin) return false
        commit('setUser',{user:res.data})
        return true
    }

}

export default {state,getters,mutations,actions}