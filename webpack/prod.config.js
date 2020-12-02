const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const ENTRY_PATH = path.resolve(__dirname, '..', 'src', 'components', 'index.tsx')
const OUT_PATH = path.resolve(__dirname, '..', 'build')
const SRC_PATH = path.resolve(__dirname, '..', 'src')

const htmlPlugin = new HtmlWebpackPlugin({
  inject: true,
  template: path.resolve(__dirname, '..', 'index.html'),
})

const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    API_REQUEST_DOMAIN: JSON.stringify('https://www.anapioficeandfire.com/api/'),
    ENVIRONMENT: JSON.stringify('prod')
  },
})

const breakpoints = {
  small: 414,
  medium: 768,
  large: 1024,
  xlarge: 1280,
}

module.exports = {
  context: __dirname,

  mode: 'production',

  target: 'web',

  entry: ENTRY_PATH,

  output: {
    path: OUT_PATH,
    filename: '[hash].bundle.js',
    chunkFilename: '[id].[hash].bundle.js',
    publicPath: 'https://yev-reym.github.io/GoT_TS_App/'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: ['node_modules'],
    alias: {
      Components: path.resolve(__dirname, '..', 'src', 'components'),
      Utils: path.resolve(__dirname, '..', 'src', 'utils'),
      Reducers: path.resolve(__dirname, '..', 'src', 'reducers'),
    },
  },

  optimization: {
    namedModules: true,
    splitChunks: {
      minChunks: 3,
    },
    noEmitOnErrors: true,
  },

  module: {
    rules: [
      {
        // All files that end with a '.ts' or '.tsx' extension
        test: /\.(ts|tsx)$/,
        include: SRC_PATH,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "source-map-loader"
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, '..', 'src'),
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.join(__dirname, '..', 'src')],
              },
            },
          },
          {
            loader: '@epegzz/sass-vars-loader',
            options: {
              vars: {
                fontsPath: path.resolve(__dirname, '../src/assets/fonts/'),
                breakpointsmall: `"${breakpoints.small}"`,
                breakpointmedium: `"${breakpoints.medium}"`,
                breakpointlarge: `"${breakpoints.large}"`,
                breakpointxlarge: `"${breakpoints.xlarge}"`,
              },
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, '../src/assets/scss/variables.scss'),
                path.resolve(__dirname, '../src/assets/scss/fonts.scss'),
                path.resolve(__dirname, '../src/assets/scss/mixins.scss'),
              ],
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: [
          /\.js$/,
          /\.html$/,
          /\.json$/,
          /node_modules/,
        ],
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }],
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        use: [{
          /* inline if smaller than 10 KB, otherwise load as a file */
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[ext]',
          }
        }]
      },
    ],
  },

  plugins: [
    htmlPlugin,
    definePlugin,
  ],
}