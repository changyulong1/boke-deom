export default {
    data(){
        return{
            name:"首页"
        }
    },
    methods:{
        open() {
            this.$message('可以维嘉吃饭了');
        },

        openVn() {
            const h = this.$createElement;
            this.$message({
                message: h('p', null, [
                    h('span', null, '内容可以是 '),
                    h('i', { style: 'color: teal' }, '我是小明')
                ])
            });
        }
    }
}