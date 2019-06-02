const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseConfig = require('./webpack.config.base');

// provide dev-specific overrides
module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle_sizes_prod.html',
    }),
  ],

  // for modules we want to load from CDN's so that our bundle size is reduced, we can include here
  // the key in the object is hte module name
  // the value in the object is the reference we used in our index.js or App.js wherever
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
});
