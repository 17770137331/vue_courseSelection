<template>
   <el-container class="content">
    <el-header class="header">
        <div>后台管理系统</div>
        <div>
            <el-button type="primary" @click="tuicu">退出</el-button>
        </div>
    </el-header>
    <el-container>
        <el-aside width="200px" class="aside">
            <el-menu
            class="menu"
            unique-opened
            router
            >
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-user-solid"></i>
                    <span>用户信息</span>
                </template>
                <el-menu-item index="user">
                    <i class="el-icon-menu"></i>
                    <span slot="title">用户列表</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-s-order"></i>
                    <span>课程信息</span>
                </template>
                <el-menu-item index="curriculums">
                    <i class="el-icon-menu"></i>
                    <span slot="title">课程列表</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-s-claim"></i>
                    <span>选课信息</span>
                </template>
                <el-menu-item index="courseSelection">
                    <i class="el-icon-menu"></i>
                    <span slot="title">选课管理</span>
                </el-menu-item>
            </el-submenu>
            </el-menu>
        </el-aside>
        <el-main class="main">
            <router-view></router-view>
        </el-main>
    </el-container>
</el-container>
</template>

<script>
    export default {
       data() {
           return {
               
           }
       },
        methods: {
            tuicu() {
                this.$router.push('/admin')
            }
        }
    }
</script>

<style lang="less" scoped>
.content{
    width: 100%;
    height: 100%;
.header{
   background: black;
   color: white;
   display: flex;
   justify-content:space-between;
   align-items: center;
   font-size: 25px;
}
.aside{
    .menu {
        height: 100%;
    }
}
.main{
    background: #eaedf1;
}
}
</style>