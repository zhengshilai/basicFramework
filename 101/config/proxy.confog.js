const { BASE_CONFIG } = import('@/config/url')
export const proxyMap = {
    '/api': {
        target: '',
        changeOrigin: true,
        ws: true
    }
}

