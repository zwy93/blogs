<template>
    <div>
        111
    </div>
</template>
<script>
export default {
    data(){
        return{
            data1:{
                code:0,
                data:{
                    blacklistVo:{
                        inBlackList:false,
                        risk:null
                    },
                    creditScoreVo:{
                        type:''
                    },
                    a:''
                }
            }
        }
    },
    mounted(){
        this.id = this.$route.query.id;
        this.add()
    },
    methods:{
        add(){
            var sc = this.data1.data.scorVo || []
            if(sc){
                console.log(sc);
            }
            
            console.log(this.data1.data.a.length);
            console.log(this.data1.data.blacklistVo);
        }
    },
          
}
</script>
<style lang="scss">
    div{
        
    }
</style>