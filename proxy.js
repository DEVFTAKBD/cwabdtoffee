const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

// Proxy middleware to add the Referer header
app.use(
  '/proxy',
  createProxyMiddleware({
    target: 'https://bdixtv24.site',
    changeOrigin: true,
    pathRewrite: {
      '^/proxy': '', // Remove '/proxy' from the request URL
    },
    onProxyReq: (proxyReq) => {
      proxyReq.setHeader('Referer', 'https://bdixtv24.site/');
    },
  })
);

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
