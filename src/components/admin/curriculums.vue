<template>
    <div>
        <el-card>
            <el-row :gutter="20" class="row">
               <el-col :span="8">
                   <el-input v-model="input3" placeholder="请输入内容" clearable >
                       <el-button @click="search" slot="append" icon="el-icon-search"></el-button>
                   </el-input>
               </el-col>
               <el-col :span="4">
                   <el-button type="primary" @click="addUser">添加课程</el-button>
               </el-col>
           </el-row>
            <el-table
            border
            stripe
            :data="list"
            >
                <el-table-column type="index" align="center"></el-table-column>
                <el-table-column prop="name" label="课程名称" ></el-table-column>
                <el-table-column prop="credit" label="课程学分" ></el-table-column>
                <el-table-column prop="teacher" label="课程教师" ></el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                   <el-button @click="shancuUser(scope.row)" type="primary" icon="el-icon-edit" size="mini"></el-button>
                   <el-button @click="deleteUser(scope.row)" type="danger" icon="el-icon-delete" size="mini"></el-button>
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
                <el-form :model="model" :rules="rules" ref="ref" label-width="100px">
                    <el-form-item prop="name" label="课程名称：">
                        <el-input v-model="model.name" placeholder="请输入课程名称"></el-input>
                    </el-form-item>
                    <el-form-item prop="credit" label="课程学分：">
                        <el-input v-model="model.credit" placeholder="请输入课程学分"></el-input>
                    </el-form-item>
                    <el-form-item prop="teacher" label="课程教师：">
                        <el-input v-model="model.teacher" placeholder="请输入课程教师"></el-input>
                    </el-form-item>
                    <el-form-item prop="keshi" label="课程时间：">
                        <el-input v-model="model.keshi" placeholder="请输入课程时间"></el-input>
                    </el-form-item>
                    <el-form-item prop="describe" label="课程描述：">
                        <el-input v-model="model.describe" placeholder="请输入课程描述"></el-input>
                    </el-form-item>
                    <el-form-item prop="prcture" label="课程图片：">
                        <el-input v-model="model.prcture" placeholder="请输入课程图片地址"></el-input>
                    </el-form-item>
                    <el-form-item prop="value" label="课程类型：">
                        <el-select v-model="model.value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="handleClose">取 消</el-button>
                    <el-button type="primary" @click="tijiao">确 定</el-button>
                </span>
                </el-dialog>

                <el-dialog
                title="修改课程"
                :visible.sync="dialogVisible2"
                width="50%"
                :before-close="handleClose2">
                <el-form :model="model2" :rules="rules" ref="ref2" label-width="100px">
                     <el-form-item prop="name" label="课程名称：">
                        <el-input v-model="model2.name" placeholder="请输入课程名称"></el-input>
                    </el-form-item>
                    <el-form-item prop="credit" label="课程学分：">
                        <el-input v-model="model2.credit" placeholder="请输入课程学分"></el-input>
                    </el-form-item>
                    <el-form-item prop="teacher" label="课程教师：">
                        <el-input v-model="model2.teacher" placeholder="请输入课程教师"></el-input>
                    </el-form-item>
                    <el-form-item prop="keshi" label="课程时间：">
                        <el-input v-model="model2.keshi" placeholder="请输入课程时间"></el-input>
                    </el-form-item>
                    <el-form-item prop="describe" label="课程描述：">
                        <el-input v-model="model2.describe" placeholder="请输入课程描述"></el-input>
                    </el-form-item>
                    <el-form-item prop="prcture" label="课程图片：">
                        <el-input v-model="model2.prcture" placeholder="请输入课程图片地址"></el-input>
                    </el-form-item>
                    <el-form-item prop="value" label="课程类型：">
                        <el-select v-model="model2.value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="handleClose2">取 消</el-button>
                    <el-button type="primary" @click="tijiao2">确 定</el-button>
                </span>
                </el-dialog>
        </el-card>
    </div>
</template>

