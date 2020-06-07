<template>
    <div>
        <el-card>
            <el-row :gutter="20" class="row">
               <el-col :span="8">
                    <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                        <el-button @click="search" slot="append" icon="el-icon-search"></el-button>
                    </el-input>
               </el-col>
           </el-row>
            <el-table
            border
            stripe
            :data="list"
            >
                <el-table-column type="expand" align="center">
                    <template slot-scope="scope" v-if="scope.row.data.length">
                        <el-tag @close="fn($event, scope.row)" class="tag" closable type="danger" v-for="(item, index) in scope.row.data" :key="index" >{{ item.study.name }}</el-tag>
                    </template>
                    
                </el-table-column>
                <el-table-column prop="user" label="用户名" ></el-table-column>
                <el-table-column prop="email" label="邮箱" ></el-table-column>
                <el-table-column prop="role" label="角色" ></el-table-column>
                <el-table-column label="状态" >
                    <template slot-scope="scope">
                       <el-switch
                        v-model="scope.row.state"
                        active-color="#13ce66"
                        @change="witch(scope.row.state)"                 
                        >
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                   <el-button @click="shancuUser(scope.row)" type="primary" icon="el-icon-s-tools" size="mini"></el-button>
                  </template>
                </el-table-column>
            </el-table>
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

                <el-dialog
                title="添加课程"
                :visible.sync="dialogVisible"
                width="50%"
                :before-close="handleClose">
                <el-cascader
                v-model="value"
                :options="options"
                :props="{ expandTrigger: 'hover' }"
                @change="handleChange"></el-cascader>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="handleClose">取 消</el-button>
                    <el-button type="primary" @click="tijiao">确 定</el-button>
                </span>
                </el-dialog>

        </el-card>
    </div>
</template>

