module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.ignoreWarnings = [
        {
          message: /stylis-plugin-rtl/,
        },
      ];
      return webpackConfig;
    },
  },
};
