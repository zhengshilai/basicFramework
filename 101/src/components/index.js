const fileComponents = require.context('./', true, /\.vue/)
const ZSLComponents = {}
fileComponents.keys().map(filename => { 
    ZSLComponents[filename.replace(/^\.\//, '').replace(/\.\w+$/, '')] = fileComponents[filename].default
})
return ZSLComponents