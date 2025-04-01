const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = () => {
  const environment = process.env.ENVIRONMENT || 'local';

  // Define the environment file path
  const envPath = path.join(__dirname, `./.env.${environment}`);

  // Start DotEnv
  const envVariables = dotenv.config({ path: envPath }).parsed || process.env;

  // Convert Environment Variables -> Object
  const envKeys = Object.keys(envVariables).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(envVariables[next]);
    return prev;
  }, {});

  // Add NODE_ENV to envKeys
  envKeys['process.env.NODE_ENV'] = JSON.stringify(process.env.NODE_ENV || 'development');

  // Returns the Webpack Object
  return {
    entry: {
      app: './src/index.tsx',
    },
    output: {
      filename: 'bundle.js',
      publicPath: '/',
      path: path.join(__dirname, './dist'),
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    // Dev server options
    devServer: {
      static: {
        directory: path.join(__dirname, './dist'),
      },
      port: 4200,
      hot: true,
      historyApiFallback: true,
      client: {
        overlay: true,
      },
      liveReload: true,
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      alias: {
        '@': path.join(__dirname, './src'),
      },
      fallback: {
        "process": require.resolve("process/browser"),
      },
    },

    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: { cacheDirectory: true, babelrc: true },
          },
        },
        { test: /\.css$/, loader: 'style-loader' },
        { test: /\.css$/, loader: 'css-loader' },
        {
          test: /\.(jp?g|png|gif|svg|ico)$/i,
          use: [{ loader: 'file-loader', options: { outputPath: 'assets/' } }],
        },
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader',
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin(envKeys),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, './public', 'index.html'),
      }),
      new CopyPlugin({
        patterns: [
          { from: './public/reset.css', to: './reset.css' },
          { from: './public/favicon-16x16.png', to: './favicon-16x16.png' },
          { from: './public/favicon-32x32.png', to: './favicon-32x32.png' },
        ],
      }),
    ],
  };
};
