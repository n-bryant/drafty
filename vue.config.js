module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/variables.scss";
          @import "@/scss/mixins.scss";
          @import "@/scss/functions.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    // clear all existing loaders.
    // if you don't do this, the loader below will be appended to
    // existing loaders of the rule.
    svgRule.uses.clear();

    // add replacement loader(s)
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  }
};
