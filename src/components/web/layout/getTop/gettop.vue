<template>
    <div id="gettop">
        <ul class="clearfix">
            <transition name="el-zoom-in-bottom">
                <li v-show="showTop" @click="gettop">
                    <i class="el-icon-arrow-up"></i>
                </li>
            </transition>
            <li>
                <i class="el-icon-chat-line-round"></i>
            </li>
            <li>
                 <i class="el-icon-refresh"></i>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'getTop',
   props:['showTop'],
    data(){
        return{
            
        }
    },
    methods:{
        gettop(){
            let scrollToptimer = setInterval(function () {
                console.log("定时循环回到顶部")
                var top = document.body.scrollTop || document.documentElement.scrollTop;
                var speed = top / 4;
                if (document.body.scrollTop!=0) {
                    document.body.scrollTop -= speed;
                }else {
                    document.documentElement.scrollTop -= speed;
                }
                if (top == 0) {
                    clearInterval(scrollToptimer);
                }
            }, 30);
        }
    }
}
</script>
<style lang="scss">
    #gettop{
        position: fixed;
        left: 50%;
        margin-left:600px;
        bottom: 100px;
        z-index: 1000;
        ul{
            width: 50px;
            border-top:none;
            li{
                display:flex;
               align-items:center;
                justify-content:center;
                width: 50px;
                height: 50px;
                border-left:1px solid #ccc;
                border-right:1px solid #ccc;
                border-top:1px solid #ccc;
                background-color: #fff;
                cursor: pointer;
                &:last-child{
                   border-bottom:1px solid #ccc; 
                }
                &.on{
                    display: none;
                }
                i{
                   &::before{
                       font-size: 25px;
                       transition: all .2s;
                   } 
                   
                }
                &:hover{
                    i{
                        &::before{
                            font-size: 28px;
                        }
                    }
                }
            }
        }
    }
</style>