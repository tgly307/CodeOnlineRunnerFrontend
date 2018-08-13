module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      vue: "Vue",
      "element-ui": "ELEMENT"
    }
  },

  lintOnSave: undefined
};
