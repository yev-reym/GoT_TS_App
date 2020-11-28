const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const ENTRY_PATH = path.resolve(__dirname, '..', 'src', 'components', 'index.tsx')
const OUT_PATH = path.resolve(__dirname, '..', 'build')
const SRC_PATH = path.resolve(__dirname, '..', 'src')

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../', 'src', 'index.html'),
})

const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    API_REQUEST_DOMAIN: JSON.stringify('https://www.anapioficeandfire.com/api/'),
  },
})

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  ignoreOrder: true,
  filename: '[contenthash].bundle.min.css',
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
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: ['node_modules'],
    alias: {
      Components: path.resolve(__dirname, '..', 'components'),
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
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.join(__dirname, '..', 'assets', 'scss')],
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
          MiniCssExtractPlugin.loader
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2|gif|svg|png|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: [
          /\.js$/,
          /\.html$/,
          /\.json$/,
          /node_modules/,
        ],
        use: [{ loader: 'file-loader' }],
      },
    ],
  },

  plugins: [
    htmlPlugin,
    definePlugin,
    miniCssExtractPlugin
  ],
}