const { defineConfig } = require('@vue/cli-service')
const appConfig = process.env.NODE_ENV === 'production' ? require('./config/app.config.pro') : require('./config/app.config.dev')
module.exports = defineConfig({
  ...appConfig,
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
})
