const { proxyMap } = import('./proxy.confog')
const proConfig = {
    devServer: { 
        Proxy: proxyMap
    }
}
module.exports = proConfig