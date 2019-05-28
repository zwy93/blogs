<template>
        <div>
            <el-timeline>
                <el-timeline-item :timestamp="item.time" placement="top" v-for="(item , index) in list" :key="index">
                <el-card>
                    <h4>{{item.title}}</h4>
                    <p>{{item.name}} 提交于 {{item.time}}</p>
                </el-card>
                </el-timeline-item>
            </el-timeline>
        </div>
</template>
<script>
export default {
    data(){
        return {
            list:[
                {
                    title:'更新 blogs 模板',
                    name:'赵为永',
                    time:'2019.05.20'
                },
                {
                    title:'更新 blogs 模板',
                    name:'赵为永',
                    time:'2019.05.19'
                },
                {
                    title:'更新 blogs 模板',
                    name:'赵为永',
                    time:'2019.05.18'
                },
                {
                    title:'更新 blogs 模板',
                    name:'赵为永',
                    time:'2019.05.17'
                },
            ]
        }
    }
}
</script>
<style lang="scss">
    
</style>