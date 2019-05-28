<template>
    <div id="leftlist" :class="{clickrf : fr}">
        <ul>
            <li v-for="(items,index) in nav"
                :key="index"
                @click="addblack(index)"
                :class="{on:index==isactive}">
                <div>
                <router-link :to="items.url" class="clearfix" @click="items.url == '/' ? router() :''">
                    <p>{{items.title}}</p>
                </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            nav:[
                {
                    title:'首页',
                    url:'/backStage/'
                },{
                    title:'前端小记',
                    url:'/backStage/web/'
                },{
                    title:'个人简介',
                    url:'/backStage/resume'
                },{
                    title:'时间轴',
                    url:'/backStage/timeShaft'
                },{
                    title:'留言板',
                    url:'/backStage/mesBoard'
                },{
                    title:'前台页面',
                    url:'/'
                }
            ],
              on: 'on',
            isactive: '',
            fr: false
        }
    },
    methods:{
        addblack (index) {
            console.log(1);
            this.isactive = index
        },
        router(){
            console.log('00')
            sessionStorage.setItem('onindex',0);
        }
    },
    
}
</script>
<style lang="scss">
    #leftlist {
        position: fixed;
        left: 0;
        top: 0;
        padding-top: 45px;
        width: 170px;
        height: calc(100vh - 45px);
        text-align: center;
        border-right: 1px solid #eee;
        transition: all 0.5s;
        background-color: #fff;
        z-index: 800;
    &.clickrf {
        width: 70px;
        li {
        position: relative;
        overflow: hidden;
        p {
            // display: none;
            opacity: 0;
            position: absolute;
            left: 90px;
            top: 50%;
            width: 90px;
            transform: translate(10%, -50%);
            background-color: #333;
            // transition: all 0.5s;
            color: #fff;
            &::before {
            position: absolute;
            content: "";
            height: 0;
            width: 0;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            border-right: 8px solid #333;
            top: 50%;
            left: 0;
            transform: translate(-100%, -50%);
            }
        }
        &:hover {
            overflow: inherit;
            p {
            // display: block;
            // transform: translate(0, -50%);
            animation: shows 1s forwards;
            -webkit-animation: shows 1s forwards;
            }
        }
        }
    }
    & > ul {
        li {
        padding: 20px 0;
        height: 75px;
        transition: all 0.5s;
        box-shadow: 30px;
        text-align: center;
        // overflow: hidden;
        p {
            // float: left;
            height: 35px;
            line-height: 35px;
            margin: 0;
            font-size: 18px;
        }
        & > div {
            height: 35px;
            // padding: 5px 0;
            box-sizing: border-box;
            // overflow: hidden;
            overflow-y: hidden;
        }
        &.on {
            & > div {
            border-radius: 0 30px 30px 0;
            background-color: #eee;
            }
        }
        &:hover {
            background-color: #eee;
        }
        }
    }
}
@keyframes shows {
  0% {
    display: none;
    opacity: 0;
    transform: translate(10%, -50%);
  }
  100% {
    opacity: 1;
    display: block !important;
    transform: translate(0, -50%);
  }
}
</style>