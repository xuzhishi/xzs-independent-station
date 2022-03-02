module.exports = {
    // 关闭eslint
    lintOnSave: false,
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: `https://us-central1-xdtx-6abd1.cloudfunctions.net/`, //对应自己的接口
                changeOrigin: true,
                ws: true,

            }
        }
    }
}