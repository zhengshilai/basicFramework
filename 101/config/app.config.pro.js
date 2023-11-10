const { proxyMap } = require('./proxy.config.js')
const devConfig = {
    devServer: { 
        proxy: proxyMap
    }
}
module.exports = devConfig