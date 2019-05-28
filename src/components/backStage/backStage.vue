<template>
    <div id="backstage">
        <!-- <left></left> -->
        <router-view class="con"></router-view>
    </div>
</template>
<script>
import left from './layout/leftlist/index'
export default {
    components:{left},
    data(){
        
        return{
            
        }
    }
}
</script>
<style lang="scss">
    .con{
        width: calc(100% - 170px);
        margin-left:170px;
    }
</style>