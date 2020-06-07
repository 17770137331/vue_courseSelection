<template>
    <div class="pageHeader">
        <header>
            <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
                <el-menu-item>
                    <img src="../../assets/login.jpg" alt="" class="login">
                </el-menu-item>
                <el-menu-item index="1" @click="index">首页</el-menu-item>
                <el-submenu index="2" class="quactive">
                    <template slot="title">职业</template>
                    <el-menu-item index="2-1" @click="fn">选项1</el-menu-item>
                    <el-menu-item index="2-2" @click="fn">选项2</el-menu-item>
                    <el-menu-item index="2-3" @click="fn">选项3</el-menu-item>
                </el-submenu>
                <el-submenu index="3" class="quactive">
                    <template slot="title">课程</template>
                    <el-menu-item index="2-1" @click="fn">选项1</el-menu-item>
                    <el-menu-item index="2-2" @click="fn">选项2</el-menu-item>
                    <el-menu-item index="2-3" @click="fn">选项3</el-menu-item>
                </el-submenu>
                <el-submenu index="4" class="quactive">
                    <template slot="title">企业</template>
                    <el-menu-item index="2-1" @click="fn">选项1</el-menu-item>
                    <el-menu-item index="2-2" @click="fn">选项2</el-menu-item>
                    <el-menu-item index="2-3" @click="fn">选项3</el-menu-item>
                </el-submenu>
                <el-submenu index="5" class="quactive">
                    <template slot="title">社区</template>
                    <el-menu-item index="2-1" @click="fn">选项1</el-menu-item>
                    <el-menu-item index="2-2" @click="fn">选项2</el-menu-item>
                    <el-menu-item index="2-3" @click="fn">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item class="quactive" index="6" @click="fn">实战营</el-menu-item>
                <el-menu-item>
                    <el-input v-model="aa" size="mini" placeholder="搜索课程、Wiki" class="input-with-select he">
                        <el-button @click="fn" slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-menu-item>
                <el-menu-item v-if="!login">
                    <router-link to="login" class="margin">登录</router-link>
                    |
                    <router-link to="resgiter">注册</router-link>
                </el-menu-item>
                <el-menu-item v-if="login" class="img">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                            <span slot="title" class="color">{{ login }}</span>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item @click.native="study">学习中心</el-dropdown-item>
                            <el-dropdown-item @click.native="signout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-menu-item>
            </el-menu>
        </header>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        created() {
            console.log(this.isLogin())
        },
        data() {
            return {
                aa: ''
            }
        },
        methods: {
            ...mapState(['isLogin', 'user']),
            index() {
                this.$router.push('/')
            },
            study() {
                this.$router.push('/MyHome')
            },
            signout() {
                localStorage.removeItem('user')
                this.$router.push('/')
            },
            fn() {
                this.$message('暂时无法使用')
            }
        },
        computed: {
            login() {
                return window.localStorage.getItem('user')
            },
            name() {
                return this.user()
            }
        }
    }
</script>

<style lang="less" scoped>
.pageHeader{
    height: 70px;
    background-color: white;
    header{
        width: 1000px;
        height: inherit;
        margin: 0 auto;
        .login{
            margin-top: 5px;
            height: 60px;
        }
        .margin{
            margin-left: 10px;
        }
    }
}
</style>