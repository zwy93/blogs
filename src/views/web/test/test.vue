<template>
    <div>
        <input type="file" name="file" @change="imgPreview($event)">
    </div>
</template>
<script>
export default {
    data(){
        return{
            id:''
        }
    },
    mounted(){
        this.id = this.$route.query.id;
        console.log(this.id);
    },
    methods:{
        imgPreview(e){
            var reader = new FileReader();
            var AllowImgFileSize = 2100000;
            var file = e.target.files[0];
            var image = new Image();
            var imgUrlBase64;
            if (file) {
                //将文件以Data URL形式读入页面  
                imgUrlBase64 = reader.readAsDataURL(file);
                reader.onload = function (e) {
                if (AllowImgFileSize != 0 && AllowImgFileSize < reader.result.length) {
                        alert( '上传失败，请上传不大于2M的图片！');
                        return;
                    }else{
                        //执行上传操作
                        console.log(reader.result);
                    }
                }
            }   
        },
        getorientation(file) {
            EXIF.getData (file, function () {
            //获取图像的全部数据，值以对象的方式返回
            EXIF.getAllTags (this);
            // 获取图像的某个数据
            let Orientation = EXIF.getTag (this, 'Orientation');
            return Orientation;
      });
}
      
    }
}
</script>
<style lang="scss">
    div{

    }
</style>