<template>
    <div class="siderPage">
        <!-- <div class="font">
            首页 > 职业课程库 > 前端开发
        </div> -->
        <el-breadcrumb separator-class="el-icon-arrow-right" class="font">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>职业课程库</el-breadcrumb-item>
            <el-breadcrumb-item class="bread">{{ title }}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-menu
      class="el-menu-vertical-demo menu menu2"
      >
      <el-menu-item id="color">
          <i class="el-icon-video-camera-solid color"></i>
        <span slot="title" class="color">课程库</span>
      </el-menu-item>
      <el-menu-item @click="qianduan">
        <span slot="title" index='2'>前端开发</span>
      </el-menu-item>
      <el-menu-item @click="yidong">
        <span slot="title">移动开发</span>
      </el-menu-item>
      <el-menu-item @click="houduan">
        <span slot="title">后端开发</span>
      </el-menu-item>
      <el-menu-item @click="rengongzhineng">
        <span slot="title">人工智能</span>
      </el-menu-item>
      <el-menu-item @click="zhinengyingjian">
        <span slot="title">智能硬件/物联网</span>
      </el-menu-item>
      <el-menu-item @click="sheji">
        <span slot="title">设计/产品/测试</span>
      </el-menu-item>
      <el-menu-item @click="yunjisuan">
        <span slot="title">云计算/大数据</span>
      </el-menu-item>
      <el-menu-item @click="jishuzhicheng">
        <span slot="title">技术支撑</span>
      </el-menu-item>
    </el-menu>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
    export default {
        data() {
          return {
          }
        },
        methods: {
          ...mapActions(['getItem']),
          ...mapState(['item']),
            qianduan() {
              this.getItem({
                value: '前端开发',
                skip: 0,
                limit: 6
              })
            },
            yidong() {
              this.getItem({
                value: '移动开发',
                skip: 0,
                limit: 6
              })
            },
            houduan() {
              this.getItem({
                value: '后端开发',
                skip: 0,
                limit: 6
              })
            },
             rengongzhineng() {
              this.getItem({
                value: '人工智能',
                skip: 0,
                limit: 6
              })
            },
             zhinengyingjian() {
              this.getItem({
                value: '智能硬件/物联网',
                skip: 0,
                limit: 6
              })
            },
             sheji() {
              this.getItem({
                value: '设计/产品/测试',
                skip: 0,
                limit: 6
              })
            },
             yunjisuan() {
              this.getItem({
                value: '云计算/大数据',
                skip: 0,
                limit: 6
              })
            },
             jishuzhicheng() {
              this.getItem({
                value: '技术支撑',
                skip: 0,
                limit: 6
              })
            }
        },
        computed: {
          title() {
            return this.item()
          }
        }
    }
</script>

<style lang="less" scoped>
.siderPage{
    width: 195px !important; 
    // overflow: hidden;
    margin-top: 20px;
    margin-left: 20px;
}
.menu{
    width: 200px;
}
.color{
    color: #409EFF;
}
.font{
    font-size: 13px;
    margin-bottom: 20px;
    width: 300px;
    // position: absolute;
    // left: 280px;
    // top: 88px;
}
</style>