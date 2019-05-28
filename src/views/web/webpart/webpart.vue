<template>
    <div id="webpart">
       <div class="con">
           <h2>
           {{webpart.title}}
            </h2>
            <p><span>时间：{{webpart.createTime}}</span><span> 阅览数：{{webpart.readNum}}</span></p>
            <div>
                {{webpart.con}}
            </div>
       </div>
       <div class="comment">

       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            webpart:{
                    title:'论css的重要性',
                    con:'css的十分重要，给前端页面带来了生机，css的十分重要，给前端页面带来了生机，css的十分重要，给前端页面带来了生机，css的十分重要，给前端页面带来了生机，css的十分重要，给前端页面带来了生机，css的十分重要，给前端页面带来了生机，css的十分重要，给前端页面带来了生机，css的十分重要，给前端页面带来了生机，',
                    img:'https://cdn.duanliang920.com/uploads/allimg/170116/1-1F1162135520-L.jpg',
                    id:'css1',
                    createTime:'2019.05.21',
                    class:'css',
                    like:'2230',
                    comment:'50',
                    readNum:'3000'
                }
            
        }
    },
    mounted(){
        this.id = this.$route.query.id;
        console.log(this.id);
    },
    methods:{
       
      
    }
}
</script>
<style lang="scss">
    #webpart{
        .con{
            p{
                span{
                    display: inline-block;
                    margin:10px;
                }
            }
            &>div{
                text-indent: 2em;
                text-align: left;
                font-size: 16px;
                line-height: 25px;
            }
        }
        .comment{
            
        }
    }
</style>