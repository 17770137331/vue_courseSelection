<template>
    <div class="pageHome">
        <Header></Header>
        <main class="main">
            <Sider class="left"></Sider>
            <div class="sider">
                <Nav></Nav>
                <Item></Item>
                <el-pagination
                class="pagin"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
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
import Header from './header'
import Sider from './sider'
import Nav from './nav'
import Item from './item'
import Footer from './footer'
import { mapState, mapActions } from 'vuex'
    export default {
        data() {
            return {
            }
        },
        methods: {
            ...mapState(['page', 'item']),
            ...mapActions(['getItem']),
            handleSizeChange(item) {
                console.log(item)
                this.getItem({
                    value: this.title,
                    skip: 1,
                    limit: item
                })
            },
            handleCurrentChange(item) {
                this.getItem({
                    value: this.title,
                    skip: item,
                    limit: this.size
                })
            }
        },
        computed: {
            size() {
                return +this.page().size
            },
            total() {
                return +this.page().total
            },
            currentPage() {
                return +this.page().current
            },
            title() {
                return this.item()
            }
        },
      components: {
          Header,
          Sider,
          Nav,
          Item,
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