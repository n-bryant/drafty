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
  }
};
