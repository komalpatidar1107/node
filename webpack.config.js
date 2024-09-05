const path = require('path');
 
module.exports = {
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "path": require.resolve("path-browserify"),
      "fs": false,
      "http": require.resolve("stream-http"),
      "zlib": require.resolve("browserify-zlib"),
      "url": require.resolve("url/"),
      "stream": require.resolve("stream-browserify"),
      "querystring": require.resolve("querystring-es3"),
      "timers": require.resolve("timers-browserify")
    },
  },
  // other configurations...
};