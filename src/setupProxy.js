const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  const path = 'http://localhost:5000';
  app.use(
    '/api',
    proxy.createProxyMiddleware({
      target: path
    })
  );
};
