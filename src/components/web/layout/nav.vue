<template>
   <div id="web">
        <div id="nav" :class="show?'on':''">
            <div>
                <h1 class="login">
                    <img src="../../../assets/logo.png" alt="">
                </h1>
                <ul class="clearfix">
                    <li v-for="(item,index) in nav" :key="index" @mouseover='mouseover(index)' @mouseleave='mouseleave(index)' @click='clickadd(index)' :class="index == onindex?'on':''">
                        <router-link :to="item.url">{{item.title}}</router-link>
                    </li>
                </ul>
                <div>
                    <router-link to="/">登录</router-link> / <router-link to="/">注册</router-link>
                </div>
            </div>
        </div>
        <el-main class="clearfix">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="(item)  in levelList" :key="item.path">
                    <router-link :to="item.redirect||item.path">{{item.meta.title}}</router-link>
                </el-breadcrumb-item>
            </el-breadcrumb>

            <!-- 路由及公共组件 -->
            <router-view></router-view>
             <!-- 右侧导航 -->
            <right-list></right-list>
        </el-main>
        <!-- 返回顶部 -->
        <get-top :showTop='gettopshow'></get-top>
       
   </div>
</template>
<script>
import getTop from './getTop/gettop.vue'
import rightList from './rightList/rightlist.vue'
let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
export default {
    components:{getTop,rightList},
    data(){
        return{
            levelList: null,
            nav:[
                {
                    title:'首页',
                    url:'/'
                },{
                    title:'前端小记',
                    url:'/web'
                },{
                    title:'个人简介',
                    url:'/resume'
                },{
                    title:'时间轴',
                    url:'/timeShaft'
                },{
                    title:'留言板',
                    url:'/mesBoard'
                },{
                    title:'后台管理',
                    url:'/backStage'
                }
            ],
            on:'',
            onindex:'0',
            onindexadd:'0',
            scrolltop:0,
            show:true,
            gettopshow:false,
            matched:'',
            title:'',
            path:''
        }
    },
    methods:{
        // 顶部道航
        mouseover(index){
           this.onindex = index;
        },
        mouseleave(index){
            this.onindex = this.onindexadd;
        },
        clickadd(index){
            this.onindexadd = index;
            sessionStorage.setItem('onindex',this.onindex);
        },
        // 记录导航当前路由
        routers(){
            let matched = this.$route.matched.filter(item => item.name)
            const first = matched[0]
            for(let i = 0 ; i < this.nav.length ; i ++ ){
                if(this.$route.name == this.nav[i].title){
                    if(i == 5){
                         sessionStorage.setItem('onindex',0);
                    }else{
                         sessionStorage.setItem('onindex',i);
                    }
                
                    console.log(this.onindex)
                }
            }
        },
        //顶部导航及右侧返回顶部滚动条事件
        scrollTopFn() {  
            let _this = this
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop //原生兼容
            if(scrollTop >= 300){
                this.gettopshow = true
            }else{
                this.gettopshow = false
            }
            if(scrollTop>_this.scrolltop){
                _this.show = false
            }else{
                _this.show = true
            }
            _this.scrolltop = scrollTop
        },
        // 面包屑道航
        getBreadcrumb() {
            let matched = this.$route.matched.filter(item => item.name)
            const first = matched[0]
            if (first && first.name !== 'webHome') {
                matched = [{path: '/', name: 'webHome', meta:{title:'首页'}}].concat(matched)
            }
            this.levelList = matched;
           console.log(this.levelList)
        }
    },
    mounted(){
        if(sessionStorage.getItem('onindex') == 5){
            this.onindex = 0
        }else{
            this.onindex = sessionStorage.getItem('onindex') || '0'
        }
        this.getBreadcrumb();
        let _this = this;
        window.addEventListener('scroll', this.scrollTopFn);    
    },
    watch: {
        $route(to, from) {
        this.getBreadcrumb();
        this.routers();
        }
    }
}
</script>
<style lang='scss'>
#nav{
    position:fixed;
    height: 80px;
    width: 100%;
    top: -80px;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,.17);
    background-color: #fff;
    transition:all .2s;
    z-index: 1000;
    &.on{
        top: 0;
    }
    &>div{
        width: 1200px;
        margin:0 auto;
        &>h1{
            float: left;
            height: 80px;
            width: 80px;
            img{
                width: 100%;
            }
        }
        ul{
            float: left;
            margin-left: 80px;
            li{
                position: relative;
                float: left;
                height: 80px;
                line-height: 80px;
                &::before{
                    position: absolute;
                    content: '';
                    height: 2px;
                    width: 0;
                    left: 50%;
                    bottom: 0;
                    transform: translateX(-50%);
                    transition:all .5s;
                }
                &.on{
                    &::before{
                        width: 100%;
                        background-color: #45b6f7;
                    }
                }
                a{
                    padding:0 30px;
                    color: #333;
                    font-size: 18px
                }
            }
        }
        &>div{
            float:right;
            height: 80px;
            line-height: 80px;
            a{
                display:inline-block;
            }
        }
    }
}
// #content{
//         float: left;
//         // width: 70%;
//         text-align: left;
//         h4{
//             margin-bottom: 10px;
//         }
//     }
// 面包屑道航
.el-breadcrumb{
    .el-breadcrumb__item{
        span{
            float: left;
            font-size: 16px;
        }
    }
}

</style>
