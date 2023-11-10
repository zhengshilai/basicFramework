const routerFiles = require.context('.', false, /\.js/)
let routerConfig = []
routerFiles.keys().map(filename => { 
    if (filename !== './index.js') {
        routerConfig = [
            ...routerConfig,
            ...routerFiles(filename).default
        ]
    }
})

export default routerConfig 