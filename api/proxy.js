const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  const targetUrl = 'https://bdixtv24.site'; // Base URL of the original service

  // Create the proxy middleware
  const proxy = createProxyMiddleware({
    target: targetUrl,
    changeOrigin: true,
    pathRewrite: {
      '^/api/proxy': '', // Remove `/api/proxy` from the request path
    },
    onProxyReq: (proxyReq) => {
      // Add the Referer header
      proxyReq.setHeader('Referer', 'https://bdixtv24.site/');
    },
  });

  // Pass the request to the proxy
  proxy(req, res);
};
