<template>
   <div id="resume">
       <!-- 个人资料 -->
      <div class="tab">
           <table border='1'>
            <tr>
                <th colspan="6">个人资料</th>
            </tr>
            <tr>
                <td>姓名</td>
                <td colspan="2">赵为永</td>
                <td>年龄</td>
                <td colspan="2">{{age}}</td>
            </tr>
             <tr>
                <td>籍贯</td>
                <td colspan="2">安徽</td>
                <td>电话</td>
                <td colspan="2">18217347503</td>
            </tr>
       </table>
      </div>
       <!-- 项目经验 -->
      
        <div class="pro">
            <el-divider content-position="left">项目经验</el-divider>
            <el-collapse v-model="activeName" accordion>
             
            <el-collapse-item  v-for="(item,index) in list" :key="index" :title="item.title" :name="index">
                <div> 所用技术：<span v-for="(items,indexs) in item.tech" :key="indexs">{{indexs == item.tech.length - 1 ? items : items + '、'}}</span></div>
                <div>项目描述：{{item.des}}</div>
                <div>时间：{{item.time}}</div>
            </el-collapse-item>
        </el-collapse>
        </div>
   </div>
</template>
<script>
export default {
    data(){
        return {
            activeName: 0,
            userAge:'',
            age:'',
            list:[
                {
                    title:'高顿财务',
                    time:'2019.05.20',
                    tech:['vue','element-ui','javascript','css3'],
                    des:'财务系统',
                },
                {
                    title:'高盎后台',
                    time:'2019.05.20',
                    tech:['vue','element-ui','javascript','css3'],
                    des:'后台管理系统',
                }
            ]
        }
    },
    mounted(){
       this.getage();
    },
    methods:{
         getage() {
            let date=new Date;
            let year=date.getFullYear(); 
            let month=date.getMonth()+1;
            var strDate = date.getDate();
            let age = year - 1993;
            if(''+ month + strDate -718 <= 0){
                this.age = age - 1
            }else{
                this.age = age
            }
           
        },
        
    }
}
</script>
<style lang="scss">
    #resume{
        .tab{
            padding:10px !important;
            table{
            border-collapse:collapse;
            width: 100%;
            background-color: #fff;
            margin-bottom: 30px;
            &,td, th {
                border:1px solid #eee;
            }
            td,th{
                width: 136.66px;
                height: 60px;
            }
            th{
                font-weight: 600;
            }
        }
        }
        &>.pro{
            padding: 1px 10px 0 10px;
            background-color: #fff;
            .el-collapse-item__header{
                font-size: 16px;
                font-weight: 600;
            }
            .el-collapse-item__wrap{
                .el-collapse-item__content{
                    padding:0 1em 10px 0;
                    &>div{
                        font-size: 16px;
                        text-align:left;
                    }
                }
            }
        }
        
    }
</style>