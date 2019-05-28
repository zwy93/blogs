<template>
    <div id="mesBoard">
        <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="留言内容" prop="textarea" 
                :rules="[
                    { required: true, message: '留言内容不能为空'},
                ]">
                <el-input type="textarea" placeholder="请输入内容" v-model.trim="ruleForm.textarea" autocomplete="off" required></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForms('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>



        <ul class="meslist">
            <li v-for="(item,index) in mesList" :key="index">
               <div class="clearfix">
                    <el-image :src="item.img" alt=""></el-image>
                    <div>
                        <b>{{item.name}}</b>
                        <p>{{item.mes}}</p>
                        <p><span>{{item.time}}</span><i>1</i></p>
                    </div>
               </div>
                <ul>
                    <li v-for="(items,indexs) in item.lists" :key="indexs">
                       <div class="clearfix">
                            <el-image :src="items.img" alt=""></el-image>
                            <div>
                                <b>{{items.name1}}回复{{items.name2}}</b>
                                <p>{{items.mes}}</p>
                                <p><span>{{items.time}}</span><i>1</i></p>
                            </div>
                       </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            ruleForm: {
               textarea:'',
               time:''
            },
            mesList:[
                {
                    img:'//qzapp.qlogo.cn/qzapp/101491369/20BFFE4A6B96BFED2E111AC8A496E246/50',
                    name:'旋风小子',
                    mes:'厉害厉害',
                    time:'2019年5月20日'
                },{
                    img:'//qzapp.qlogo.cn/qzapp/101491369/20BFFE4A6B96BFED2E111AC8A496E246/50',
                    name:'旋风小子',
                    mes:'厉害厉害',
                    time:'2019年5月20日',
                    lists:[
                        {
                            name1:'博主',
                            name2:'旋风小子',
                            img:'//qzapp.qlogo.cn/qzapp/101491369/A77BAC8EC84DD153358999127336293B/50',
                            mes:'一般一般',
                            time:'2019年5月20日',
                        }
                    ]
                },{
                    img:'//qzapp.qlogo.cn/qzapp/101491369/20BFFE4A6B96BFED2E111AC8A496E246/50',
                    name:'旋风小子',
                    mes:'厉害厉害',
                    time:'2019年5月20日'
                },{
                    img:'//qzapp.qlogo.cn/qzapp/101491369/20BFFE4A6B96BFED2E111AC8A496E246/50',
                    name:'旋风小子',
                    mes:'厉害厉害',
                    time:'2019年5月20日'
                },{
                    img:'//qzapp.qlogo.cn/qzapp/101491369/20BFFE4A6B96BFED2E111AC8A496E246/50',
                    name:'旋风小子',
                    mes:'厉害厉害',
                    time:'2019年5月20日'
                },
            ]
        }
    },
    methods:{
        submitForms(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                   let myDate = new Date();
                   this.ruleForm.time = myDate.getFullYear() + '年' + (myDate.getMonth() + 1) + '月' + myDate.getDate() + '日'
                   console.log(this.ruleForm)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
         resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
    filters:{
        getLocalTime(val) {     
            return new Date(parseInt(val) * 1000).toLocaleString().substr(0,17)     
        }
    }

}
</script>
<style lang="scss">
    #mesBoard{
        .meslist{
            border-radius: 7px;
            background-color: #fff;
            li{
                padding:10px;
                border-bottom:1px solid #eee;
                &:nth-child(1){
                    border-top:1px solid #eee;
                }
               &>div{
                    &>img{
                    float: left;
                    width: 50px;
                    height: 50px;
                    margin-right: 10px;
                   
                    }
                    &>div{
                        float: left;
                        font-size:14px;
                        text-align: left;
                        b{
                            color:#d33;
                        }
                    }
               }
                ul{
                    padding:0 30px;
                    li{
                    &:last-child{
                        border-bottom: none;
                    }
                    &>div{
                        img{
                            float: left;
                            width: 35px;
                            height: 35px;
                            margin-right: 10px;
                        }
                    }
                }
                }
            }
        }
    }
    
</style>