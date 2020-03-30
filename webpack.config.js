const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// const APP_PATH = path.resolve(__dirname, '/src/app');
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

const htmlWebpack = () => (
  new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
  })
);

const copyWebpack = () => (
  new CopyWebpackPlugin([
    { from: './public' },
  ])
);

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
    htmlWebpack(),
    copyWebpack(),
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
    minimizer: [new TerserPlugin({
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
    })],
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
