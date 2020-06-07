<template>
    <div class="pageItem">
        <dl v-for="(item, index) in list" :key="index">
            <dt><img :src="item.prcture" alt=""></dt>
            <dd class="dd1">{{ item.name }}</dd>
            <dd class="dd2">
                <i class="el-icon-user-solid"></i>
                <span> {{ item.teacher }}</span>
                <span class="right">{{ item.credit }}学分</span>
            </dd>
            <dd class="dd3">
                <i class="iconfont icon-shijian"></i> {{ item.classhuor }}
                <el-tooltip class="item" effect="dark" content="加入课程" placement="top-start">
                       <i class="iconfont icon-baocun" @click="add(item.name)"></i>
                </el-tooltip>
            </dd>
        </dl>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
    export default {
        async created() {
            this.getItem({
                value: '前端开发',
                skip: 0,
                limit: 6
            })
        },
        mounted() {
        },
        data() {
            return {
                
            }
        },
        methods: {
            ...mapActions(['getItem']),
            ...mapState(['getItemList']),
            async add(item) {
                if (!localStorage.getItem('user')) {
                    this.$router.push('/login')
                    this.$message.success('请先登录')
                    return null
                }
                const { data } = await this.$http.post('/addStudy', {
                    study: item,
                    user: localStorage.getItem('user')
                })
                if (data.state === 200) {
                    this.$message.success(data.msg)
                } else {
                    this.$message.error('添加失败！')
                }
            }
        },
        computed: {
            list() {
                return this.getItemList().data
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