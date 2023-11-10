const { proxyMap } = require('./proxy.config.js')
const proConfig = {
    devServer: { 
        proxy: proxyMap
    }
}
module.exports = proConfig