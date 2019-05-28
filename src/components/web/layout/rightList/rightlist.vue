<template>
   <!-- 右侧定位导航 -->
        <div class="rightnav">
            <!-- 点击排行 -->
            <div class="clicklist">
                 <el-divider content-position="left">点击排行</el-divider>
                 <ul>
                     <li v-for="(item,index) in clickList" :key="index" :class="index == 0 ? 'on' : ''">
                        <div v-if="index == 0 ? 'true' : 'false'">
                            <img :src="item.img" alt="">
                        </div>
                        <span v-if="index == 0 ? 'false' : 'true'">{{index}}</span>
                        <p>{{item.title}}</p>
                     </li>
                 </ul>
            </div>
            <!-- 最近更新 -->
             <div class="clicklist">
                 <el-divider content-position="left">最近更新</el-divider>
                 <ul>
                     <li v-for="(item,index) in updateList" :key="index" :class="index == 0 ? 'on' : ''">
                        <div v-if="index == 0 ? 'true' : 'false'">
                            <img :src="item.img" alt="">
                        </div>
                        <span v-if="index == 0 ? 'false' : 'true'">{{index}}</span>
                        <p>{{item.title}}</p>
                     </li>
                 </ul>
            </div>
        </div>
</template>
<script>
    export default {
        name:'rightList',
        data(){
            return{
                clickList:[
                    {
                        img:'http://jxhx.yangqq.com/skin/jxhx/images/b02.jpg',
                        title:'安静地做一个爱前端的美男子'
                    },{
                        img:'',
                        title:'安静地做一个爱前端的美男子安静地做一个爱前端的美男子'
                    },{
                        img:'',
                        title:'安静地做一个爱前端的美男子'
                    },{
                        img:'',
                        title:'安静地做一个爱前端的美男子'
                    }
                ],
                updateList:[
                    {
                        img:'http://jxhx.yangqq.com/skin/jxhx/images/b02.jpg',
                        title:'安静地做一个爱前端的美男子'
                    },{
                        img:'',
                        title:'安静地做一个爱前端的美男子安静地做一个爱前端的美男子'
                    },{
                        img:'',
                        title:'安静地做一个爱前端的美男子'
                    },{
                        img:'',
                        title:'安静地做一个爱前端的美男子'
                    }
                ]
            }
        }

    }
</script>
<style lang="scss">
    .rightnav{
        float: right;
        width: 27%;
        margin-left: 3%;
        // 点击排行
        .clicklist{
            padding: 4%;
            border-radius: 5px;
            background-color: #fff;
            margin-top: 35px;
            ul{
                li{
                    height: 30px;
                    line-height: 30px;
                    overflow: hidden;
                    margin-top:10px;
                    cursor: pointer;
                    span{
                        float: left;
                        height: 20px;
                        margin-top:5px;
                        margin-right:7px;
                        line-height: 20px;
                        width: 20px;
                        background-color: #475669;
                        color: #fff;
                    }
                    p{
                        float: right;
                        width: calc(100% - 27px);
                        text-align: left;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                    &.on{
                        position: relative;
                        height: 100px;
                       div{
                           position: absolute;
                           left: 0;
                           top: 0;
                           width: 100%;
                           height: 100%;
                           img{
                               transition: all .5s;
                           }
                       }
                       p{
                           position: absolute;
                           width: 100%;
                           text-align: center;
                           top: 50%;
                            transform: translateY(-50%);
                            color: #fff;
                       }
                       &:hover{
                           div{
                                img{
                                    transform: scale(1.1)
                                }   
                            }
                       }
                    }
                    &:nth-child(1){
                        margin-top:0;
                    }
                    &:hover{
                        background-color:rgba(0,0,0,.05);
                    }
                }
            }
            &:nth-child(1){
                margin-top: 0;
            }
        }
        &>div{
            // margin-top:3%;
            &:nth-child(1){
                 
            }
        }
    }
</style>