let BASE_CONFIG
if (process.env.NODE_ENV === 'development') {
    BASE_CONFIG = {
        BASE_URL: 'localhost:',
        WEBSOCKET_URL: 'localhost:',
        BASE_PORT: '8090',
    }
} else { 
    BASE_CONFIG = {
        BASE_URL: '',
        WEBSOCKET_URL: '',
        BASE_PORT: ''
    }
}
module.exports = BASE_CONFIG