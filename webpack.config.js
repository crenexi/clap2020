const path = require('path');
const webpack = require('webpack');
const DotenvWebpack = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const DIST_PATH = path.join(__dirname, '/dist');

// Helper to get environment
const getEnv = (defaultEnv = 'development') => {
  return process.env.BABEL_ENV || process.env.NODE_ENV || defaultEnv;
};

/* #################
#### Loaders #######
################# */

const jsLoaderRule = () => ({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [
    { loader: 'babel-loader' },
    { loader: 'eslint-loader' },
  ],
});

const scssLoaderRule = () => {
  const localIdentName = getEnv() === 'development'
    ? '[name]__[local]___[hash:base64:5]'
    : '[hash:base64:5]';

  return {
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          sourceMap: false,
          localIdentName,
        },
      },
      {
        loader: 'sass-loader',
      },
    ],
  };
};

/* #################
#### Plugins #######
################# */

// Environment variables loader plugin
const createDotenvWebpackPlugin = () => new DotenvWebpack({
  path: path.resolve(__dirname, '.env'),
});

// Environment vars plugin
const createEnvironmentPlugin = () => new webpack.EnvironmentPlugin({
  ASSETS_PATH: '/assets',
  DEBUG: false,
});

// HTML plugin
const createHtmlWebpackPlugin = () => new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
});

// Copy plugin
const createCopyWebpackPlugin = () => new CopyWebpackPlugin([
  { from: './public' },
]);

// Moment locals plugin
const createMomentLocalesPlugin = () => new MomentLocalesPlugin({
  localesToKeep: ['da', 'de-at', 'de-ch', 'el', 'en-au', 'en-ca', 'en-gb', 'en-ie', 'en-nz', 'es-do', 'es-us', 'es', 'fr-ca', 'fr-ch', 'fr', 'hi', 'it', 'ja', 'ko', 'nl-be', 'nl', 'pl', 'pt-br', 'pt', 'ro', 'ru', 'th', 'tl-ph', 'tr', 'uk'],
});

// Minimizer plugin
const createTerserPlugin = () => new TerserPlugin({
  terserOptions: {
    parse: {
      ecma: 8,
    },
    compress: {
      ecma: 5,
      warnings: false,
      inline: 2,
    },
    mangle: {
      safari10: true,
    },
    output: {
      ecma: 5,
      comments: false,
    },
  },
  parallel: true,
  cache: true,
});

/* #################
#### Aliases #######
################# */

const aliasRelativePaths = {
  src: './src',
  config: './src/config',
  types: './src/types',
  utils: './src/utils',
  hooks: './src/hooks',
  contexts: './src/contexts',
  services: './src/services',
  components: './src/components',
  scss: './src/scss',
};

/* #################
#### Config ########
################# */

const config = {
  mode: getEnv(),
  entry: './src/main.jsx',
  output: {
    path: DIST_PATH,
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: Object.entries(aliasRelativePaths).reduce((obj, [key, val]) => {
      return { ...obj, [key]: path.resolve(__dirname, val) };
    }, {}),
  },
  module: {
    rules: [
      jsLoaderRule(),
      scssLoaderRule(),
    ],
  },
  plugins: [
    createDotenvWebpackPlugin(),
    createEnvironmentPlugin(),
    createHtmlWebpackPlugin(),
    createCopyWebpackPlugin(),
    createMomentLocalesPlugin(),
  ],
  devServer: {
    port: 4200,
    historyApiFallback: true,
    contentBase: ['./src', './public'],
    inline: true,
    hot: true,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

/* #################
#### Optimization ##
################# */

// Optimize only if production build
if (getEnv() === 'production') {
  config.optimization = {
    minimize: true,
    minimizer: [createTerserPlugin],
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor_app',
          chunks: 'all',
          minChunks: 2,
        },
      },
    },
  };
}

module.exports = config;
