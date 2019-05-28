<template>
    <div id="indexs">
        <!-- 最新内容 -->
        <div class="block clearfix">
            <!-- 左侧跑马灯 -->
            <el-carousel height="250px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
            <!-- 右侧标签页 -->
             <el-tabs :tab-position="tabPosition" style="height: 250px;">
                <el-tab-pane label="用户管理">用户管理</el-tab-pane>
                <el-tab-pane label="配置管理">配置管理</el-tab-pane>
                <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                <el-tab-pane label="个人简介">定时任务补偿</el-tab-pane>
            </el-tabs>
        </div>
        <!-- 笔记 -->
        <div class="course">
             <div class="course_title">
            <h2>课程笔记</h2>
            <p>前端技术总结</p>
            </div>
            <ul>
                <li v-for="(item,index) in courselist" :key="index">
                    <router-link :to="item.url">
                        <el-image :src="item.img" alt=""></el-image>
                        <p>{{item.title}}</p>
                        <span></span>
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- 最新博文 -->
        <div class="newlist">
             <el-divider content-position="left">最新博文</el-divider>
            <el-row>
                <el-col v-for="o in 8" :key="o">
                    <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image"></el-image>
                    <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                        <time class="time">{{ currentDate }}</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            tabPosition:'right',
            currentDate: new Date(),
            courselist:[
                {
                    img:require('../../../assets/html5.svg'),
                    url:'/',
                    title:'html笔记'
                },{
                    img:require('../../../assets/css3.svg'),
                    url:'/',
                    title:'css笔记'
                },{
                    img:require('../../../assets/javascript.svg'),
                    url:'/',
                    title:'javascript笔记'
                },{
                    img:require('../../../assets/jquery.svg'),
                    url:'/',
                    title:'jquery.js笔记'
                },{
                    img:require('../../../assets/vuejs.svg'),
                    url:'/',
                    title:'vuejs.js笔记'
                },
                {
                    img:require('../../../assets/more.svg'),
                    url:'/',
                    title:'更多'
                }
            ]
        }
    },
    methods:{
        // course(){
        //     for(var i = 0 ; i < courselist.lenght ; i++){
        //         courselist[i].img = require(courselist[i].img)
        //     }
        // }
    }
}
</script>
<style lang="scss">
#indexs{
    // 最新
    .block{
        margin-bottom: 3%;
        .el-carousel{
            float: left;
             width: 62%;
            .el-carousel__item h3 {
                color: #475669;
                font-size: 14px;
                opacity: 0.75;
                line-height: 150px;
                margin: 0;
            }
            .el-carousel__item:nth-child(2n) {
                background-color: #99a9bf;
            }
            .el-carousel__item:nth-child(2n+1) {
                background-color: #d3dce6;
            }
        }
        .el-tabs{
            float: left;
            width: 35%;
            margin-left: 3%;
            background-color: #fff;
            .el-tabs__nav{
                height: 100%;
                .el-tabs__active-bar{
                    background-color:#333
                }
                .el-tabs__item{
                    height:25%;
                    line-height: 62px;
                    color:#888;
                    &:hover{
                        color:#333
                    }
                }
                .el-tabs__item.is-active{
                    color:#333
                }
            }
           
        }
    }
    
    //   课程
    &>.course{
        margin-bottom: 3%;
        padding: 1%;
        border-radius: 5px;
        background-color: #fff;
        & .course_title {
            text-align: center;
            margin-bottom:20px;
            h2{
                font-size: 30px;
            }
            p{
                font-size: 16px;
            }
        }
        ul{
            li {
                display: inline-block;
                width: 16.3%;
                border-bottom: 1px solid #efefef;
                padding:30px 0;
                font-size:20px;
                text-align: center;
                img {
                    width: 30%;
                    margin:0 auto;
                }
                &:hover{
                    box-shadow: 0 0 30px #ccc;
                    -webkit-box-shadow: 0 0 30px #ccc;
                    -moz-box-shadow: 0 0 30px #ccc;
                }
            }
        }
    }
    // 最新博文
    .newlist{
        float: left;
        width: 70%;
        padding: 1%;
        border-radius: 5px;
        background-color: #fff;
        .el-col{
            width: 23.5%;
            margin-left: 2%;
            margin-top: 3%;
            &:nth-child(1){
                margin-left: 0;
            }
            &:nth-child(5n){
                margin-left: 0;
            }
             &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4){
                 margin-top:0;
             }
             &:hover{
                 img{
                     transform: scale(1.1)
                 }
             }
             .el-card__body{
                 &>div{
                    position: relative;
                    z-index: 200;
                    background-color: #fff;
                 }
             }
        }
        .time {
            font-size: 13px;
            color: #999;
        }
        .bottom {
            margin-top: 13px;
            line-height: 12px;
        }
        .button {
            padding: 0;
            float: right;
        }
        .image {
            position: relative;
            z-index: 100;
            width: 100%;
            display: block;
            transition: all .5s;
        }
        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }
        .clearfix:after {
            clear: both
        }
    }
    // 
    
}
</style>