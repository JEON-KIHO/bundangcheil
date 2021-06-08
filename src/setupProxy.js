const proxy = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        '/v2/api',
        proxy({
            target: 'http://localhost:6300',
            changeOrigin: true,
        })
    )
}