<template>
    <div class="adminLogin">
        <el-card class="card">
            <!-- <slide-verify :l="42"
            :r="10"
            :w="310"
            :h="0"
            slider-text="向右滑动"
            @success="onSuccess"
            @fail="onFail"
            @refresh="onRefresh"
            ></slide-verify> -->
            <!-- <div>{{msg}}</div> -->
            <h3>管理员登录</h3>
            <el-form @submit.native="login" :model="model" :rules="rule" ref="ref" label-width="80px">
                <el-form-item prop="user" label="用户名:" placeholder="请输入用户名">
                    <el-input v-model="model.user"></el-input>
                </el-form-item>
                <el-form-item prop="paw" label="密码:" placeholder="请输入密码">
                    <el-input type="password" v-model="model.paw" ></el-input>
                </el-form-item>
                <el-form-item prop="yzm" label="验证码:" placeholder="请输入验证码">
                    <el-input v-model="model.yzm" class="yzm"></el-input>
                    <img :src="yzm" alt="" @click="img">
                </el-form-item>
                <el-form-item class="buttonRight">
                    <el-button type="primary" native-type="submit">登录</el-button>
                    <el-button type="danger">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {
        async created() {
            // console.log(await this.$http.get('/admin'), 22222)
        },
        data() {
            return {
                // 验证码
                yzm: 'http://127.0.0.1:3000/yzm?' + new Date().getTime(),
                model: {
                    user: 'admin',
                    paw: 'admin',
                    yzm: ''
                },
                rule: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 5, max: 12, message: '请输入5-12个字符', trigger: 'blur' }
                    ],
                    paw: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    yzm: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                },
                msg: ''
            }
        },
        methods: {
            // 获取验证码
            hqYzm() {
                this.yzm = 'http://127.0.0.1:3000/yzm?' + new Date().getTime()
            },
            // 切换验证码
            img () {
                this.hqYzm()
            },
            // 登录事件
            login(event) {
                event.preventDefault()
                console.log(this.model)
                this.$refs.ref.validate(async item => {
                    if (!item) return
                    const { data } = await this.$http.post('/adminLogin', this.model)
                    if (data.meta.status !== 200) {
                        this.$notify({
                            title: '提示',
                            message: data.meta.msg
                        })
                         this.hqYzm()
                    } else {
                        this.$message.success(data.meta.msg)
                        this.$router.push('/home')
                    }
                })
            },
            onSuccess() {
                this.msg = 'login success'
            },
            onFail() {
                this.msg = ''
            },
            onRefresh() {
                this.msg = ''
            }
        },
        computed: {
        }
    }
</script>

<style lang="less" scoped>
.adminLogin{
    width: 100%;
    height: 100%;
    background: #fafafb;
    .card{
        h3{
            margin-bottom: 20px;
        }
        .buttonRight{
            float: right;
        }
        .yzm{
            width: 150px;
        }
        img{
            position: absolute;
            right: 0px;
        }
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -200px 0 0 -260px;
        width: 500px;
        height: 320px;
    }
}
</style>
