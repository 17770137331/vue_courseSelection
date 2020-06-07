module.exports = {
    devServer: {
        proxy: {
            //只要你通过当前的服务器 请求的地址是api开头的 就会被代理请求
            //例如：http://127.0.0.1:3000/api 就会被代理
            //例如：http://127.0.0.1:3000/aa  就不会被代理
            //^表示开头
            '/api': {
                target: 'http://127.0.0.1:3000',
                //路径重写
                pathRewrite: {
                    "/api": "/"
                },
                ws: true,
                //是否修改原始地址
                changeOrigin: true
            }

        }
    }
}