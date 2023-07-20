const withImages = require('next-images')
module.exports = withImages()

module.exports = function (webpackEnv) {
    // ...
    return {
     // ...
      resolve: {
        // ...
        fallback: {
          path: require.resolve("path-browserify"),
          stream: require.resolve("stream-browserify"),
        }
      }
    }
  }
  