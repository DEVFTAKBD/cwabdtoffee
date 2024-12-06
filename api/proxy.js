const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  // The base URL you want to proxy requests to
  const target = 'https://bdixtv24.site';  // The source site of the m3u8 link

  // Set up proxy middleware
  const proxy = createProxyMiddleware({
    target: target,
    changeOrigin: true,  // This makes the proxy request look like it comes from your Vercel domain
    pathRewrite: {
      // Remove the /api/proxy part of the URL path to correctly map to the external link
      '^/api/proxy': '',  // This means the URL will forward directly to the destination
    },
    onProxyReq: (proxyReq, req, res) => {
      // Add the necessary headers to the request
      proxyReq.setHeader('Referer', 'https://bdixtv24.site/');
      proxyReq.setHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36');
    },
  });

  // Use the proxy to forward the request
  return proxy(req, res);
};
