import * as webpack from 'webpack';
import * as path from 'path';

const CleanWebpackPlugin = require('clean-webpack-plugin');
const DefinePlugin = webpack.DefinePlugin;
const LoaderOptionsPlugin = webpack.LoaderOptionsPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NoEmitOnErrorsPlugin = webpack.NoEmitOnErrorsPlugin;
const OccurrenceOrderPlugin = webpack.optimize.OccurrenceOrderPlugin;

const config = {
  mode: 'development',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: ['node_modules']
  },

  entry: {
    client: './src/client'
  },

  output: {
    filename: 'assets/js/[name].js',
    path: path.resolve(__dirname, './target'),
    publicPath: '/'
  },

  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),

    new LoaderOptionsPlugin({
      debug: true
    }),

    new CleanWebpackPlugin(['target']),

    new HtmlWebpackPlugin(),

    new OccurrenceOrderPlugin(true),

    new NoEmitOnErrorsPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.(ts|tsx|jsx)$/,
        exclude: [/\.(spec|e2e|d)\.(ts|tsx|js|jsx)$/],
        loader: 'ts-loader'
      },
      {
        test: /\.styl$/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'stylus-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'assets/images/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'assets/fonts/[name].[ext]?[hash]'
        }
      }
    ]
  },

  optimization: {
    minimize: false,
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          minSize: 1
        }
      }
    }
  }
};

export default config;