<template>
    <div>
        <el-card>
            <el-row :gutter="20" class="row">
               <el-col :span="6">
                     <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                        <el-button @click="search" slot="append" icon="el-icon-search"></el-button>
                    </el-input>
               </el-col>
               <el-col :span="14">
                   <el-button type="primary" @click="addUser">添加用户</el-button>
               </el-col>
           </el-row>
            <el-table
            border
            stripe
            :data="list"
            >
                <el-table-column type="index" align="center"></el-table-column>
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
                title="添加用户"
                :visible.sync="dialogVisible"
                width="50%"
                :before-close="handleClose">
                <el-form :model="model" :rules="rules" ref="ref">
                    <el-form-item prop="user">
                        <el-input v-model="model.user" prefix-icon="el-icon-user-solid" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="paw">
                        <el-input type="password" v-model="model.paw" prefix-icon="el-icon-s-goods" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item prop="email">
                        <el-input v-model="model.email" prefix-icon="el-icon-s-comment" placeholder="请输入邮箱"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="handleClose">取 消</el-button>
                    <el-button type="primary" @click="tijiao">确 定</el-button>
                </span>
                </el-dialog>

                <el-dialog
                title="修改用户"
                :visible.sync="dialogVisible2"
                width="50%"
                :before-close="handleClose2">
                <el-form :model="model2" :rules="rules" ref="ref2">
                    <el-form-item prop="user">
                        <el-input v-model="model2.user" prefix-icon="el-icon-user-solid" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="paw">
                        <el-input type="password" v-model="model2.paw" prefix-icon="el-icon-s-goods" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item prop="email">
                        <el-input v-model="model2.email" prefix-icon="el-icon-s-comment" placeholder="请输入邮箱"></el-input>
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
import validator from 'validator'
    export default {
        created() {
            this.getList()
        },
        data() {
            const cc = function(rules, value, callback) {
                if (validator.isEmail(value)) {
                    callback()
                } else {
                    callback(new Error('请输入邮箱'))
                }
            }
            return {
                list: [],
                currentPage: 1,
                size: 6,
                total: 16,
                page: 6,
                input3: '',
                dialogVisible: false,
                model: {
                    user: '',
                    paw: '',
                    email: ''
                },
                rules: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
                    ],
                    paw: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    email: [
                        { validator: cc, trigger: 'blur' }
                    ]
                },
                dialogVisible2: false,
                model2: {
                    user: '',
                    paw: '',
                    email: ''
                },
                old2: {}
            }
        },
        methods: {
            async getList() {
                const { data } = await this.$http.post('/userList')
                this.list = data.data
                this.total = data.total
                this.currentPage = 1
                // console.log(123)
            },
            witch(item) {
                console.log(item)
            },
            async handleSizeChange(item) {
                this.page = item
                const { data } = await this.$http.post('/userList', {
                    skip: 0,
                    limit: item
                })
                this.currentPage = 1
                this.list = data.data
            },
            async handleCurrentChange(item) {
                const { data } = await this.$http.post('/userList', {
                    skip: item,
                    limit: this.page
                })
                this.list = data.data
            },
            async search() {
                const { data } = await this.$http.post('/searchAdmin', {
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
                this.model.user = ''
                this.model.paw = ''
                this.model.email = ''
                this.dialogVisible = false
            },
            async tijiao() {
                this.$refs.ref.validate(async item => {
                    if (!item) return null
                    const { data } = await this.$http.post('/addUser', this.model)
                    // console.log(data)
                    if (data.state === 200) {
                        this.$message.success(data.msg)
                    } else {
                        this.$message('添加用户失败')
                    }
                     this.dialogVisible = false
                    this.getList()
                })
            },
            handleClose2() {
                this.$refs.ref2.resetFields()
                this.model2.user = ''
                this.model2.paw = ''
                this.model2.email = ''
                this.dialogVisible2 = false
            },
            tijiao2() {
               this.$refs.ref2.validate(async item => {
                    if (!item) return null
                    const { data } = await this.$http.post('/updataUser', {
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
                this.model2.user = item.user
                this.model2.paw = item.paw
                this.model2.email = item.email
                // console.log(item)
            },
            async deleteUser(item) {
                const { data } = await this.$http.post('/deleteUser', item)
                if (data.state === 200) {
                    this.$message.success(data.msg)
                } else {
                    this.$message('修改用户失败')
                }
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