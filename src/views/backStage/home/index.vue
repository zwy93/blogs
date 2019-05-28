<template>
    <div id="backhome">
        <div>
            <el-divider content-position="left">顶部轮播</el-divider>
            <div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            userList:[]
        }
    },
    mounted(){
        // this.useAciton()
    },
    methods:{
        // vuex 数据同步
        // useAciton(){
        //     var item = ['1','2','3','4'];
        //     this.$store.dispatch('CommitUserList',item).then(res=>{
        //         this.userList=this.$store.state.userList
        //     });
        // }
    }
}
</script>
<style lang="scss">
    #backhome{
        &>div{
            background-color: #fff;
        }
    }
</style>