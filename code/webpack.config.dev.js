const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseConfig = require('./webpack.config.base');

// provide dev-specific overrides
module.exports = merge(baseConfig, {
  mode: 'development',

  plugins: [
    // check size of our release builds
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle_sizes_dev.html',
    }),
  ],

  // dev runs on port 9000
  devServer: {
    port: 9555,
  },

  // pass source-map so we can debug code easier
  devtool: 'source-map',
});
