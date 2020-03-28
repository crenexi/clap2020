const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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

module.exports = {
  entry: './src/main.jsx',
  output: {
    path: DIST_PATH,
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
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
};
