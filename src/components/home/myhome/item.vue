<template>
    <div class="pageItem">
        <dl v-for="(item, index) in list" :key="index">
            <dt><img :src="item.study.prcture" alt=""></dt>
            <dd>{{ item.study.name }}</dd>
            <dd>
                <i class="el-icon-user-solid"></i>
                <span>{{ item.study.teacher }}</span>
                <span class="right">{{ item.study.credit }}学分</span>
            </dd>
            <dd>
                <i class="iconfont icon-shijian"></i> {{ item.study.classhuor }}
                <el-tooltip class="item" effect="dark" content="删除课程" placement="top-start">
                    <i class="el-icon-delete-solid" @click="de(item.study.name)"></i>
                </el-tooltip>
            </dd>
        </dl>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
    export default {
        created() {
            this.getYxItem({
                user: localStorage.getItem('user'),
                skip: 0,
                limit: 6
            })
        },
        methods: {
            ...mapActions(['getYxItem']),
            ...mapState(['getYxItemList']),
            async de(item) {
                // console.log(item)
                await this.$http.get('/delete', {
                    params: {
                        user: localStorage.getItem('user'),
                        study: item
                    }
                })
                this.getYxItem({
                    user: localStorage.getItem('user'),
                    skip: 0,
                    limit: 6
                })
                // console.log(list)
            }
        },
        computed: {
            list() {
                return this.getYxItemList()
            }
        }
    }
</script>

<style lang="less" scoped>
.pageItem{
    min-height: 545px;
    margin: 0 0 0 20px;
    width: 775px;
    dl{
        float: left;
        width: 245px;
        height: 243px;
        // height: auto;
        background-color: white;
        margin-right: 13px;
        margin-bottom: 13px;
        dd{
            font-size: 14px;
            color: #666;
            margin: 10px !important;
            i{
                color: #666;
            }
            .right{
                float: right;
            }
        }
        img{
            width: 245px;
        }
        dd{
            margin: 0;
        }
    }
}
.item{
    float: right;
}
.pageItem::after{
    content: '';
    display: block;
    clear: both;
}
</style>