// api/proxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  createProxyMiddleware({
    target: 'https://bdixtv24.site', // External URL to proxy
    changeOrigin: true, // Needed to change the origin for proxying
    pathRewrite: {
      '^/api/proxy': '', // This rewrites the URL path (if needed)
    },
    headers: {
      Referer: 'https://bdixtv24.site', // If the external server expects a referer header
    },
  })(req, res); // Proxy the request
};
