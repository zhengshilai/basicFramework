const { proxyMap } = import('./proxy.confog')
const devConfig = {
    devServer: { 
        Proxy: proxyMap
    }
}
module.exports = devConfig