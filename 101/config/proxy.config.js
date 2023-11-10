const { BASE_CONFIG } = import('../src/config/url.js')
proxyMap = {
    '/api': {
        target: '',
        changeOrigin: true,
        ws: true
    }
}
module.exports = proxyMap

