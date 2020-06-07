<template>
    <div class="pageNav">
       <div class="font">{{ title }}</div>
       <div class="icon">
           <span>
               <i class="el-icon-menu"></i>
              
           </span>
           <span>
               <i class="el-icon-s-unfold"></i>
           </span>
       </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            ...mapState(['item'])
        },
        computed: {
            title() {
                return this.item()
            }
        }
    }
</script>

<style lang="less" scoped>
.pageNav{
    display: flex;
    // position: absolute;
    justify-content: space-between;
    align-items: center;
    margin-top: 54px;
    margin-left: 20px;
    // top: 120px;
    // left: 500px;
    width: 760px;
    height: 40px;
    background-color: white;
    color: gray;
    .font{
        padding: 0 18px;
        background: #fff;
        height: inherit;
        line-height: 40px;
        border-right: 1px solid #e4e4e4;
        font-size: 12px;
        font-weight: 400;
        cursor: default;
    }
    .icon{
        display: flex;
        height: inherit;
        span{
            line-height: 40px;
            font-size: 20px;
            text-align: center;
            width: 36px;
            height: inherit;
            border-left: 1px solid #e4e4e4;
        }
    }
}
</style>