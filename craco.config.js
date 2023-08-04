module.exports = {
    plugins: [
      {
        plugin: require("craco-cesium")()
      }
    ], webpack: {
        configure: {
        experiments: {
            topLevelAwait: true,
        },
        },
    },
  };