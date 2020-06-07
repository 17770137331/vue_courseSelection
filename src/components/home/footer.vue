<template>
    <div class="footer">
        <div class="img">
            <div class="img1"></div>
            <div class="img2"></div>
            <div class="img3"></div>
            <div class="img4"></div>
        </div>
        <div class="text">关于我们 | 加入我们 | 联系我们 | 企业合作 | 讲师合作 | 帮助中心 | 黑板报| 友情链接</div>
        <div>Copyright © 2013-2018 jikexueyuan.com All Rights Reserved. 京ICP备11018032号 京公网安备11010802013056</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.footer{
    text-align: center;
    width: 100%;
    height: 132px;
    background-color: white;
    font-size: 12px;
    .text{
        margin-bottom: 10px;
    }
    .img{
        display: flex;
        justify-content: center;
        div{
            width:22px;
            height: 18px;
            margin: 20px;
        }
        .img1{
            background-image: url('../../assets/otherway.png');
            background-repeat: no-repeat;
        }
        .img2{
            background-image: url('../../assets/otherway.png');
            background-repeat: no-repeat;
            background-position: -28px 0px;
        }
        .img3{
            background-image: url('../../assets/otherway.png');
            background-repeat: no-repeat;
            background-position: -52px 0px;
        }
        .img4{
            background-image: url('../../assets/otherway.png');
            background-repeat: no-repeat;
            background-position: -77px 0px;
        }
    }
}
</style>