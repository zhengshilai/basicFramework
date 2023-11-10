const fileComponents = require.context('./', true, /\.vue/)
const ZSLComponents = {}
fileComponents.keys().map(filename => { 
    ZSLComponents[filename.replace(/^\.\//, '').replace(/\.\w+$/, '').split('/')[0]] = fileComponents(filename).default
})
export default ZSLComponents