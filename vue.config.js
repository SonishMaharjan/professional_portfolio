module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/index.scss";`
      }
    }
  },
  configureWebpack: {
    // It will be merged into the final Webpack config
    plugins: []
  }
};