<script>
    export default {
        created() {
            this.getList()
        },
        data() {
            return {
                list: [],
                currentPage: 1,
                size: 6,
                total: 16,
                page: 6,
                input3: '',
                dialogVisible: false,
                 model: {
                    name: '',
                    credit: '',
                    teacher: '',
                    keshi: '',
                    describe: '',
                    prcture: '',
                    value: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入课程名称', trigger: 'blur' }
                    ],
                    credit: [
                        { required: true, message: '请输入课程学分', trigger: 'blur' }
                    ],
                    teacher: [
                        { required: true, message: '请输入课程教师', trigger: 'blur' }
                    ],
                    keshi: [
                        { required: true, message: '请输入课程时间', trigger: 'blur' }
                    ],
                    describe: [
                        { required: true, message: '请输入课程说明', trigger: 'blur' }
                    ],
                    prcture: [
                        { required: true, message: '请输入课程图片地址', trigger: 'blur' }
                    ],
                    value: [
                        { required: true, message: '请选择课程类型', trigger: 'blur' }
                    ] 
                },
                options: [{
                    value: '前端开发',
                    label: '前端开发'
                    }, {
                    value: '移动开发',
                    label: '移动开发'
                    }, {
                    value: '后端开发',
                    label: '后端开发'
                    }, {
                    value: '人工智能',
                    label: '人工智能'
                    }, {
                    value: '智能硬件/物联网',
                    label: '智能硬件/物联网'
                    }, {
                    value: '设计/产品/测试',
                    label: '设计/产品/测试'
                    }, {
                    value: '云计算/大数据',
                    label: '云计算/大数据'
                    }, {
                    value: '技术支撑',
                    label: '技术支撑'
                }],
                dialogVisible2: false,
                model2: {
                    name: '',
                    credit: '',
                    teacher: '',
                    keshi: '',
                    describe: '',
                    prcture: '',
                    value: ''
                },
                old2: {}
            }
        },
        methods: {
            async getList() {
                const { data } = await this.$http.post('/curriculum')
                this.list = data.data
                this.total = data.total
                console.log(data)
            },
            witch(item) {
                console.log(item)
            },
             async handleSizeChange(item) {
                this.page = item
                const { data } = await this.$http.post('/curriculum', {
                    skip: 0,
                    limit: item
                })
                this.currentPage = 1
                this.list = data.data
            },
            async handleCurrentChange(item) {
                const { data } = await this.$http.post('/curriculum', {
                    skip: item,
                    limit: this.page
                })
                this.list = data.data
            },
            async search() {
                const { data } = await this.$http.post('/searchCurriculum', {
                    user: this.input3,
                    skip: 0,
                    limit: 6
                })
                this.list = data.data
            },
            addUser() {
                this.dialogVisible = true
            },
            handleClose() {
                this.$refs.ref.resetFields()
                this.model.name = ''
                this.model.credit = ''
                this.model.teacher = ''
                this.model.keshi = ''
                this.model.describe = ''
                this.model.prcture = ''
                this.model.value = ''
                this.dialogVisible = false
            },
            async tijiao() {
                this.$refs.ref.validate(async item => {
                    if (!item) return null
                    const { data } = await this.$http.post('/addCurriculum', this.model)
                    // console.log(data)
                    if (data.state === 200) {
                        this.$message.success(data.msg)
                    } else {
                        this.$message('课程名称重复了！')
                    }
                     this.dialogVisible = false
                    this.getList()
                })  
            },
             handleClose2() {
                this.$refs.ref2.resetFields()
                this.model.name = ''
                this.model.credit = ''
                this.model.teacher = ''
                this.model.keshi = ''
                this.model.describe = ''
                this.model.prcture = ''
                this.model.value = ''
                this.dialogVisible2 = false
            },
            tijiao2() {
               this.$refs.ref2.validate(async item => {
                    if (!item) return null
                    const { data } = await this.$http.post('/updataCurriculum', {
                        new1: this.model2,
                        old1: this.old2
                    })
                    // console.log(data, this.$refs, item)
                    if (data.state === 200) {
                        this.$message.success(data.msg)
                    } else {
                        this.$message('修改用户失败')
                    }
                     this.dialogVisible2 = false
                    this.getList()
                })
            },
            shancuUser(item) {
                this.old2 = item
                this.dialogVisible2 = true
                this.model2.name = item.name
                this.model2.credit = item.credit
                this.model2.teacher = item.teacher
                this.model2.keshi = item.classhuor
                this.model2.describe = item.describe
                this.model2.prcture = item.prcture
                this.model2.value = item.value
                // console.log(item)
            },
            async deleteUser(item) {
                const { data } = await this.$http.post('/deleteCurriculum', item)
                if (data.state === 200) {
                    this.$message.success(data.msg)
                } else {
                    this.$message('修改用户失败')
                }
                this.currentPage = 1
                this.getList()
            }
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
</style>