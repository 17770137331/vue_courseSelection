<template>
    <div class="resgiterPage">
        <!-- <h1 class="title">江西工业工程职业技术学院</h1> -->
        <el-card class="card">
            <el-form :model="model" :rules="rules" ref="ref">
                <el-form-item>
                    <h2>用户登录</h2>    
                </el-form-item>
                <el-form-item prop="user">
                    <el-input v-model="model.user" prefix-icon="el-icon-user-solid" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="paw">
                    <el-input type="password" v-model="model.paw" prefix-icon="el-icon-s-goods" placeholder="请输入密码"></el-input>
                </el-form-item>
                 <el-form-item class="yz" prop="value">
                    <SliderVerificationCode v-model="model.value" class="silder"/>
                    <span class="text">请滑动验证码</span>
                </el-form-item>
                 <el-form-item>
                    <el-button @click="login" type="primary" class="zc">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
    export default {
        data() {
            const bb = function(rules, value, callback) {
                console.log(value)
                if (value === true) {
                    callback()
                } else {
                    callback(new Error('请滑动验证码'))
                }
            }
            return {
                model: {
                    user: '',
                    paw: '',
                    value: false
                },
                rules: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    paw: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    value: [
                         { validator: bb, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            ...mapMutations(['setUser', 'setIsLogin']),
            login() {
                this.$refs.ref.validate(async(item) => {
                    if (!item) return null
                    const { data } = await this.$http.post('/login', this.model)
                    if (data.state === 200) {
                        this.setUser(this.model.user)
                        this.setIsLogin()
                        window.localStorage.setItem('user', this.model.user)
                        this.$message.success(data.msg)
                        this.$router.push('/')
                    } else {
                        this.$message.error('用户名或密码错误')
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
h2{
    margin: 0;
}
.resgiterPage{
    width: 100%;
    height: 100%;
    background-image: url('../../assets/rebc.gif');
    overflow: hidden;
    .card{
        margin: 150px auto;
        width: 450px;
        height: 370px;
        .yz{
            position: relative;
            text-align: right;
            .silder{
                width: 250px;
                margin: 0 !important;
            }
            .text{
                width: 100px;
                position: absolute;
                left: 280px;
                top: -2px;
                color: rgb(153, 153, 153);
            }
        }
        .zc{
            width: 100%;
        }
    }
}
</style>