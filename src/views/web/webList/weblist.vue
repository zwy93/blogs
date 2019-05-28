<template>
    <div id="web">
        <ul class='clearfix'>
            <li v-for="(item,index) in weblist" :key="index" :class="index == indexs ? 'on' :''" @click="addon(index)">
                    <el-image :src="item.img" alt=""></el-image>
                    <p>{{item.title}}</p>
            </li>
        </ul>
        <ol>
            <li v-for="(item,index) in webcon" :key="index" class="clearfix">
                <div @click="addweb(item.id)">
                    <div>
                        <el-image :src="item.img"></el-image>
                    </div>
                    <div>
                        <div class="clearfix">
                            <h4>{{item.title}}</h4>
                            <span>
                                分类：{{item.class}}
                            </span>
                        </div>
                        <p>{{item.con}}</p>
                        <p class="time">{{item.createTime}}</p>
                    </div>
                </div>
            </li>
        </ol>
       
    </div>
</template>
<script>
export default {
    data(){
        return{
            weblist:[
                {
                    img:require('../../../assets/html5.svg'),
                    url:'/',
                    title:'html'
                },{
                    img:require('../../../assets/css3.svg'),
                    url:'/css',
                    title:'css'
                },{
                    img:require('../../../assets/javascript.svg'),
                    url:'/js',
                    title:'javascript'
                },{
                    img:require('../../../assets/jquery.svg'),
                    url:'/jq',
                    title:'jquery.js'
                },{
                    img:require('../../../assets/vuejs.svg'),
                    url:'/vue',
                    title:'vuejs.js'
                },
                {
                    img:require('../../../assets/more.svg'),
                    url:'/more',
                    title:'更多'
                },
            ],
            indexs:0,
            webcon:[
                {
                    title:'论css的重要性',
                    con:'css的十分重要，给前端页面带来了生机，css的十分重要，给前端页面带来了生机，css的十分重要，给前端页面带来了生机，css的十分重要，给前端页面带来了生机，css的十分重要，给前端页面带来了生机，css的十分重要，给前端页面带来了生机，css的十分重要，给前端页面带来了生机，css的十分重要，给前端页面带来了生机，',
                    img:'https://cdn.duanliang920.com/uploads/allimg/170116/1-1F1162135520-L.jpg',
                    id:'css1',
                    createTime:'2019.05.21',
                    class:'css',
                    like:'2230',
                    comment:'50',
                },{
                    title:'论css的重要性',
                    con:'css的十分重要，给前端页面带来了生机，',
                    img:'https://cdn.duanliang920.com/uploads/allimg/170116/1-1F1162135520-L.jpg',
                    id:'css1',
                    createTime:'2019.05.21',
                    class:'css',
                    like:'2230',
                    comment:'50',
                },{
                    title:'论css的重要性',
                    con:'css的十分重要，给前端页面带来了生机，',
                    img:'https://cdn.duanliang920.com/uploads/allimg/170116/1-1F1162135520-L.jpg',
                    id:'css1',
                    createTime:'2019.05.21',
                    class:'css',
                    like:'2230',
                    comment:'50',
                },{
                    title:'论css的重要性',
                    con:'css的十分重要，给前端页面带来了生机，',
                    img:'https://cdn.duanliang920.com/uploads/allimg/170116/1-1F1162135520-L.jpg',
                    id:'css1',
                    createTime:'2019.05.21',
                    class:'css',
                    like:'2230',
                    comment:'50',
                },{
                    title:'论css的重要性',
                    con:'css的十分重要，给前端页面带来了生机，',
                    img:'https://cdn.duanliang920.com/uploads/allimg/170116/1-1F1162135520-L.jpg',
                    id:'css1',
                    createTime:'2019.05.21',
                    class:'css',
                    like:'2230',
                    comment:'50',
                },{
                    title:'论css的重要性',
                    con:'css的十分重要，给前端页面带来了生机，',
                    img:'https://cdn.duanliang920.com/uploads/allimg/170116/1-1F1162135520-L.jpg',
                    id:'css1',
                    createTime:'2019.05.21',
                    class:'css',
                    like:'2230',
                    comment:'50',
                },{
                    title:'论css的重要性',
                    con:'css的十分重要，给前端页面带来了生机，',
                    img:'https://cdn.duanliang920.com/uploads/allimg/170116/1-1F1162135520-L.jpg',
                    id:'css1',
                    createTime:'2019.05.21',
                    class:'css',
                    like:'2230',
                    comment:'50',
                },{
                    title:'论css的重要性',
                    con:'css的十分重要，给前端页面带来了生机，',
                    img:'https://cdn.duanliang920.com/uploads/allimg/170116/1-1F1162135520-L.jpg',
                    id:'css1',
                    createTime:'2019.05.21',
                    class:'css',
                    like:'2230',
                    comment:'50',
                },{
                    title:'论css的重要性',
                    con:'css的十分重要，给前端页面带来了生机，',
                    img:'https://cdn.duanliang920.com/uploads/allimg/170116/1-1F1162135520-L.jpg',
                    id:'css1',
                    createTime:'2019.05.21',
                    class:'css',
                    like:'2230',
                    comment:'50',
                },
            ]
        }
    },
    methods:{
        addon(val){
            this.indexs = val
        },
        addweb(val){
            this.$router.push({path:'/webpart',query:{id:val}})
             
        }
    }
}
</script>
<style lang="scss">
    #web{
        &>ul{
            border-radius: 5px;
            background-color: #fff;
            li{
                float: left;
                width: 100px;
                padding:12px 5px 10px 5px;
                margin-left:48px;
                cursor: pointer;
                &:nth-child(1){
                    margin-left: 0;
                }
                &.on{
                    box-shadow: 2px 2px 10px #aaa;
                }
                &:hover{
                    box-shadow: 2px 2px 10px #aaa;
                }
                img{
                    width: 60%;
                    margin:0 auto;
                    margin-bottom:5px;
                }
                p{
                    font-size: 16px;
                }
            }
        }
        &>ol{
            margin-top:30px;
            li{
                margin-bottom: 15px;
                background-color: #fff;
                cursor: pointer;
                &>div{
                    &>div{
                        float: left;
                        text-align: left;
                        &:nth-child(1){
                            margin-right: 10px;
                            font-size: 0;
                        }
                        &:nth-child(2){
                            position: relative;
                            width: 680px;
                            height: 100px;
                           padding-top: 5px;
                           &>div{
                               height: 28px;
                               h4{
                                   margin-right: 10px;
                                   font-size: 18px;
                               }
                               span{
                                   line-height: 35px;
                                   font-size: 14px;
                                   vertical-align:text-bottom; 
                               }
                           }
                           &>p{
                               &:nth-child(2){
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    display: -webkit-box;
                                    -webkit-line-clamp: 2;
                                    -webkit-box-orient: vertical;
                               }
                           }
                           &>.time{
                               position: absolute;
                               bottom: 5px;
                               font-size: 12px;
                               color: #333;
                           }
                        }
                        &>div{
                            h4{
                                float: left;
                            }
                            span{
                                // float: left;
                            }
                        }
                    }
                }
            }
        }
    }
</style>