<script>
    export default {
        created() {
            this.getList()
            this.getCurriculum()
        },
        mounted() {
        },
        data() {
            return {
                Curriculum: [],
                list: [],
                currentPage: 1,
                size: 6,
                total: 16,
                page: 6,
                input3: '',
                dialogVisible: false,
                value: [],
                scope: [],
                options: [
                    {
                        value: '前端开发',
                        label: '前端开发',
                        children: []
                    },
                    {
                        value: '移动开发',
                        label: '移动开发',
                        children: [
                            {
                                value: 'shejiyuanze',
                                label: '设计原则'
                            }
                        ]
                    },
                    {
                        value: '后端开发',
                        label: '后端开发',
                        children: [
                            {
                                value: 'shejiyuanze',
                                label: '设计原则'
                            }
                        ]
                    },
                    {
                        value: '人工智能',
                        label: '人工智能',
                        children: [
                            {
                                value: 'shejiyuanze',
                                label: '设计原则'
                            }
                        ]
                    },
                    {
                        value: '智能硬件/物联网',
                        label: '智能硬件/物联网',
                        children: [
                            {
                                value: 'shejiyuanze',
                                label: '设计原则'
                            }
                        ]
                    },
                    {
                        value: '设计/产品/测试',
                        label: '设计/产品/测试',
                        children: [
                            {
                                value: 'shejiyuanze',
                                label: '设计原则'
                            }
                        ]
                    },
                    {
                        value: '云计算/大数据',
                        label: '云计算/大数据',
                        children: [
                            {
                                value: 'shejiyuanze',
                                label: '设计原则'
                            }
                        ]
                    },
                     {
                        value: '技术支撑',
                        label: '技术支撑',
                        children: [
                            {
                                value: 'shejiyuanze',
                                label: '设计原则'
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            async getList() {
                const { data } = await this.$http.get('/UserAndCurriculum')
                this.list = data.data
                this.total = data.total
                console.log(123111111, this.list)
            },
             async getCurriculum() {
                const { data } = await this.$http.post('/curriculum', {
                    skip: 0,
                    limit: 1000
                })
                this.Curriculum = data.data
                this.total = data.total
                // 前端
                const array = data.data.filter((item) => {
                    if (item.value !== '前端开发') item = false
                    return item
                })
                const list = array.map((item) => {
                    return {
                        value: item.name,
                        label: item.name
                    }
                })
                this.options[0].children = list

                // 移动开发
                const array1 = data.data.filter((item) => {
                    if (item.value !== '移动开发') item = false
                    return item
                })
                const list1 = array1.map((item) => {
                    return {
                        value: item.name,
                        label: item.name
                    }
                })
                this.options[1].children = list1

                // 后端开发
                const array2 = data.data.filter((item) => {
                    if (item.value !== '后端开发') item = false
                    return item
                })
                const list2 = array2.map((item) => {
                    return {
                        value: item.name,
                        label: item.name
                    }
                })
                this.options[2].children = list2

                // 人工智能
                const array3 = data.data.filter((item) => {
                    if (item.value !== '人工智能') item = false
                    return item
                })
                const list3 = array3.map((item) => {
                    return {
                        value: item.name,
                        label: item.name
                    }
                })
                this.options[3].children = list3

                // 智能硬件/物联网
                const array4 = data.data.filter((item) => {
                    if (item.value !== '智能硬件/物联网') item = false
                    return item
                })
                const list4 = array4.map((item) => {
                    return {
                        value: item.name,
                        label: item.name
                    }
                })
                this.options[4].children = list4

                // 设计/产品/测试
                const array5 = data.data.filter((item) => {
                    if (item.value !== '设计/产品/测试') item = false
                    return item
                })
                const list5 = array5.map((item) => {
                    return {
                        value: item.name,
                        label: item.name
                    }
                })
                this.options[5].children = list5

                // 云计算/大数据
                const array6 = data.data.filter((item) => {
                    if (item.value !== '云计算/大数据') item = false
                    return item
                })
                const list6 = array6.map((item) => {
                    return {
                        value: item.name,
                        label: item.name
                    }
                })
                this.options[6].children = list6

                // 技术支撑
                const array7 = data.data.filter((item) => {
                    if (item.value !== '技术支撑') item = false
                    return item
                })
                const list7 = array7.map((item) => {
                    return {
                        value: item.name,
                        label: item.name
                    }
                })
                this.options[7].children = list7
            },
            witch(item) {
                console.log(item)
            },
            async handleSizeChange(item) {
                this.page = item
                const { data } = await this.$http.get('/UserAndCurriculum', {
                    params: {
                        skip: 0,
                        limit: item
                    }
                })
                this.currentPage = 1
                this.list = data.data
            },
            async handleCurrentChange(item) {
                const { data } = await this.$http.get('/UserAndCurriculum', {
                    params: {
                        skip: item,
                        limit: this.page
                    }
                })
                this.list = data.data
            },
            shancuUser(item) {
                this.scope = item
                this.dialogVisible = true
            },
            handleClose() {
                this.value = ''
                this.dialogVisible = false
            },
            handleChange() {

            },
            async tijiao() {
                const list = await this.$http.post('/addStudy', {
                    study: this.value[1],
                    user: this.scope.user
                })
                if (list.data.state === 200) {
                    this.$message.success('添加成功')
                } else {
                    this.$message.error('添加失败')
                }
                console.log(this.value, this.scope, list)
                this.getList()
            },
            async fn(e, item) {
                const list = await this.$http.get('/delete', {
                    params: {
                        user: item.user,
                        study: e.target.parentElement.innerText
                    }
                })
                if (list.data.state === 200) {
                    this.$message.success('删除成功')
                } else {
                    this.$message.error('删除失败')
                }
                this.getList()
                console.log(e.target.parentElement.innerText, item, list)
            },
            async search() {
                const { data } = await this.$http.post('/searchAdmin2', {
                    user: this.input3,
                    skip: 0,
                    limit: 6
                })
                this.list = data.data
            }
        },
        computed: {
        }
    }
</script>

<style lang="less" scoped>
.row {
    margin-bottom: 20px;
}
.pagin{
    margin-top: 10px;
}
.tag{
    margin: 10px;
}
</style>