import request from '@/helpers/request'

const URL = {
    REGISTER: '/auth/register',//注册
    LOGIN: '/auth/login',//登录
    LOGOUT: '/auth/logout',//注销登录
    GET_INFO: '/auth'//判断用户是否登录
}
export default {
    //注册
    register({username, password}) {
        return request(URL.REGISTER, 'POST', {username, password})
    },
    //登录
    login({username,password}){
        return request(URL.LOGIN,'post',{username,password})
    },
    //注销登录
    logout(){
        localStorage.getItem('token')
        return request(URL.LOGOUT)
    },
    //判断用户是否登录
    getInfo(){
        return request(URL.GET_INFO)
    },


}