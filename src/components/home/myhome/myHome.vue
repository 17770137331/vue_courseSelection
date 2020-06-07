<template>
    <div class="pageHome">
        <Header></Header>
        <main class="main">
            <Sider class="left"></Sider>
            <div class="sider">
                <Nav></Nav>
                <router-view></router-view>
                <!-- <Item></Item> -->
                <el-pagination
                class="pagin"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="current"
                :page-sizes="[2, 4, 6]"
                :page-size="size"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
                </el-pagination>
            </div>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../header'
import Sider from './sider'
import Nav from './nav'
// import Item from './item'
import Footer from '../footer'
import { mapState, mapActions } from 'vuex'
    export default {
        created() {
        },
        data() {
            return {
            }
        },
        methods: {
            ...mapState(['Yxpage']),
            ...mapActions(['getYxItem']),
            handleSizeChange(item) {
                this.getYxItem({
                    user: localStorage.getItem('user'),
                    skip: 0,
                    limit: item
                })
            },
            handleCurrentChange(item) {
                // console.log(item)
                this.getYxItem({
                    user: localStorage.getItem('user'),
                    skip: item,
                    limit: this.size
                })
            }
        },
        computed: {
            total() {
                return this.Yxpage().total
            },
            size() {
                return +this.Yxpage().size
            },
            current() {
                return +this.Yxpage().current
            }
        },
      components: {
          Header,
          Sider,
          Nav,
        //   Item,
          Footer
      }
    }
</script>

<style lang="less" scoped>
.pageHome{
    width: 100%;
    background-color: #f5f5f5;
    .main{
        width: 1000px;
        margin: 0 auto;
        overflow: hidden;
        .left{
            float: left;
        }
        .sider{
            overflow: hidden;
        }
    }
    .pagin{
       display: flex;
    //    justify-content: center;
       margin: 20px;
    }
}
</style>