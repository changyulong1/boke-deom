import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = 'https://blog-server.hunger-valley.com/'
// axios.defaults.baseURL = 'http://localhost:8081/'

// window.request= request

export default function request(url, type = "GET", data = {}) {
    return new Promise((resolve, reject) => {
        let option = {
            url,
            method: type
        }
        if (type.toLowerCase() === 'get') {
            option.params = data
        } else {
            option.data = data
        }
        if (localStorage.token) {
            axios.defaults.headers.common['Authorization'] = localStorage.token;
        }
        axios(option).then(res => {
            if (res.data.status === 'ok') {
                if (res.data.token) {
                    localStorage.token = res.data.token
                }
                resolve(res.data)
            } else {
                MessageBox.alert(res.data.msg, '消息', {
                    confirmButtonText: '确定',
                });
                reject(res.data)
            }
        }).catch(() => {
            Message.error('网络异常')
            reject({ msg: '网络异常' })
        })
    })
}
