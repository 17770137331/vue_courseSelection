<template>
    <div class="siderPage">
        <!-- <div class="font">
            首页 > 职业课程库 > 前端开发
        </div> -->
        <el-breadcrumb separator-class="el-icon-arrow-right" class="font">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>学习中心</el-breadcrumb-item>
        </el-breadcrumb>
        <el-menu
      default-active="2"
      class="el-menu-vertical-demo menu menu3"
      >
      <el-menu-item id="color2">
         <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <span slot="title" class="color">{{ name }}</span>
      </el-menu-item>
      <el-menu-item index="2" @click="myStudy">
          <i class="el-icon-collection"></i>
        <span slot="title">我的课程</span>
      </el-menu-item>
      <el-menu-item index="1" @click="myZhiYe">
        <i class="el-icon-picture-outline-round"></i>
        <span slot="title">我的职业</span>
      </el-menu-item>
      <el-menu-item index="3" @click="myJiuYeBan">
        <i class="el-icon-data-line"></i>
        <span slot="title">我的就业班</span>
      </el-menu-item>
    </el-menu>
    </div>
</template>

<script>
    export default {
        methods: {
          myStudy() {
            this.$router.push('/myhome')
          },
          myZhiYe() {
            this.$router.push('/myhome/myZhiYe')
          },
          myJiuYeBan() {
            this.$router.push('/myhome/myJiuYeBan')
          }
        },
        computed: {
          name() {
            return localStorage.getItem('user')
          }
        }
    }
</script>

<style lang="less" scoped>
.siderPage{
    width: 195px !important; 
    overflow: hidden;
    margin-top: 20px;
    margin-left: 20px;
}
.menu{
    width: 209px;
}
.font{
    font-size: 13px;
    margin-bottom: 20px;
}
.color{
    padding-left: 10px;
}
</style>