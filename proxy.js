const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  const proxy = createProxyMiddleware({
    target: 'https://bdixtv24.site', // The actual target
    changeOrigin: true,
    pathRewrite: { '^/api/proxy': '' }, // Rewrite API route
    onProxyReq: (proxyReq) => {
      proxyReq.setHeader('Referer', 'https://bdixtv24.site/');
    },
  });

  return proxy(req, res); // Pass request to proxy
};

